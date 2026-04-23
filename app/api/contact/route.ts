import { NextResponse } from 'next/server';
import { z } from 'zod';
import emailjs from '@emailjs/nodejs';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const schema = z.object({
    name: z.string().min(2, "Le nom doit contenir au moins 2 caractères.").max(100, "Le nom est trop long."),
    email: z.string().email("L'adresse email est invalide."),
    phone: z.string().optional(),
    turnover: z.enum(['0-50', '50-100', '100-500', '500+'], { message: "Veuillez sélectionner une tranche de CA." }),
    message: z.string().min(10, "Le message doit faire au moins 10 caractères.").max(2000, "Le message est trop long.")
});

// Basic in-memory rate limiting map
// Note: For production use cases, it's highly recommended to use a robust solution like Upstash Ratelimit (Redis).
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();

export async function POST(request: Request) {
    try {
        const ip = request.headers.get("x-forwarded-for") || "unknown";
        const now = Date.now();
        
        // Rate limiting logic (5 requests per 10 minutes)
        if (rateLimitMap.has(ip)) {
            const limitRecord = rateLimitMap.get(ip)!;
            if (now - limitRecord.timestamp < 10 * 60 * 1000) {
                if (limitRecord.count >= 5) {
                    return NextResponse.json({ error: "Trop de requêtes. Veuillez réessayer plus tard." }, { status: 429 });
                }
                limitRecord.count++;
            } else {
                rateLimitMap.set(ip, { count: 1, timestamp: now });
            }
        } else {
            rateLimitMap.set(ip, { count: 1, timestamp: now });
        }

        const body = await request.json();
        
        // Zod validation
        const parsed = schema.safeParse(body);
        if (!parsed.success) {
            return NextResponse.json({ success: false, errors: parsed.error.flatten().fieldErrors }, { status: 400 });
        }
        
        const data = parsed.data;

        // Save to Firebase
        await addDoc(collection(db, "contacts"), {
            ...data,
            submittedAt: serverTimestamp(),
            status: 'new'
        });

        // Send Email via EmailJS Node.js SDK
        const SERVICE_ID = process.env.EMAILJS_SERVICE_ID!;
        const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID!;
        const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY!;
        
        emailjs.init({
            publicKey: PUBLIC_KEY,
        });

        await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
            name: data.name,
            email: data.email,
            phone: data.phone || 'Non renseigné',
            turnover: data.turnover,
            message: data.message
        });

        return NextResponse.json({ success: true });
        
    } catch (error) {
        console.error("API Route Error:", error);
        return NextResponse.json({ success: false, error: "Une erreur est survenue lors du traitement." }, { status: 500 });
    }
}
