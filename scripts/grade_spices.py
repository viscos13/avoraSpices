import os
from PIL import Image, ImageEnhance
import numpy as np

def grade_and_vibrate_spice(image_path, spice_type):
    if not os.path.exists(image_path):
        print(f"File not found: {image_path}")
        return

    img = Image.open(image_path).convert("RGBA")
    data = np.array(img, dtype=np.float32)

    r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]
    mask = a > 10

    if spice_type == "cardamom":
        # Boost vibrant emerald greens and contrast, prevent washed-out pale sage
        # Increase green channel relative to red/blue in spice areas
        g[mask] = np.clip(g[mask] * 1.22 + 5, 0, 255)
        r[mask] = np.clip(r[mask] * 0.92, 0, 255)
        b[mask] = np.clip(b[mask] * 0.88, 0, 255)
    elif spice_type == "pepper":
        # Deep rich glossy black/charcoal with high contrast, remove milky grey wash
        # Push darks darker and specular highlights crisper
        brightness = (r[mask] + g[mask] + b[mask]) / 3.0
        contrast_boost = np.where(brightness > 110, 1.25, 0.72)
        r[mask] = np.clip(r[mask] * contrast_boost, 15, 230)
        g[mask] = np.clip(g[mask] * contrast_boost, 14, 225)
        b[mask] = np.clip(b[mask] * contrast_boost, 12, 220)
    elif spice_type == "clove":
        # Rich saturated reddish-mahogany with warm amber highlights
        r[mask] = np.clip(r[mask] * 1.26 + 12, 0, 255)
        g[mask] = np.clip(g[mask] * 0.94 + 2, 0, 255)
        b[mask] = np.clip(b[mask] * 0.82, 0, 255)

    data[:,:,0] = r
    data[:,:,1] = g
    data[:,:,2] = b
    data[:,:,3] = a

    processed_img = Image.fromarray(np.uint8(data))

    # Enhance color saturation and sharpness
    enhancer_color = ImageEnhance.Color(processed_img)
    processed_img = enhancer_color.enhance(1.35 if spice_type != "pepper" else 1.1)

    enhancer_contrast = ImageEnhance.Contrast(processed_img)
    processed_img = enhancer_contrast.enhance(1.22 if spice_type != "pepper" else 1.35)

    enhancer_sharpness = ImageEnhance.Sharpness(processed_img)
    processed_img = enhancer_sharpness.enhance(1.4)

    processed_img.save(image_path, "PNG", optimize=True)
    print(f"Enhanced & Color Graded: {image_path} ({spice_type})")

if __name__ == "__main__":
    base_dir = r"c:\Users\LENOVO\Developer\avoraSpices\public\images\spices"
    grade_and_vibrate_spice(os.path.join(base_dir, "cardamom-hero.png"), "cardamom")
    grade_and_vibrate_spice(os.path.join(base_dir, "cardamom-single.png"), "cardamom")
    grade_and_vibrate_spice(os.path.join(base_dir, "pepper-hero.png"), "pepper")
    grade_and_vibrate_spice(os.path.join(base_dir, "pepper-single.png"), "pepper")
    grade_and_vibrate_spice(os.path.join(base_dir, "clove-hero.png"), "clove")
    grade_and_vibrate_spice(os.path.join(base_dir, "clove-single.png"), "clove")
