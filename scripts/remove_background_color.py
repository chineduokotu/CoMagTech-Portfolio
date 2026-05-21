from pathlib import Path
import cv2
import numpy as np
import sys

# Color-threshold background removal based on border average color.
# Usage: python remove_background_color.py in.jpg out.png [threshold]


def remove_by_color(in_path, out_path, threshold=30):
    img = cv2.imread(str(in_path), cv2.IMREAD_COLOR)
    if img is None:
        raise SystemExit(f"Failed to read image: {in_path}")
    h, w = img.shape[:2]

    # sample border pixels (10px wide)
    pad = max(10, int(min(h,w)*0.03))
    top = img[0:pad, :]
    bottom = img[h-pad:h, :]
    left = img[:, 0:pad]
    right = img[:, w-pad:w]
    samples = np.concatenate([top.reshape(-1,3), bottom.reshape(-1,3), left.reshape(-1,3), right.reshape(-1,3)], axis=0)

    # compute median color to be robust
    bg_color = np.median(samples, axis=0).astype(np.uint8)

    # convert to Lab for perceptual distance
    img_lab = cv2.cvtColor(img, cv2.COLOR_BGR2LAB).astype(np.int16)
    bg_lab = cv2.cvtColor(np.uint8([[bg_color]]), cv2.COLOR_BGR2LAB).astype(np.int16)[0,0]

    dist = np.sqrt(((img_lab - bg_lab)**2).sum(axis=2))

    # create alpha mask: pixels far from bg color kept
    mask = (dist > threshold).astype(np.uint8)*255

    # optional: refine mask with morphological ops
    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5,5))
    mask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, kernel, iterations=1)
    mask = cv2.GaussianBlur(mask, (5,5), 0)

    rgba = cv2.cvtColor(img, cv2.COLOR_BGR2BGRA)
    rgba[:, :, 3] = mask

    cv2.imwrite(str(out_path), rgba)
    print(f"Saved: {out_path} (bg_color={bg_color.tolist()}, threshold={threshold})")

if __name__ == '__main__':
    if len(sys.argv) < 3:
        print("Usage: python remove_background_color.py <in.jpg> <out.png> [threshold]")
        raise SystemExit(1)
    in_path = Path(sys.argv[1])
    out_path = Path(sys.argv[2])
    thr = int(sys.argv[3]) if len(sys.argv) > 3 else 30
    remove_by_color(in_path, out_path, thr)
