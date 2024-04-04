import React from 'react';

export default function SearchResult({ searchResults }) {
    return (
        <div>
            <h2>Search Results</h2>
            <ul>
                {searchResults.map((result, index) => (
                    <li key={index}>
                        <strong>Title:</strong> {result.title}, <strong>Author:</strong> {result.author}, <strong>Year:</strong> {result.first_publish_year}, <strong>Rating:</strong> {result.average_rating}
                        <a href={`https://www.amazon.com/s?k=${result.amazon_id}`} target="_blank" rel="noopener noreferrer">Search on Amazon</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
