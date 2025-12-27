const fs = require('fs');
// Try explicit path if package resolution fails or behaves unexpectedly
const pdfModule = require('./node_modules/pdf-parse/dist/pdf-parse/cjs/index.cjs');

const files = [
    'Nex Deal Advisory – Blueprint Du Site (version Commentable).pdf',
    'Recommandation de Design pour le site NexDeal Advisory.pdf'
];

async function readPdfs() {
    console.log('Keys of pdfModule:', Object.keys(pdfModule));

    // Attempt to find the parse function
    // Based on previous logs, 'PDFParse' exists. Let's see if it's the default or named.
    let parseFunc = pdfModule.default || pdfModule;

    if (typeof parseFunc !== 'function' && pdfModule.PDFParse) {
        console.log('Using pdfModule.PDFParse');
        // Check if PDFParse is a class or function
        parseFunc = pdfModule.PDFParse;
    }

    for (const file of files) {
        if (fs.existsSync(file)) {
            const dataBuffer = fs.readFileSync(file);
            try {
                // Try calling it as a function first
                console.log(`Attempting to parse ${file}...`);
                let data;
                try {
                    data = await parseFunc(dataBuffer);
                } catch (err) {
                    console.log('Direct call failed, trying new PDFParse...');
                    // If it's a class maybe?
                    data = await new parseFunc(dataBuffer);
                }

                console.log(`\n\n--- CONTENT OF ${file} ---\n`);
                if (data && data.text) {
                    console.log(`Text length: ${data.text.length}`);
                    console.log(`Trimmed length: ${data.text.trim().length}`);
                    console.log(`First 500 chars: ${data.text.substring(0, 500).replace(/\n/g, '\\n')}`);
                } else {
                    console.log('No text property found.');
                }
            } catch (e) {
                console.error(`Error reading ${file}:`, e);
            }
        } else {
            console.log(`File not found: ${file}`);
        }
    }
}

readPdfs();
