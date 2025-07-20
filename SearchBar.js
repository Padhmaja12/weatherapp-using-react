import React, { useState } from "react";
import './SearchBar.css';

function SearchBar ({onSearch}){
    const [city, setCity] = useState('');

    const handleSubmit = ( ) => {
        if (city.trim()){
            onSearch(city)
        }
    };
    const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

    return(
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSubmit}>Search</button>
    </div>
    );
}

export default SearchBar;