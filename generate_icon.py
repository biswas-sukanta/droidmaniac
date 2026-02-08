"""
Subah Ki Aarti - App Icon Generator
Generates a beautiful namaste-themed app icon with sunrise gradient
"""

from PIL import Image, ImageDraw, ImageFont
import os

def create_namaste_icon(size=512):
    """Create a namaste icon with sunrise gradient background"""
    
    # Create image with transparent background
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Define gradient colors (sunrise theme)
    colors = [
        (255, 87, 34),   # Deep saffron orange
        (255, 152, 0),   # Orange
        (255, 193, 7),   # Golden yellow
        (255, 224, 130), # Light yellow
        (255, 158, 128)  # Peachy pink
    ]
    
    # Draw gradient background (top to bottom)
    for y in range(size):
        # Calculate color for this row
        ratio = y / size
        index = ratio * (len(colors) - 1)
        lower_idx = int(index)
        upper_idx = min(lower_idx + 1, len(colors) - 1)
        local_ratio = index - lower_idx
        
        # Interpolate between colors
        color = tuple(
            int(colors[lower_idx][i] * (1 - local_ratio) + colors[upper_idx][i] * local_ratio)
            for i in range(3)
        )
        
        draw.line([(0, y), (size, y)], fill=color + (255,))
    
    # Add radial glow from center
    center = size // 2
    max_radius = size // 2
    for radius in range(max_radius, 0, -5):
        alpha = int(30 * (1 - radius / max_radius))
        draw.ellipse(
            [center - radius, center - radius, center + radius, center + radius],
            fill=(255, 255, 255, alpha)
        )
    
    # Draw namaste hands (simplified representation)
    hand_width = size // 4
    hand_height = int(size * 0.4)
    hand_center_x = center
    hand_center_y = int(size * 0.55)
    
    # Draw two hands pressed together
    # Left hand
    left_hand = [
        (hand_center_x - 2, hand_center_y - hand_height // 2),
        (hand_center_x - hand_width // 2, hand_center_y),
        (hand_center_x - 2, hand_center_y + hand_height // 2)
    ]
    
    # Right hand
    right_hand = [
        (hand_center_x + 2, hand_center_y - hand_height // 2),
        (hand_center_x + hand_width // 2, hand_center_y),
        (hand_center_x + 2, hand_center_y + hand_height // 2)
    ]
    
    # Draw hands with glow
    for offset in range(10, 0, -2):
        alpha = 30 - offset * 2
        draw.polygon(left_hand, fill=(255, 255, 255, alpha), outline=(255, 215, 0, alpha))
        draw.polygon(right_hand, fill=(255, 255, 255, alpha), outline=(255, 215, 0, alpha))
    
    # Draw main hands
    draw.polygon(left_hand, fill=(255, 255, 255, 240), outline=(255, 215, 0, 255))
    draw.polygon(right_hand, fill=(255, 255, 255, 240), outline=(255, 215, 0, 255))
    
    # Draw Om symbol above hands (simplified)
    om_y = hand_center_y - hand_height // 2 - 40
    try:
        # Try to use a font that supports Devanagari
        font = ImageFont.truetype("arial.ttf", 60)
        om_text = "ॐ"
        bbox = draw.textbbox((0, 0), om_text, font=font)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]
        draw.text(
            (center - text_width // 2, om_y - text_height // 2),
            om_text,
            fill=(255, 215, 0, 255),
            font=font
        )
    except:
        # Fallback: draw a simple circle with glow if font not available
        draw.ellipse(
            [center - 20, om_y - 20, center + 20, om_y + 20],
            fill=(255, 215, 0, 200),
            outline=(255, 255, 255, 255)
        )
    
    return img

def generate_all_icon_sizes(base_icon, output_dir):
    """Generate all required Android icon sizes"""
    
    sizes = {
        'mipmap-mdpi': 48,
        'mipmap-hdpi': 72,
        'mipmap-xhdpi': 96,
        'mipmap-xxhdpi': 144,
        'mipmap-xxxhdpi': 192
    }
    
    for folder, size in sizes.items():
        folder_path = os.path.join(output_dir, folder)
        os.makedirs(folder_path, exist_ok=True)
        
        # Resize and save
        resized = base_icon.resize((size, size), Image.Resampling.LANCZOS)
        resized.save(os.path.join(folder_path, 'ic_launcher.png'))
        resized.save(os.path.join(folder_path, 'ic_launcher_round.png'))
        
        print(f"✓ Created {folder}/ic_launcher.png ({size}x{size})")

def main():
    print("Generating Namaste App Icon...")
    
    # Create base 512x512 icon
    icon = create_namaste_icon(512)
    
    # Save base icon
    icon.save('app_icon_512.png')
    print("✓ Created app_icon_512.png")
    
    # Generate all Android sizes
    output_dir = 'icons_output'
    generate_all_icon_sizes(icon, output_dir)
    
    print(f"\n✅ All icons generated in '{output_dir}' folder!")
    print("\nNext steps:")
    print("1. Copy the mipmap-* folders to android/app/src/main/res/")
    print("2. Replace existing ic_launcher.png files")
    print("3. Build and test APK")

if __name__ == '__main__':
    main()
