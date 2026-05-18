import cv2
import os

vid = r"c:\Users\ARES\Downloads\original-b318d1739bb54a75ff286720dcaf087c.mp4"
out = r"c:\Users\ARES\Desktop\b\mermaids-web\.tmp-frames\transition"
os.makedirs(out, exist_ok=True)

cap = cv2.VideoCapture(vid)
fps = cap.get(cv2.CAP_PROP_FPS) or 60
frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))

# First 8 seconds, every 0.25s
for t in [x * 0.25 for x in range(0, 33)]:
    idx = int(t * fps)
    cap.set(cv2.CAP_PROP_POS_FRAMES, idx)
    ok, img = cap.read()
    if ok:
        name = f"t_{int(t*1000):05d}ms.jpg"
        cv2.imwrite(os.path.join(out, name), img, [int(cv2.IMWRITE_JPEG_QUALITY), 90])

cap.release()
print("done", out, "fps", fps)
