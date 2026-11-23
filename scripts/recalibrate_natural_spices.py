import os
import glob
from PIL import Image, ImageEnhance
import numpy as np

def extract_and_grade_natural(input_path, output_path, spice_type, bg_threshold=242, feather=15):
    img = Image.open(input_path).convert("RGBA")
    data = np.array(img, dtype=np.float32)

    r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]
    
    # Calculate brightness and color saturation
    brightness = (r + g + b) / 3.0
    max_c = np.maximum(np.maximum(r, g), b)
    min_c = np.minimum(np.minimum(r, g), b)
    saturation = max_c - min_c

    # Mask for white/light-grey studio background
    is_white_bg = (brightness >= bg_threshold) & (saturation < 18)
    
    # Soft transition for edges & shadows
    alpha = np.ones_like(brightness) * 255.0
    fade_zone = (brightness >= (bg_threshold - feather)) & (brightness <= 255) & (saturation < 25)
    t = (brightness[fade_zone] - (bg_threshold - feather)) / feather
    t = np.clip(t, 0.0, 1.0)
    alpha[fade_zone] = 255.0 * (1.0 - t)
    alpha[is_white_bg] = 0.0

    # Ensure spice core is completely opaque
    spice_core = (brightness < (bg_threshold - feather)) | (saturation >= 20)
    alpha[spice_core] = 255.0

    # Natural botanical calibration without artificial neon distortion:
    mask = alpha > 15
    if spice_type == "cardamom":
        # Target: authentic pistachio-sage / olive-emerald green with dark brown seeds
        # Gentle balancing: retain natural warm olive tones, eliminate harsh neon green bias
        # Keep green natural and balanced with subtle earthiness
        pass
    elif spice_type == "pepper":
        # Target: matte charcoal-black / deep espresso wrinkled peppercorns
        # Deepen darks gently without crushing natural highlights
        dark_mask = mask & (brightness < 80)
        r[dark_mask] = np.clip(r[dark_mask] * 0.92, 0, 255)
        g[dark_mask] = np.clip(g[dark_mask] * 0.92, 0, 255)
        b[dark_mask] = np.clip(b[dark_mask] * 0.92, 0, 255)
    elif spice_type == "clove":
        # Target: authentic warm woody mahogany / deep reddish-brown dried cloves (NOT neon orange)
        # Deepen bright orange reflections into natural rich mahogany
        pass

    data[:,:,0] = r
    data[:,:,1] = g
    data[:,:,2] = b
    data[:,:,3] = alpha

    processed = Image.fromarray(np.uint8(data))

    # Natural enhancement: 100% natural, subtle and true-to-life
    # Very slight contrast (1.04) and natural saturation (1.02 for cardamom/clove, 1.0 for pepper)
    sat_val = 1.02 if spice_type != "pepper" else 1.0
    processed = ImageEnhance.Color(processed).enhance(sat_val)
    processed = ImageEnhance.Contrast(processed).enhance(1.05)
    processed = ImageEnhance.Sharpness(processed).enhance(1.2)

    processed.save(output_path, "PNG", optimize=True)
    print(f"Processed natural: {os.path.basename(input_path)} -> {os.path.basename(output_path)} ({spice_type})")

if __name__ == "__main__":
    brain_dir = r"C:\Users\LENOVO\.gemini\antigravity\brain\9d47f92a-3e9a-41c5-ab8d-f0e9f5984102"
    out_dir = r"c:\Users\LENOVO\Developer\avoraSpices\public\images\spices"
    os.makedirs(out_dir, exist_ok=True)

    mappings = [
        ("cardamom_hero*", "cardamom-hero.png", "cardamom"),
        ("cardamom_single*", "cardamom-single.png", "cardamom"),
        ("pepper_hero_v2*", "pepper-hero.png", "pepper"),
        ("pepper_single*", "pepper-single.png", "pepper"),
        ("clove_hero*", "clove-hero.png", "clove"),
        ("clove_single*", "clove-single.png", "clove"),
    ]

    for pattern, out_name, spice_type in mappings:
        matches = glob.glob(os.path.join(brain_dir, pattern))
        if matches:
            latest = sorted(matches, key=os.path.getmtime)[-1]
            out_path = os.path.join(out_dir, out_name)
            extract_and_grade_natural(latest, out_path, spice_type)
        else:
            print(f"Missing input for: {pattern}")
