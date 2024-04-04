import React, { useState } from 'react';

export default function SearchBar({ setSearchQuery, handleSearch }) {
    const [query, setQuery] = useState('')

    const handleChange = (event) => {
        setQuery(event.target.value)
        setSearchQuery(event.target.value)
    };

    return (
        <div>
            <input type="text" value={query} onChange={handleChange} placeholder="Søk etter bok..." />
            <button onClick={handleSearch}>Søk</button>
        </div>
    );
}
