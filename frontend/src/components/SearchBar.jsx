// src/components/SearchBar.jsx
import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md flex shadow-md"
    >
      <input
        type="text"
        placeholder="Tìm kiếm..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="
          flex-grow
          px-4 py-2
          border border-gray-300
          rounded-l-lg
          focus:outline-none focus:ring-2 focus:ring-blue-500
        "
      />
      <button
        type="submit"
        className="
          px-4 py-2
          bg-blue-500 text-white
          rounded-r-lg
          hover:bg-blue-600
          focus:outline-none focus:ring-2 focus:ring-blue-500
        "
      >
        Search
      </button>
    </form>
  );
}
