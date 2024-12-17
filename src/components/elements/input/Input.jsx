import React, { useState } from 'react';

const Input = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="relative flex items-center justify-center my-5">
      <label htmlFor="Search" className="sr-only">Search</label>
      <input
        type="text"
        id="Search"
        placeholder="Ex. Cara Menjadi Petani Jagung"
        className="w-full px-4 py-2.5 border-2 border-yellow-400 rounded-l-full outline-none shadow-sm sm:text-sm"
        value={query}
        onChange={handleInputChange}
      />
      <button 
        type="button" 
        className="flex items-center px-5 py-2.5 bg-yellow-400 text-white rounded-r-full hover:bg-yellow-500" 
        onClick={handleSearch}
      >
        <span className="sr-only">Search</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <span>Search</span>
      </button>
    </div>
  );
};

export default Input;
