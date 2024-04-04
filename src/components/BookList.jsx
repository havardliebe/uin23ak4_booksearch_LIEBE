import React, { useState, useEffect } from 'react';

export default function BookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchJamesBond = async () => {
            try {
                const response = await fetch('https://openlibrary.org/search.json?q=James+Bond&has_fulltext=false&language=eng&person_facet=James+Bond+%28Fictitious+character%29')
                if (!response.ok) {
                    throw new Error('Failed to fetch data')
                }
                const data = await response.json()
                setBooks(data.docs)
            } catch (error) {
                console.error('Error fetching books:', error)
            }
        };

        fetchJamesBond()
    }, [])

    return (
        <div>
            <h2>James Bond Books</h2>
            <ul>
                {books.map((book, index) => (
                    <li key={index}>
                        <strong>Title:</strong> {book.title}, <strong>Author:</strong> {book.author_name ? book.author_name.join(', ') : 'Unknown'}, <strong>Year:</strong> {book.publish_year}
                    </li>
                ))}
            </ul>
        </div>
    );
}
