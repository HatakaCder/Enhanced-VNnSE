from fastapi import APIRouter, status, HTTPException
from app import crud
from app.schemas import *

router = APIRouter()

@router.post("", response_model=User_Pydantic, status_code=status.HTTP_201_CREATED)
async def create_user(user_info: UserIn_Pydantic):
    user_obj = await crud.create_user(user_info.dict(exclude_unset=True))
    return await User_Pydantic.from_tortoise_orm(user_obj)

@router.get("", response_model=list[User_Pydantic])
async def get_all_users():
    qs = await crud.get_all_users()
    return await User_Pydantic.from_queryset(qs)

@router.get("/{user_id}", response_model=User_Pydantic)
async def get_user(user_id: int):
    user = await crud.get_user(user_id)
    
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return await User_Pydantic.from_tortoise_orm(user)


@router.put("/{user_id}", response_model=User_Pydantic)
async def update_user(user_id: int, info: UserIn_Pydantic):
    user = await crud.get_user(user_id)
    
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    updated = await crud.update_user_obj(user, info.dict(exclude_unset=True))
    return await User_Pydantic.from_tortoise_orm(updated)

@router.delete("/{user_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_user(user_id: int):
    deleted = await crud.delete_user(user_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="User not found")