/**
 * Automatic Icon Generator and Updater
 * 
 * This script:
 * 1. Reads the master icon from app-icon/icon-512.png
 * 2. Resizes it to all required Android mipmap sizes
 * 3. Copies them to android/app/src/main/res/mipmap-* folders
 * 
 * Usage: npm run update-icon
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Icon sizes for Android mipmap folders
const ICON_SIZES = {
    'mipmap-mdpi': 48,
    'mipmap-hdpi': 72,
    'mipmap-xhdpi': 96,
    'mipmap-xxhdpi': 144,
    'mipmap-xxxhdpi': 192
};

const SOURCE_ICON = path.join(__dirname, 'app-icon', 'icon-512.png');
const ANDROID_RES = path.join(__dirname, 'android', 'app', 'src', 'main', 'res');

async function generateIcons() {
    console.log('🎨 Subah Ki Aarti - Icon Update Script\n');

    // Check if source icon exists
    if (!fs.existsSync(SOURCE_ICON)) {
        console.error('❌ Error: Source icon not found!');
        console.error(`   Please place your 512x512 icon at: ${SOURCE_ICON}`);
        process.exit(1);
    }

    console.log(`📂 Source icon: ${SOURCE_ICON}`);
    console.log(`📱 Target: ${ANDROID_RES}\n`);

    // Process each mipmap size
    for (const [folder, size] of Object.entries(ICON_SIZES)) {
        const outputDir = path.join(ANDROID_RES, folder);

        // Create folder if it doesn't exist
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        const outputLauncher = path.join(outputDir, 'ic_launcher.png');
        const outputRound = path.join(outputDir, 'ic_launcher_round.png');

        try {
            // Resize and save
            await sharp(SOURCE_ICON)
                .resize(size, size, {
                    kernel: sharp.kernel.lanczos3,
                    fit: 'contain',
                    background: { r: 0, g: 0, b: 0, alpha: 0 }
                })
                .png({ quality: 100 })
                .toFile(outputLauncher);

            // Copy to round icon as well
            fs.copyFileSync(outputLauncher, outputRound);

            console.log(`✅ ${folder}: ${size}x${size}px`);
        } catch (error) {
            console.error(`❌ Failed to generate ${folder}: ${error.message}`);
        }
    }

    console.log('\n🎉 Icon update complete!');
    console.log('\n📝 Next steps:');
    console.log('   1. Build your app: npm run build:android');
    console.log('   2. Install APK on device');
    console.log('   3. New icon will appear! 🚀\n');
}

// Run the script
generateIcons().catch(error => {
    console.error('❌ Error:', error.message);
    process.exit(1);
});
