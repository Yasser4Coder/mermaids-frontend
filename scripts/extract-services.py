import re
import json
from pathlib import Path

html = Path(__file__).resolve().parents[2].joinpath("services.html").read_text(encoding="utf-8")
cats = []
for m in re.finditer(
    r'<section class="service-category[^"]*" id="([^"]+)">.*?'
    r'<h2 class="service-category__title">([^<]+)</h2>.*?'
    r'<p class="service-category__desc">([^<]*)</p>(.*?)</section>',
    html,
    re.S,
):
    cid, title, desc, body = m.group(1), m.group(2), m.group(3), m.group(4)
    subs = []
    for sm in re.finditer(
        r'<h3 class="service-subsection__title">([^<]+)</h3>\s*<ul class="service-price-list">(.*?)</ul>',
        body,
        re.S,
    ):
        items = [
            {"name": li.group(1), "price": li.group(2)}
            for li in re.finditer(
                r'<span class="service-line__name">([^<]+)</span><span class="service-line__price">([^<]+)</span>',
                sm.group(2),
            )
        ]
        subs.append({"title": sm.group(1), "items": items})
    single = re.search(
        r'<ul class="service-price-list service-price-list--single">(.*?)</ul>', body, re.S
    )
    if single and not subs:
        items = [
            {"name": li.group(1), "price": li.group(2)}
            for li in re.finditer(
                r'<span class="service-line__name">([^<]+)</span><span class="service-line__price">([^<]+)</span>',
                single.group(1),
            )
        ]
        subs = [{"title": None, "items": items}]
    cats.append({"id": cid, "title": title, "description": desc, "subsections": subs})

out = Path(__file__).resolve().parents[1] / "src" / "data" / "servicesMenu.json"
out.parent.mkdir(parents=True, exist_ok=True)
out.write_text(json.dumps(cats, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"Wrote {len(cats)} categories to {out}")
