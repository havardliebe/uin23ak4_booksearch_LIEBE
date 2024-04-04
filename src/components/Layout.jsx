import React from 'react';

export default function Layout() {

    return (
        <>
            <input 
                type="text" 
                placeholder="Søk..."
            />
            <button onClick={handleSearch}>Søk</button>
        </>
    );
}
