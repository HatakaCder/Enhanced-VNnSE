from tortoise.exceptions import DoesNotExist
from app.models import *

# ----- USER -----
async def create_user(data):
    return await User.create(**data)

async def get_user(user_id: int):
    try:
        return await User.get(id=user_id)
    except DoesNotExist:
        return None

async def get_all_users():
    return User.all()

async def update_user_obj(user, data: dict):
    for field, val in data.items():
        setattr(user, field, val)
    await user.save()
    return user

async def delete_user(user_id: int):
    return await User.filter(id=user_id).delete()

# ----- CATEGORY -----
async def create_category(data):
    return await Category.create(**data)

async def get_all_categories():
    return Category.all()

async def get_category(category_id: int):
    try:
        return await Category.get(id=category_id)
    except DoesNotExist:
        return None

async def update_category_obj(category, data: dict):
    for field, val in data.items():
        setattr(category, field, val)
    await category.save()
    return category

async def delete_category(category_id: int):
    return await Category.filter(id=category_id).delete()

# ----- PUBLISHER -----
async def create_publisher(data):
    return await Publisher.create(**data)

async def get_publisher(publisher_id: int):
    try:
        return await Publisher.get(id=publisher_id)
    except DoesNotExist:
        return None
    
async def get_all_publishers():
    return Publisher.all()

async def update_publisher_obj(publisher, data: dict):
    for field, val in data.items():
        setattr(publisher, field, val)
    await publisher.save()
    return publisher

async def delete_publisher(publisher_id: int):
    return await Publisher.filter(id=publisher_id).delete()

# ----- ARTICLE -----
async def create_article(category, publisher, data):
    return await Article.create(**data, category=category, publisher=publisher)

async def get_all_articles():
    return Article.all()

async def get_article(article_id: int):
    try:
        return await Article.get(id=article_id)
    except DoesNotExist:
        return None
    
async def update_article_obj(article, data: dict):
    for field, val in data.items():
        setattr(article, field, val)
    await article.save()
    return article

async def delete_article(article_id: int):
    return await Article.filter(id=article_id).delete()

# ----- ARTICLE EMBEDDING -----
async def get_all_article_embedding():
    return await ArticleEmbedding.all().values(
        "article_id",
        "vbert_vector",
        "vde_vector"
    )

async def get_article_embedding(article_id: int):
    obj = await ArticleEmbedding.get_or_none(article_id=article_id)
    if not obj: return None
    return {
        "article_id": obj.article_id,
        "vbert_vector": obj.vbert_vector,
        "vde_vector": obj.vde_vector
    }

# ----- BOOKMARK -----
async def create_bookmark(user, article, data):
    return await Bookmark.create(**data, user=user, article=article)

async def get_all_bookmarks():
    return Bookmark.all()

async def get_bookmark(bookmark_id: int):
    try:
        return await Bookmark.get(id=bookmark_id)
    except DoesNotExist:
        return None
    
async def update_bookmark_obj(bookmark, data: dict):
    for field, val in data.items():
        setattr(bookmark, field, val)
    await bookmark.save()
    return bookmark

async def delete_bookmark(bookmark_id: int):
    return await Bookmark.filter(id=bookmark_id).delete()

# ----- READING HISTORY -----
async def create_reading_history(user, article, data):
    return await ReadingHistory.create(**data, user=user, article=article)

async def get_all_reading_history():
    return await ReadingHistory.all()

async def get_reading_history(rdhistory_id: int):
    try:
        return await ReadingHistory.get(id=rdhistory_id)
    except DoesNotExist:
        return None
    
async def update_reading_history_obj(rdhistory, info: dict):
    for field, val in info.items():
        setattr(rdhistory, field, val)
    await rdhistory.save()
    return rdhistory

async def delete_reading_history(rdhistory_id: int):
    return await ReadingHistory.filter(id=rdhistory_id).delete()