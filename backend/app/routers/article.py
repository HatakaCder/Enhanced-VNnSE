from fastapi import APIRouter, status, HTTPException
from app import crud
from app.schemas import Article_Pydantic, ArticleIn_Pydantic

router = APIRouter()

@router.post("", response_model=Article_Pydantic, status_code=status.HTTP_201_CREATED)
async def create_article(category_id: int, publisher_id: int, article_info: ArticleIn_Pydantic):
    category = await crud.get_category(category_id)
    if not category:
        HTTPException(status_code=404, detail="Category not found")

    publisher = await crud.get_publisher(publisher_id)
    if not publisher:
        HTTPException(status_code=404, detail="Publisher not found")


    article_obj = await crud.create_article(category, publisher, article_info.dict(exclude_unset=True))
    return await Article_Pydantic.from_tortoise_orm(article_obj)

@router.get("", response_model=list[Article_Pydantic])
async def get_all_articles():
    qs = await crud.get_all_articles()
    return await Article_Pydantic.from_queryset(qs)

@router.get("/{article_id}", response_model=Article_Pydantic)
async def get_article(article_id: int):
    article = await crud.get_article(article_id)
    if not article:
        raise HTTPException(status_code=404, detail="Article not found")
    
    return await Article_Pydantic.from_tortoise_orm(article)

@router.put("/{article_id}", response_model=Article_Pydantic)
async def update_article(article_id: int, info: ArticleIn_Pydantic):
    article = await crud.get_article(article_id)
    if not article:
        raise HTTPException(status_code=404, detail="Article not found")
    
    updated = await crud.update_article_obj(article, info.dict(exclude_unset=True))
    return await Article_Pydantic.from_tortoise_orm(updated)

@router.delete("/{article_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_article(article_id: int):
    deleted = await crud.delete_article(article_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="Article not found")