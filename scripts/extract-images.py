#!/usr/bin/env python3
"""Extract the 3 most recent pasted images from the Claude session transcript
into public/projects/ as properly named portfolio screenshots."""
import json, base64, os

PATH = "/Users/mahee/.claude/projects/-Users-mahee-myportfolio/3a2d3278-a4dd-4f32-bebc-72c835538d67.jsonl"
OUT = "/Users/mahee/myportfolio/public/projects"
NAMES = ["smartcart-live.png", "mes-spc.png", "mes-efficiency.png"]

os.makedirs(OUT, exist_ok=True)
images = []
with open(PATH) as f:
    for line in f:
        try:
            rec = json.loads(line)
        except Exception:
            continue
        msg = rec.get("message") or {}
        content = msg.get("content")
        if not isinstance(content, list):
            continue
        for item in content:
            if isinstance(item, dict) and item.get("type") == "image":
                src = item.get("source", {})
                if src.get("type") == "base64" and src.get("data"):
                    images.append(src["data"])

print("total images in transcript:", len(images))
# The app screenshots are the 3 images BEFORE the 3 most recent
# (the most recent 3 are bug-report screenshots of the broken UI).
last3 = images[-6:-3]
for name, data in zip(NAMES, last3):
    p = os.path.join(OUT, name)
    with open(p, "wb") as fh:
        fh.write(base64.b64decode(data))
    print("wrote", p, os.path.getsize(p) // 1024, "KB")
