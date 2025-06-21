from tortoise.contrib.pydantic import pydantic_model_creator
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
ArticleEmbedding_Pydantic = pydantic_model_creator(
    ArticleEmbedding, name="ArticleEmbedding"
)

ArticleEmbeddingIn_Pydantic = pydantic_model_creator(
    ArticleEmbedding,
    name="ArticleEmbeddingIn",
    exclude_readonly=True
)