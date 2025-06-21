from fastapi import APIRouter, HTTPException, status
from app import crud
from app.schemas import Publisher_Pydantic, PublisherIn_Pydantic

router = APIRouter()

@router.post("", response_model=Publisher_Pydantic, status_code=status.HTTP_201_CREATED)
async def create_publisher(publisher_info: PublisherIn_Pydantic):
    publisher_obj = await crud.create_publisher(publisher_info.dict(exclue_unset=True))
    return await Publisher_Pydantic.from_tortoise_orm(publisher_obj)

@router.get("", response_model=list[Publisher_Pydantic])
async def get_all_publishers():
    qs = await crud.get_all_categories()
    return await Publisher_Pydantic.from_queryset(qs)

@router.get("/{publisher_id}", response_model=Publisher_Pydantic)
async def get_publisher(publisher_id: int):
    publisher = await crud.get_publisher(publisher_id)
    if not publisher:
        raise HTTPException(satus_code=404, detail="Publisher not found")
    return await Publisher_Pydantic.from_tortoise_orm(publisher)

@router.put("/{publisher_id}", response_model=Publisher_Pydantic)
async def update_publisher(publisher_id: int, info: PublisherIn_Pydantic):
    publisher = await crud.get_publisher(publisher_id)
    if not publisher:
        raise HTTPException(satus_code=404, detail="Publisher not found")
    updated = await crud.update_publisher_obj(publisher, info.dict(exclude_unset=True))
    return await Publisher_Pydantic.from_tortoise_orm(updated)

@router.delete("/{publisher_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_publisher(publisher_id: int):
    deleted = await crud.delete_publisher(publisher_id)
    if not deleted:
        raise HTTPException(satus_code=404, detail="Publisher not found")
