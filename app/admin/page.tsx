'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { db } from '@/lib/firebase';
import { collection, query, orderBy, getDocs, Timestamp } from 'firebase/firestore';

type ContactSubmission = {
    id: string;
    firstName: string;
    lastName: string;
    company: string;
    role: string;
    turnover: string;
    website: string;
    message: string;
    submittedAt: Timestamp;
    status: string;
};

export default function AdminPage() {
    const [code, setCode] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState('');
    const [contacts, setContacts] = useState<ContactSubmission[]>([]);
    const [loadingData, setLoadingData] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (code === '65350000') {
            setIsAuthenticated(true);
            setError('');
        } else {
            setError('Code incorrect.');
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            const fetchContacts = async () => {
                setLoadingData(true);
                try {
                    // Note: You might need to create a Firestore index for this query to work perfectly
                    // if the collection gets large, but for now it should be fine.
                    const q = query(collection(db, "contacts"), orderBy("submittedAt", "desc"));
                    const querySnapshot = await getDocs(q);
                    const loadedContacts: ContactSubmission[] = [];
                    querySnapshot.forEach((doc) => {
                        loadedContacts.push({ id: doc.id, ...doc.data() } as ContactSubmission);
                    });
                    setContacts(loadedContacts);
                } catch (err) {
                    console.error("Error fetching contacts:", err);
                } finally {
                    setLoadingData(false);
                }
            };
            fetchContacts();
        }
    }, [isAuthenticated]);

    if (isAuthenticated) {
        return (
            <Section className="min-h-[60vh]">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-display font-playfair">Espace Administration</h1>
                    <Button variant="secondary" onClick={() => setIsAuthenticated(false)}>Déconnexion</Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <h3 className="text-gray-500 text-sm font-medium">Total Demandes</h3>
                        <p className="text-4xl font-playfair text-accent-blue mt-2">{contacts.length}</p>
                    </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                    <div className="p-6 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
                        <h2 className="font-playfair text-xl">Dernières demandes</h2>
                    </div>

                    {loadingData ? (
                        <div className="p-12 text-center text-gray-500">Chargement des données...</div>
                    ) : contacts.length === 0 ? (
                        <div className="p-12 text-center text-gray-500">Aucune demande pour le moment.</div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-gray-50 text-text-secondary font-medium border-b border-gray-100">
                                    <tr>
                                        <th className="p-4">Date</th>
                                        <th className="p-4">Nom</th>
                                        <th className="p-4">Entreprise & Poste</th>
                                        <th className="p-4">CA</th>
                                        <th className="p-4">Message</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {contacts.map((contact) => (
                                        <tr key={contact.id} className="hover:bg-blue-50/50 transition-colors">
                                            <td className="p-4 whitespace-nowrap text-gray-500">
                                                {contact.submittedAt?.toDate().toLocaleDateString('fr-FR')} <br />
                                                <span className="text-xs">{contact.submittedAt?.toDate().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}</span>
                                            </td>
                                            <td className="p-4 font-medium">
                                                {contact.firstName} {contact.lastName}
                                                <div className="text-xs text-accent-blue font-normal mt-1">{contact.website}</div>
                                            </td>
                                            <td className="p-4">
                                                <div className="font-medium">{contact.company}</div>
                                                <div className="text-xs text-gray-500">{contact.role}</div>
                                            </td>
                                            <td className="p-4">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                    {contact.turnover} M€
                                                </span>
                                            </td>
                                            <td className="p-4 max-w-xs truncate text-gray-500" title={contact.message}>
                                                {contact.message || "-"}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </Section>
        );
    }

    return (
        <Section className="min-h-[60vh] flex flex-col items-center justify-center">
            <div className="w-full max-w-md p-8 bg-white border border-gray-200 rounded-lg shadow-sm">
                <h1 className="text-2xl font-playfair mb-6 text-center">Accès Restreint</h1>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <input
                            type="password"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            placeholder="Code d'accès"
                            className="w-full p-3 bg-background-primary border border-gray-200 rounded-[var(--radius-button)] focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all"
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <Button type="submit" variant="primary" className="w-full justify-center">
                        Entrer
                    </Button>
                </form>
            </div>
        </Section>
    );
}
