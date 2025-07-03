from fastapi import APIRouter, HTTPException, status
from app import crud
from app.schemas import Source_Pydantic, SourceIn_Pydantic

router = APIRouter()

@router.post("", response_model=Source_Pydantic, status_code=status.HTTP_201_CREATED)
async def create_source(source_info: SourceIn_Pydantic):
    source_obj = await crud.create_source(source_info.dict(exclude_unset=True))
    return await Source_Pydantic.from_tortoise_orm(source_obj)

@router.get("", response_model=list[Source_Pydantic])
async def get_all_sources():
    qs = await crud.get_all_sources()
    return await Source_Pydantic.from_queryset(qs)

@router.get("/{source_id}", response_model=Source_Pydantic)
async def get_source(source_id: int):
    source = await crud.get_source(source_id)
    if not source:
        raise HTTPException(satus_code=404, detail="source not found")
    return await Source_Pydantic.from_tortoise_orm(source)

@router.put("/{source_id}", response_model=Source_Pydantic)
async def update_source(source_id: int, info: SourceIn_Pydantic):
    source = await crud.get_source(source_id)
    if not source:
        raise HTTPException(satus_code=404, detail="source not found")
    updated = await crud.update_source_obj(source, info.dict(exclude_unset=True))
    return await Source_Pydantic.from_tortoise_orm(updated)

@router.delete("/{source_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_source(source_id: int):
    deleted = await crud.delete_source(source_id)
    if not deleted:
        raise HTTPException(satus_code=404, detail="source not found")
