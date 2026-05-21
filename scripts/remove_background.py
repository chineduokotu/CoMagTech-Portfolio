from pathlib import Path
import cv2
import numpy as np

# Simple GrabCut-based background removal.
# Usage: python remove_background.py public/pro.jpg public/pro_nobg.png

import sys

def remove_bg(input_path, output_path, iter_count=5, rect_margin=0.05):
    img = cv2.imread(str(input_path), cv2.IMREAD_COLOR)
    if img is None:
        raise SystemExit(f"Failed to read image: {input_path}")
    h, w = img.shape[:2]

    # Initialize mask
    mask = np.zeros((h, w), np.uint8)

    # Rectangle inset from edges (avoid including borders)
    x = int(w * rect_margin)
    y = int(h * rect_margin)
    rw = max(2, w - 2 * x)
    rh = max(2, h - 2 * y)
    rect = (x, y, rw, rh)

    bgdModel = np.zeros((1, 65), np.float64)
    fgdModel = np.zeros((1, 65), np.float64)

    cv2.grabCut(img, mask, rect, bgdModel, fgdModel, iter_count, cv2.GC_INIT_WITH_RECT)

    # mask where sure or likely foreground set to 1, others 0
    mask2 = np.where((mask == 2) | (mask == 0), 0, 1).astype('uint8')

    # Create output with alpha
    output = cv2.cvtColor(img, cv2.COLOR_BGR2BGRA)
    output[:, :, 3] = mask2 * 255

    # Optional: smooth alpha edges
    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (3,3))
    alpha = output[:, :, 3]
    alpha = cv2.GaussianBlur(alpha, (7,7), 0)
    output[:, :, 3] = alpha

    # Write PNG
    cv2.imwrite(str(output_path), output)
    print(f"Saved: {output_path}")

if __name__ == '__main__':
    if len(sys.argv) < 3:
        print("Usage: python remove_background.py <in.jpg> <out.png>")
        raise SystemExit(1)
    in_path = Path(sys.argv[1])
    out_path = Path(sys.argv[2])
    remove_bg(in_path, out_path)
