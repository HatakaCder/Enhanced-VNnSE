import { useState, useEffect, useRef } from "react"

export default function Search() {
    const [isOpen, setIsOpen] = useState(false)
    const [q, setQ] = useState("")
    const [results, setResults] = useState([])
    const debounceRef = useRef(null)

    useEffect(() => {
        if (!isOpen || q.trim() === "") {
            setResults([])
            return
        }

        clearTimeout(debounceRef.current)

        debounceRef.current = setTimeout(async() => {
                const res = await fetch(`http://127.0.0.1:8000/search/?q=${encodeURIComponent(q)}&top_k=5`)
                const data = await res.json()
                setResults(data)
            }, 300
        )

        return () => clearTimeout(debounceRef.current)
    }, [q, isOpen])

    console.log()

    return (
        <div>
        <div className="max-w-md mx-6">
            <div
            className="relative text-gray-600 cursor-pointer"
            onClick={() => setIsOpen(true)}
            >
            <div
                className="
                w-full h-10 pl-4 pr-10 rounded-lg
                border border-gray-300 bg-white text-sm
                flex items-center
                "
            >
                <span className="text-gray-400 select-none">
                Tìm kiếm bài viết…
                </span>
            </div>
            <span className="absolute right-0 top-0 mt-3 mr-4 pointer-events-none">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-500 transition"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                />
                </svg>
            </span>
            </div>
        </div>

        {isOpen && (
            <div className="fixed inset-0 z-50 flex items-start justify-center">
                <div
                    className="absolute inset-0 backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                />

                    <div className="
                            relative mt-[5%] w-1/2 max-w-lg
                    
                    ">
                        <div
                            className="flex mb-2"
                        >
                            <input
                                type="text"
                                value={q}
                                onChange={(e) => {
                                    setQ(e.target.value)
                                    console.log(results)    
                                }}
                                placeholder="Tìm kiếm bài viết…"
                                autoFocus
                                className="
                                    flex-1 h-12 pl-4 rounded-l-lg border border-gray-300
                                    bg-white text-sm focus:outline-none focus:ring-2
                                    focus:ring-black transition
                                "
                            />
                            <button
                                type="submit"
                                className="h-12 px-4 bg-gray-800 text-white rounded-r-lg hover:bg-black transition"
                            >
                                Tìm
                            </button>
                        </div>

                        {q.trim() !== "" && (
                        <ul className="border border-gray-200 bg-white rounded-md max-h-64 overflow-auto">
                            {results.length > 0 ? (
                            results.map(({ article }) => (
                                <li
                                key={article.id}
                                className="p-2 hover:bg-gray-100 cursor-pointer flex justify-between"
                                onClick={() => {
                                    window.location.href = `${article.link}`;
                                    setIsOpen(false);
                                }}
                                >
                                <div>
                                    <p className="font-small">{article.category.name} | {article.source.name}</p>
                                    <h4 className="font-medium">{article.title}</h4>
                                </div>
                                </li>
                            ))
                            ) : (
                            <li className="p-2 text-gray-500">
                                Không tìm thấy kết quả.
                            </li>
                            )}
                        </ul>
                        )}

                    </div>
                </div>
            )}
        </div>
    );
}
