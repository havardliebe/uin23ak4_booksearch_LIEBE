import React from 'react';

export default function Layout() {
    const handleSearch = () => {
        // Legg til koden for søkefunksjonaliteten her
        console.log('Søk utført!')
    };

    return (
        <>
            <input 
                type="text" 
                placeholder="Søk..."
                // Legg til eventuelle andre attributter for søkefeltet her
            />
            <button onClick={handleSearch}>Søk</button>
        </>
    );
}
