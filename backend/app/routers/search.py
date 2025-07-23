from fastapi import APIRouter, Query
from pydantic import BaseModel

from app.schemas import Article_Pydantic
from utils.search import TfIdf

router = APIRouter()

class SearchResult(BaseModel):
    article: Article_Pydantic
    score: float

    class Config:
        orm_mode = True
    


@router.get("/", response_model=list[SearchResult])
async def search(q: str = Query(..., min_length=1), top_k: int = 5):
    results = await TfIdf(q)
    return results