from tortoise.contrib.pydantic import pydantic_model_creator
from pydantic import BaseModel, ConfigDict
from app.models import User, Category, Publisher, Article, Bookmark, ReadingHistory, ArticleEmbedding

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

# Publisher
Publisher_Pydantic = pydantic_model_creator(Publisher, name="Publisher")
PublisherIn_Pydantic = pydantic_model_creator(
    Publisher, name="PublisherIn", exclude_readonly=True
)

# Article
Article_Pydantic = pydantic_model_creator(
    Article, name="Article"
)

ArticleIn_Pydantic = pydantic_model_creator(
    Article,
    name="ArticleIn",
    exclude_readonly=True,
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