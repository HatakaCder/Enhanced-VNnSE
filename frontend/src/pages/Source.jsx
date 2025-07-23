import ArticleCard_XL from "../components/ArticleCard_XL"
import { useState, useEffect, useMemo } from "react"
import { useParams } from "react-router-dom"

import { formatVietnameseDate } from "../utils/formatVietnameseDate";

export function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) pages.push(i);

  return (
    <nav className="flex justify-center mt-12 space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 disabled:opacity-50"
        aria-label="Previous page"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {pages.map(p => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={`px-4 py-2 rounded-full focus:outline-none ${
            p === currentPage
              ? 'bg-gray-200 text-gray-700'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 disabled:opacity-50"
        aria-label="Next page"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </nav>
  );
}



export default function Source(){
    const { slug } = useParams()
    const [articles, setArticles] = useState([])
    const [source, setSource] = useState("aaaa")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://127.0.0.1:8000/source/${slug}`)
            const result = await response.json()
            await setArticles(result.articles.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)))
            await setSource(result.name)
            await setLoading(false)
        }
        fetchData()
    }, [])

    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'auto'})
    }, [currentPage])

    if (loading === true){
        return <div>Loading data...</div>;
    }
    
    const pageSize = 10;
    const totalPages = Math.ceil(articles.length / pageSize);
   

    const startIndex = (currentPage - 1) * pageSize;
    const currentArticles = articles.slice(startIndex, startIndex + pageSize)
    
    return (
        <div className="max-w-[70%] mx-auto my-6">
            <p className="text-3xl font-bold">{source}</p>
            <section className="py-6">
            <h3 className="text-2xl font-semibold text-gray-900">Latest Articles</h3>
            <div className="mt-6 space-y-12">
                {currentArticles.map((art, idx) => (
                <ArticleCard_XL key={idx} {...art} created_at={formatVietnameseDate(art.created_at, 3)} source={source}/>
                ))}
            </div>
            </section>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={page => setCurrentPage(Math.min(Math.max(page, 1), totalPages))}
            />
        </div>
    )
}