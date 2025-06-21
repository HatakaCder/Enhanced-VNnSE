import os
from pydantic import AnyHttpUrl
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    DB_URL: str = os.getenv("DATABASE_URL", "sqlite://database.sqlite3")
    BACKEND_CORS_ORIGINS: list[AnyHttpUrl] = ["https://localhost:5173"]

    class Config:
        env_file = ".env"

settings = Settings()