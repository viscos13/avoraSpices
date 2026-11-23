import os
import glob
from PIL import Image
import numpy as np

def make_transparent(input_path, output_path, bg_threshold=242, feather=15):
    img = Image.open(input_path).convert("RGBA")
    data = np.array(img, dtype=np.float32)

    r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]
    
    # Calculate brightness and color saturation
    brightness = (r + g + b) / 3.0
    max_c = np.maximum(np.maximum(r, g), b)
    min_c = np.minimum(np.minimum(r, g), b)
    saturation = max_c - min_c

    # Mask for background: high brightness and low saturation (white / light grey)
    # Background threshold
    is_white_bg = (brightness >= bg_threshold) & (saturation < 18)
    
    # Soft transition for edges & shadows
    # For pixels between (bg_threshold - feather) and bg_threshold
    alpha = np.ones_like(brightness) * 255.0

    # Near white region
    fade_zone = (brightness >= (bg_threshold - feather)) & (brightness <= 255) & (saturation < 25)
    t = (brightness[fade_zone] - (bg_threshold - feather)) / feather
    t = np.clip(t, 0.0, 1.0)
    alpha[fade_zone] = 255.0 * (1.0 - t)

    # Pure white region
    alpha[is_white_bg] = 0.0

    # Ensure dark parts of the spice are 100% opaque
    spice_core = (brightness < (bg_threshold - feather)) | (saturation >= 20)
    alpha[spice_core] = 255.0

    data[:,:,3] = alpha
    result = Image.fromarray(np.uint8(data))
    result.save(output_path, "PNG")
    print(f"Processed: {input_path} -> {output_path}")

if __name__ == "__main__":
    brain_dir = r"C:\Users\LENOVO\.gemini\antigravity\brain\9d47f92a-3e9a-41c5-ab8d-f0e9f5984102"
    out_dir = r"c:\Users\LENOVO\Developer\avoraSpices\public\images\spices"
    os.makedirs(out_dir, exist_ok=True)

    mappings = [
        ("cardamom_hero*", "cardamom-hero.png"),
        ("cardamom_single*", "cardamom-single.png"),
        ("pepper_hero_v2*", "pepper-hero.png"),
        ("pepper_single*", "pepper-single.png"),
        ("clove_hero*", "clove-hero.png"),
        ("clove_single*", "clove-single.png"),
    ]

    for pattern, out_name in mappings:
        matches = glob.glob(os.path.join(brain_dir, pattern))
        if matches:
            latest = sorted(matches, key=os.path.getmtime)[-1]
            out_path = os.path.join(out_dir, out_name)
            make_transparent(latest, out_path)
        else:
            print(f"Waiting for pattern: {pattern}")
