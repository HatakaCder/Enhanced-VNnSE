import { useState } from "react";

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);

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
            <form
              action="/search"
              method="GET"
              className="flex"
              onSubmit={() => setIsOpen(false)}
            >
              <input
                type="search"
                name="q"
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
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
