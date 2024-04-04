import React from 'react';

export default function SearchResult({ searchResults }) {
    return (
        <div>
            <h2>Søkeresultat</h2>
            <ul>
                {searchResults.map((result, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
                        {result.isbn && (
                            <img src={`https://covers.openlibrary.org/b/isbn/${result.isbn[0]}-L.jpg`} width="80" height="110" alt="Book cover" style={{ marginRight: '10px' }} />
                        )}
                        <div>
                            <strong>Title:</strong> {result.title}<br />
                            <strong>Author:</strong> {result.author_name ? result.author_name.join(', ') : 'Unknown'}<br />
                            <strong>Year:</strong> {result.first_publish_year}<br />
                            <strong>Rating:</strong> {result.ratings_average ? result.ratings_average : 'Unknown'}<br />
                            <a href={`https://www.amazon.com/s?k=${result.title}+${result.author_name} book`} target="_blank" rel="noopener noreferrer">Search on Amazon</a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
    
}
