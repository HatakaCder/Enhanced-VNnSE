from fastapi import APIRouter, HTTPException, status
from app import crud
from app.schemas import Category_Pydantic, CategoryIn_Pydantic

router = APIRouter()

@router.post("", response_model=Category_Pydantic, status_code=status.HTTP_201_CREATED)
async def add_category(category_info: CategoryIn_Pydantic):
    category_obj = await crud.create_category(category_info.dict(exclude_unset=True))
    return await Category_Pydantic.from_tortoise_orm(category_obj)

@router.get("", response_model=list[Category_Pydantic])
async def get_all_categories():
    qs = await crud.get_all_categories()
    return await Category_Pydantic.from_queryset(qs)

@router.get("/id/{category_id}", response_model=Category_Pydantic)
async def get_category(category_id: int):
    category = await crud.get_category(category_id)
    if not category:
        raise HTTPException(status_code=404, detail="Category not found")
    return await Category_Pydantic.from_tortoise_orm(category)

@router.get("/{category_slug}", response_model=Category_Pydantic)
async def get_category_by_slug(category_slug: str):
    category = await crud.get_category_by_slug(category_slug)
    if not category:
        raise HTTPException(status_code=404, detail="Category not found")
    return await Category_Pydantic.from_tortoise_orm(category)


@router.put("/{category_id}", response_model=Category_Pydantic)
async def update_category(category_id: int, info: CategoryIn_Pydantic):
    category = await crud.get_category(category_id)
    if not category:
        raise HTTPException(status_code=404, detail="Category not found")
    updated = await crud.update_category_obj(category, info.dict(exclude_unset=True))
    return await Category_Pydantic.from_tortoise_orm(updated)

@router.delete("/{category_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_category(category_id: int):
    deleted = await crud.delete_category(category_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="Category not found")