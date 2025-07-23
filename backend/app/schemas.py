from tortoise.contrib.pydantic import pydantic_model_creator
from pydantic import BaseModel, ConfigDict
from app.models import User, Category, Source, Article, Bookmark, ReadingHistory, ArticleEmbedding
from tortoise import Tortoise
Tortoise.init_models(["app.models"], "models")
# User
User_Pydantic = pydantic_model_creator(User, name="User")
UserIn_Pydantic = pydantic_model_creator(
    User, name="UserIn", exclude_readonly=True
)

# Category
Category_Pydantic = pydantic_model_creator(Category, name="Category")
CategoryIn_Pydantic = pydantic_model_creator(
    Category, name="CategoryIn", exclude_readonly=True
)

# Source
Source_Pydantic = pydantic_model_creator(
    Source, 
    name="Source"
)
SourceIn_Pydantic = pydantic_model_creator(
    Source, name="SourceIn", exclude_readonly=True
)

# Article
Article_Pydantic = pydantic_model_creator(
    Article, name="Article",
    include=(
        "id",
        "title",
        "title_tokenized",
        "slug",
        "content",
        "summary",
        "summary_tokenized",
        "link",
        "img",
        "created_at",
        "category", 
        "source",   
    )
)

ArticleIn_Pydantic = pydantic_model_creator(
    Article,
    name="ArticleIn",
    exclude_readonly=True,
    include=(
        "title",
        "title_tokenized",
        "slug",
        "content",
        "summary",
        "summary_tokenized",
        "link",
        "img",
        "created_at",
        "category_id",
        "source_id",
    ),
)

# Bookmark
Bookmark_Pydantic = pydantic_model_creator(
    Bookmark, name="Bookmark"
)

BookmarkIn_Pydantic = pydantic_model_creator(
    Bookmark,
    name="BookmarkIn",
    exclude_readonly=True
)

# Reading History
ReadingHistory_Pydantic = pydantic_model_creator(
    ReadingHistory, name="ReadingHistory"
)

ReadingHistoryIn_Pydantic = pydantic_model_creator(
    ReadingHistory,
    name="ReadingHistoryIn",
    exclude_readonly=True
)

# Article Embedding
class ArticleEmbeddingOut(BaseModel):
    article_id: int
    vbert_vector: dict
    vde_vector: dict

    model_config = ConfigDict(
        from_attributes=True
    )