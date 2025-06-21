from fastapi import APIRouter, status, HTTPException
from app import crud
from app.schemas import Bookmark_Pydantic, BookmarkIn_Pydantic

router = APIRouter()

@router.post("", response_model=Bookmark_Pydantic, status_code=status.HTTP_201_CREATED)
async def create_bookmark(user_id: int, article_id: int ,bookmark_info: BookmarkIn_Pydantic):
    user = await crud.get_user(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    article = await crud.get_article(article_id)
    if not article:
        raise HTTPException(status_code=404, detail="Article not found")

    bookmark_obj = await crud.create_bookmark(user, article, bookmark_info.dict(exclude_unset=True))
    return await Bookmark_Pydantic.from_tortoise_orm(bookmark_obj)

@router.get("", response_model=list[Bookmark_Pydantic])
async def get_all_bookmarks():
    qs = await crud.get_all_bookmarks()
    return await Bookmark_Pydantic.from_queryset(qs)

@router.get("/{bookmark_id}", response_model=Bookmark_Pydantic)
async def get_bookmark(bookmark_id: int):
    bookmark = await crud.get_bookmark(bookmark_id)
    if not bookmark:
        raise HTTPException(status_code=404, detail="Bookmark not found")
    
    return await Bookmark_Pydantic.from_tortoise_orm(bookmark)

@router.put("/{bookmark_id}", response_model=Bookmark_Pydantic)
async def update_bookmark(bookmark_id: int, info: BookmarkIn_Pydantic):
    bookmark = await crud.get_bookmark(bookmark_id)
    if not bookmark:
        raise HTTPException(status_code=404, detail="Bookmark not found")
    
    updated = await crud.update_bookmark_obj(bookmark, info.dict(exclude_unset=True))
    return await Bookmark_Pydantic.from_tortoise_orm(updated)

@router.delete("/{bookmark_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_bookmark(bookmark_id: int):
    bookmark = await crud.delete_bookmark(bookmark_id)
    if not bookmark:
        raise HTTPException(status_code=404, detail="Bookmark not found")
    