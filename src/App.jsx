import React, { useState } from 'react'
import BookList from './components/BookList'
import SearchBar from './components/SearchBar'
import SearchResult from './components/SearchResult'
import './App.css'

function App() {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const handleSearch = async () => {
        if (searchQuery.length < 3) {
            alert('Søket må være på minst tre tegn.')
            return
        }

        try {
            const response = await fetch(`https://openlibrary.org/search.json?q=${searchQuery}&fields=title,first_publish_year,author,average_rating,amazon_id`)
            const data = await response.json()
            setSearchResults(data.docs)
        } catch (error) {
            console.error('Error fetching search results:', error)
        }
    }

    return (
        <div>
            <h1>James Bond Books</h1>
            <SearchBar setSearchQuery={setSearchQuery} handleSearch={handleSearch} />
            {searchResults.length === 0 ? <BookList /> : <SearchResult searchResults={searchResults} />}
        </div>
    )
}

export default App
