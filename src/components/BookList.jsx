import React, { useState, useEffect } from 'react';

export default function BookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchJamesBond = async () => {
                const response = await fetch('https://openlibrary.org/search.json?q=James+Bond&has_fulltext=false&language=eng&person_facet=James+Bond+%28Fictitious+character%29')
                
                const data = await response.json()
                setBooks(data.docs)
            
        };
        

        fetchJamesBond()
    }, [])

    return (
        <div>
            <h2>James Bond Books</h2>
            <ul>
                {books.map((book, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
                        {book.isbn && (
                            <img src={`https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-S.jpg`} width="80" height="110" alt="Book cover" style={{ marginRight: '10px' }} />
                        )}
                        <div>
                            <strong>Title:</strong> {book.title}<br />
                            <strong>Author:</strong> {book.author_name ? book.author_name.join(', ') : 'Unknown'}<br />
                            <strong>Year:</strong> {book.publish_year}<br />
                            <strong>Rating:</strong> {book.ratings_average ? book.ratings_average : 'Unknown'}<br />
                            <a href={`https://www.amazon.com/s?k=${book.title} ${book.author_name} book`} target="_blank" rel="noopener noreferrer">Søk i Amazon</a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
    
    
}
