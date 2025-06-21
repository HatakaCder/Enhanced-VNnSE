from tortoise.signals import post_save
from app.models import Article, ArticleEmbedding

@post_save(Article)
async def create_embedding_after_article(
    sender,
    instance: Article,
    created: bool,
    using_db,
    update_fields,
):
    if created:
        await ArticleEmbedding.create(
            article=instance,
            vbert_vector={},
            vde_vector={},
        )