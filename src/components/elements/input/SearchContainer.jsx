import React, { useState } from 'react';
import axios from 'axios';
import Input from './Input';

const SearchContainer = () => {
  const [results, setResults] = useState([]);

  const performSearch = async (query) => {
    try {
      const response = await axios.get(`/search?query=${query}`);
      setResults(response.data.results);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div>
      <Input onSearch={performSearch} />
      <div>
        {/* Tampilkan hasil pencarian */}
        {results.map((result, index) => (
          <div key={index}>
            <h3>{result.title}</h3>
            <p>{result.description}</p>
            {/* Tampilkan hasil lainnya sesuai tipe (artikel, video, ebook) */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchContainer;
