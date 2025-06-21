from fastapi import FastAPI
from fastapi.middleware.cors  import CORSMiddleware
from tortoise.contrib.fastapi import register_tortoise

from app.config import settings
from app.routers import user, category, publisher

app = FastAPI(title="News API")


app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.BACKEND_CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(user.router, prefix="/user", tags=["user"])
app.include_router(category.router, prefix="/category", tags=["category"])
app.include_router(publisher.router, prefix="/publisher", tags=["publisher"])

register_tortoise(
    app,
    db_url=settings.DB_URL,
    modules={"models": ["app.models"]},
    generate_schemas=True,
    add_exception_handlers=True
)