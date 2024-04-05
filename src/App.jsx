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
          return alert('Søket må være på minst tre tegn.')
        }
            const response = await fetch(`https://openlibrary.org/search.json?q=${searchQuery}&fields=isbn,title,first_publish_year,author_name,ratings_average`)
            const data = await response.json()
            setSearchResults(data.docs)
    }

    return (
        <>
            <h1>Boksøk</h1>
            <SearchBar setSearchQuery={setSearchQuery} handleSearch={handleSearch} />
            {searchResults.length === 0 ? <BookList /> : <SearchResult searchResults={searchResults} />}
        </>
    )
}

export default App
