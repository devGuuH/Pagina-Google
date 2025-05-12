import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    window.open(`https://www.google.com/search?q=${query}`, '_blank');
  };

  return (
    <form onSubmit={handleSearch} className="search-container">
      <div className="search-box">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Pesquise no Google ou digite um URL"
        />
      </div>
      <div className="buttons">
        <button type="submit">Pesquisa Google</button>
        <button type="button">Estou com sorte</button>
        <button type="Delete">Deletar</button>
      </div>
    </form>
  );
};

export default SearchBar;