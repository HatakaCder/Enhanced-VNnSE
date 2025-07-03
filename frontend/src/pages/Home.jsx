import ArticleCard_Large from "../components/ArticleCard_Large"
import ArticlesColumn from "../components/ArticlesColumn"
import { useEffect, useMemo, useState } from "react"

import { formatVietnameseDate } from "../utils/formatVietnameseDate"

export default function Home(props){
    const [articles, setArticles] = useState([])
    
    useEffect(() => {
        fetch("http://127.0.0.1:8000/article")
        .then((resp) => {
            if (!resp.ok) throw new Error(`HTTP error ${resp.status}`);
            return resp.json();
        })
        .then((results) => {
            const arr = Array.isArray(results)
            ? results
            : Array.isArray(results.data)
            ? results.data
            : [];
            setArticles(arr);
        })
        .catch((err) => {
            console.error("Fetch error:", err);
            setArticles([]);
        });
    }, []);

    const latestArticles = useMemo(() => {
        return (
            [...articles]
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            .slice(0, 10)
        )
    }, [articles])

    return(
        <div className="max-w-[70%] mx-auto">
            { /* Latest articles */ }
            <div>
                <p className="text-2xl font-semibold my-6">Latest articles:</p>
                
                <div className="grid grid-cols-5 grid-rows-2 gap-4">
                    {latestArticles.map((art)=>(
                        <ArticleCard_Large key={art.id} {...art} created_at={formatVietnameseDate(art.created_at)}></ArticleCard_Large>
                    ))}
                </div>


            </div>

            <div>
                <p className="text-2xl font-semibold mt-6">Thể loại</p>

                <div className="grid grid-cols-3 gap-x-2">
                    {
                        props.categories.map((cat) =>{
                            const fiveLatestArticles = cat.articles.slice(0, 5)

                            return <ArticlesColumn key={cat.id} name={cat.name} articles={fiveLatestArticles}></ArticlesColumn>
                        })
                    }

                </div>
            </div>
        </div>
    )
}