from tortoise.exceptions import DoesNotExist
from app.models import User, Category, Publisher

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
        return await Publisher.get(publisher_id)
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