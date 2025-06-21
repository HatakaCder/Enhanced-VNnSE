from fastapi import APIRouter, HTTPException
from app import crud
from app.schemas import ArticleEmbeddingOut

router = APIRouter()

@router.get("", response_model=list[ArticleEmbeddingOut])
async def get_all_article_embedding():
    return await crud.get_all_article_embedding()

@router.get("/{article_id}", response_model=ArticleEmbeddingOut)
async def get_article_embedding(article_id: int):
    article_embedding_obj = await crud.get_article_embedding(article_id)
    if not article_embedding_obj:
        raise HTTPException(status_code=404, detail="Article Embedding not found")
    return article_embedding_obj