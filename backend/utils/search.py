from sklearn.feature_extraction.text import TfidfVectorizer
from underthesea import word_tokenize
from app.models import Article
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
import os, sys

sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))
BASE_DIR = os.path.dirname(__file__)
STOPWORDS_PATH = os.path.join(BASE_DIR, "vietnamese-stopwords-dash.txt")

async def TfIdf(query: str, top_k=5):
    """
        Input: 
            + query: Input query in the search bar by the user
            + top_k: Top k articles that the user wants to retrieve (default = 5)

        Output: top_k_articles: Top k articles that have the title and the content likely match the query
    """
    
    qs = Article.all().prefetch_related("category", "source")
    articles = await qs
    docs = await qs.values("title_tokenized", "summary_tokenized")
    docs = [f"{doc['title_tokenized']} {doc['summary_tokenized']}" for doc in docs]

    stopwords = open(STOPWORDS_PATH, 'r', encoding='utf-8').read().split("\n")

    vectorizer = TfidfVectorizer(stop_words=stopwords)
    X = vectorizer.fit_transform(docs)

    query_dash = word_tokenize(query.lower(), format="text")
    query_vec = vectorizer.transform([query_dash])

    sims = cosine_similarity(query_vec, X).flatten()
    idxs = np.argsort(sims)[::-1][:top_k]

    results = []
    
    for idx in idxs:
        score = sims[idx]
        if score > 0:
            art = articles[idx]

            results.append({
                "article": art,
                "score": round(score, 4)
            })

    return results



