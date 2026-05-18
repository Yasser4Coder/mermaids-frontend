import cv2
import os

vid = r"c:\Users\ARES\Downloads\original-b318d1739bb54a75ff286720dcaf087c.mp4"
out = r"c:\Users\ARES\Desktop\b\mermaids-web\.tmp-frames"
os.makedirs(out, exist_ok=True)

cap = cv2.VideoCapture(vid)
fps = cap.get(cv2.CAP_PROP_FPS) or 30
frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
print(f"fps={fps} frames={frames} dur={frames/fps:.2f}s")

for pct in range(0, 101, 5):
    cap.set(cv2.CAP_PROP_POS_FRAMES, int(frames * pct / 100))
    ok, img = cap.read()
    if ok:
        path = os.path.join(out, f"frame_{pct:03d}.jpg")
        cv2.imwrite(path, img, [int(cv2.IMWRITE_JPEG_QUALITY), 88])
        print("wrote", path)

cap.release()
