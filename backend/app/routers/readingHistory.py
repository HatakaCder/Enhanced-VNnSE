from fastapi import APIRouter, status, HTTPException
from app import crud
from app.schemas import ReadingHistory_Pydantic, ReadingHistoryIn_Pydantic

router = APIRouter()

@router.post("", response_model=ReadingHistory_Pydantic, status_code=status.HTTP_201_CREATED)
async def create_reading_history(user_id: int, article_id: int, info: ReadingHistoryIn_Pydantic):
    user = await crud.get_user(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    article = await crud.get_article(article_id)
    if not article:
        raise HTTPException(status_code=404, detail="Article not found")

    obj = await crud.create_reading_history(user, article, info.dict(exclude_unset=True))
    return await ReadingHistory_Pydantic.from_tortoise_orm(obj)

@router.get("", response_model=list[ReadingHistory_Pydantic])
async def get_all_reading_history():
    qs = await crud.get_all_reading_history()
    return await ReadingHistory_Pydantic.from_queryset(qs)

@router.get("/{rdhistory_id}", response_model=ReadingHistory_Pydantic)
async def get_reading_history(rdhistory_id: int):
    obj = await crud.get_reading_history(rdhistory_id)
    if not obj:
        raise HTTPException(status_code=404, detail="Reading history not found")
    
    return await ReadingHistory_Pydantic.from_tortoise_orm(obj)

@router.put("/{rdhistory_id}", response_model=ReadingHistory_Pydantic)
async def update_reading_history(rdhistory_id: int, info: ReadingHistoryIn_Pydantic):
    obj = await crud.get_reading_history(rdhistory_id)
    if not obj:
        raise HTTPException(status_code=404, detail="Reading history not found")
    
    updated = await crud.update_reading_history_obj(obj, info.dict(exclude_unset=True))
    return await ReadingHistory_Pydantic.from_tortoise_orm(updated)

@router.delete("/{rdhistory_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_reading_history(rdhistory_id: int):
    deleted = await crud.delete_reading_history(rdhistory_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="Reading history not found")
