import asyncio
import json
import os
from datetime import datetime
from tortoise import Tortoise, run_async
from tortoise.exceptions import IntegrityError
from slugify import slugify
from app.models import Category, Source, Article
from app.config import settings
from pathlib import Path

DATA_FILE = "articles.json"  # file JSON chứa mảng các object

async def init_db():
    await Tortoise.init(
        db_url=settings.DB_URL,
        modules={"models": ["app.models"]},
    )
    # await Tortoise.generate_schemas()  # nếu dev cần auto tạo table

def parse_created_at(text: str) -> datetime:
    core = text.split(",")[1].split("(")[0].strip()
    return datetime.strptime(core, "%d/%m/%Y %H:%M")

async def import_all():
    script_path = Path(__file__).parent
    json_path = script_path / DATA_FILE
    with open(json_path, encoding="utf-8") as f:
        raw = json.load(f)
    entries = raw if isinstance(raw, list) else [raw]

    for idx, data in enumerate(entries, start=1):
        cat_name = data.get("category", "").strip()
        cat_slug = slugify(cat_name)
        category, _ = await Category.get_or_create(
            name=cat_name,
            defaults={"slug": cat_slug}
        )

        src_name = data.get("source", "").strip()
        src_slug = slugify(src_name)
        source, _ = await Source.get_or_create(
            name=src_name,
            defaults={"slug": src_slug}
        )

        title     = data["title"]
        slug      = data.get("slug") or slugify(title)
        link      = data["article_url"]
        summary   = data.get("summary")
        created_at = parse_created_at(data["created_at"])
        content   = data["contents"]
        img_field = [
            {"url": img["image_url"],
             "caption": img["image_caption"],
             "position": img["position"]}
            for img in data.get("image_objs", [])
        ]

        try:
            art = await Article.create(
                title=title,
                slug=slug,
                link=link,
                summary=summary,
                created_at=created_at,
                content=content,
                img=img_field,
                category=category,
                source=source,
            )
            print(f"[{idx}/{len(entries)}] ✅ Imported Article id={art.id}")
        except IntegrityError as e:
            print(f"[{idx}/{len(entries)}] ❌ Failed: {e}")

async def main():
    await init_db()
    await import_all()
    await Tortoise.close_connections()

if __name__ == "__main__":
    run_async(main())
