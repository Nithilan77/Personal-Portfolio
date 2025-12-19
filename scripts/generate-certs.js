import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CERT_DIR = path.join(__dirname, '../public/certifications');
const OUTPUT_FILE = path.join(__dirname, '../src/data/certifications.json');

// Ensure output directory exists
const outputDir = path.dirname(OUTPUT_FILE);
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Helper to get file info
const getFileInfo = (fileName, dirPath) => {
    const ext = path.extname(fileName).toLowerCase();
    const isPdf = ext === '.pdf';
    const isImage = ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext);

    if (!isPdf && !isImage) return null;

    // Path relative to public for the frontend
    const relativePath = path.relative(path.join(__dirname, '../public'), path.join(dirPath, fileName));
    // Replace backslashes with forward slashes for URL compatibility
    const urlPath = '/' + relativePath.split(path.sep).join('/');

    return {
        name: path.basename(fileName, ext), // Remove extension for display name
        path: urlPath,
        type: isPdf ? 'pdf' : 'image',
        fileName: fileName
    };
};

// Recursive scan
const scanDirectory = (dir) => {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    const result = {};

    // Group by folders (categories) or add to 'Misc' if in root
    const rootItems = [];

    items.forEach(item => {
        if (item.isDirectory()) {
            const subDir = path.join(dir, item.name);
            const subItems = fs.readdirSync(subDir)
                .map(file => getFileInfo(file, subDir))
                .filter(Boolean);

            if (subItems.length > 0) {
                result[item.name] = subItems;
            }
        } else {
            const fileInfo = getFileInfo(item.name, dir);
            if (fileInfo) {
                rootItems.push(fileInfo);
            }
        }
    });

    if (rootItems.length > 0) {
        result['Miscellaneous'] = rootItems;
    }

    return result;
};

try {
    if (!fs.existsSync(CERT_DIR)) {
        console.log('Creating certifications directory...');
        fs.mkdirSync(CERT_DIR, { recursive: true });
    }

    console.log('Scanning certifications...');
    const data = scanDirectory(CERT_DIR);

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(data, null, 2));
    console.log(`Manifest generated at ${OUTPUT_FILE}`);
    console.log(JSON.stringify(data, null, 2));
} catch (error) {
    console.error('Error generating certifications:', error);
    process.exit(1);
}
