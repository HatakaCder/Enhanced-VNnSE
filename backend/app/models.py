from tortoise.models import Model
from tortoise import fields


class User(Model):
    id = fields.IntField(pk=True)
    name = fields.CharField(max_length=100, nullable=False)
    username= fields.CharField(max_length=30, nullable=False)
    email = fields.CharField(max_length=100)
    hashed_pwd = fields.CharField(max_length=128)
    created_at = fields.DatetimeField(auto_now_add=True)
    is_deleted = fields.BooleanField(default=False)

    bookmarks: fields.ReverseRelation["Bookmark"]
    reading_histories: fields.ReverseRelation["ReadingHistory"]

    class Meta:
        indexes = [("username",), ("email",)]

class Category(Model):
    id = fields.IntField(pk=True)
    name = fields.CharField(max_length=30, unique=True)
    slug = fields.CharField(max_length=30, unique=True)

    articles: fields.ReverseRelation["Article"]

class Source(Model):
    id = fields.IntField(pk=True)
    name = fields.CharField(max_length=50, unique=True)
    slug = fields.CharField(max_length=100, unique=True)
    img = fields.CharField(max_length=200, null=True)

    articles: fields.ReverseRelation["Article"]

class Article(Model):
    id = fields.IntField(pk=True)
    title = fields.CharField(max_length=500)
    slug = fields.CharField(max_length=200, unique=True)
    content = fields.JSONField()
    summary = fields.CharField(max_length=1000, null=True)
    link = fields.CharField(max_length=300)
    img = fields.JSONField()
    created_at = fields.DatetimeField()

    category: fields.ForeignKeyRelation["Category"] = fields.ForeignKeyField(
        "models.Category",
        related_name="articles"
    )

    source: fields.ForeignKeyRelation["Source"] = fields.ForeignKeyField(
        "models.Source",
        related_name="articles"
    )

    embeddings: fields.ReverseRelation["ArticleEmbedding"]
    bookmarks: fields.ReverseRelation["Bookmark"]
    reading_histories: fields.ReverseRelation["ReadingHistory"]

class Bookmark(Model):
    id = fields.IntField(pk=True)
    user = fields.ForeignKeyField(
        "models.User",
        related_name="bookmarks"
    )
    article = fields.ForeignKeyField(
        "models.Article",
        related_name="bookmarks"
    )
    save_at = fields.DatetimeField(auto_now_add=True)

    class Meta:
        unique_together = ("user_id", "article_id")

class ReadingHistory(Model):
    id = fields.IntField(pk=True)
    user: fields.ForeignKeyRelation["User"] = fields.ForeignKeyField(
        "models.User",
        related_name="reading_histories"
    )
    article: fields.ForeignKeyRelation["Article"] = fields.ForeignKeyField(
        "models.Article",
        related_name="reading_histories"
    )
    read_at = fields.DatetimeField(auto_now_add=True)
    percent_reading = fields.IntField()

    class Meta:
        unique_together = ("user_id", "article_id")

class ArticleEmbedding(Model):
    article = fields.OneToOneField(
        "models.Article",
        related_name="embeddings",
        pk=True
    )
    vbert_vector = fields.JSONField()
    vde_vector = fields.JSONField()

