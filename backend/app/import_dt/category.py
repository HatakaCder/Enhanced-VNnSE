# app/import_data.py
import json
import asyncio
from tortoise import Tortoise
from app.models import Category
from app.config import settings
from pathlib import Path

async def import_json_to_db(json_file_path):
    script_path = Path(__file__).parent
    json_path = script_path / json_file_path
    print("JSON path:", json_path)
    print("Dir listing:", list(script_path.iterdir()))
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    await Tortoise.init(db_url=settings.DB_URL, modules={'models': ['app.models']})
    await Tortoise.generate_schemas()
    for item in data:
        await Category.get_or_create(name=item['name'], defaults={'slug': item['slug']})
        print(f"Imported category: {item['name']} ({item['slug']})")
    await Tortoise.close_connections()

if __name__ == "__main__":
    asyncio.run(import_json_to_db('categories.json'))