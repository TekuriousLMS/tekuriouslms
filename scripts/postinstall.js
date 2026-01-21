// This script runs during Vercel build to generate Prisma client
const { execSync } = require('child_process');

console.log('Generating Prisma client...');
try {
    execSync('npx prisma generate', { stdio: 'inherit' });
    console.log('Prisma client generated successfully!');
} catch (error) {
    console.error('Failed to generate Prisma client:', error);
    process.exit(1);
}
