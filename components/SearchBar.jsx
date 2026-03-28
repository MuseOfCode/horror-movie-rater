import React from "react"
//useState - react hook that allows component to remember values between renders.
//Every time state changes, render re-renders the component with new value.
import { useState } from "react";

export default function SearchBar({onResults}){
    const [query, setQuery] = useState("") //what user has typed in input
    const [loading, setLoading] = useState(false) //flag to know if api response has come or not

    async function handleSearch(){
        if(!query.trim()) return; 
        setLoading(true)

        const token = process.env.NEXT_PUBLIC_TMDB_TOKEN

        const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },

                }

        )

        const data = await response.json()
        onResults(data.results)
        setLoading(false)

      

    }

    //checks to see if Enter was pressed. 
    function handleKeyDown(event){
        if(event.key === "Enter") handleSearch()
            
    }

    return (
        <div style={styles.wrapper}>
            <input 
            style={styles.input}
            type="text"
            placeholder="Search"
            value={query}

            //controlled input, every time user inputs, query is updated
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            />
            <button
            style={styles.button}
            onClick={handleSearch}
            >
            {loading ? "Searching..." : "Search"}
            </button>
        </div>
    )
}

const styles = {
  wrapper: {
    display: 'flex',
    gap: '10px',
    padding: '40px 20px',
    maxWidth: '600px',
    margin: '0 auto',
  },
  input: {
    flex: 1,
    padding: '12px 16px',
    backgroundColor: '#1a1a1a',
    border: '1px solid #333333',
    borderRadius: '4px',
    color: '#e8e8e8',
    fontFamily: 'Georgia, serif',
    fontSize: '1rem',
    outline: 'none',
  },
  button: {
    padding: '12px 24px',
    backgroundColor: '#cc0000',
    color: '#e8e8e8',
    border: 'none',
    borderRadius: '4px',
    fontFamily: 'Georgia, serif',
    fontSize: '1rem',
    cursor: 'pointer',
  },
}