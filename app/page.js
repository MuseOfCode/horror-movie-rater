'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import SearchBar from '@/components/SearchBar'
import FilmGrid from '@/components/FilmGrid'
import Watchlist from '@/components/Watchlist'

export default function Home() {
  const [results, setResults] = useState([])
  const [watchlist, setWatchlist] = useState([])

  // Load watchlist from localStorage when the app first opens
  useEffect(() => {
    const saved = localStorage.getItem('watchlist')
    if (saved) setWatchlist(JSON.parse(saved))
  }, [])

  // Save watchlist to localStorage every time it changes
  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist))
  }, [watchlist])

  function addToWatchlist(movie) {
    const alreadyAdded = watchlist.some((m) => m.id === movie.id)
    if (alreadyAdded) return
    setWatchlist([...watchlist, { ...movie, userRating: 0 }])
  }

  function removeFromWatchlist(movieId) {
    setWatchlist(watchlist.filter((m) => m.id !== movieId))
  }

  function updateRating(movieId, rating) {
    setWatchlist(
      watchlist.map((m) =>
        m.id === movieId ? { ...m, userRating: rating } : m
      )
    )
  }

  return (
    <main>
      <Header />
      <SearchBar onResults={setResults} />
      <FilmGrid
        results={results}
        watchlist={watchlist}
        onAdd={addToWatchlist}
      />
      <Watchlist
        watchlist={watchlist}
        onRemove={removeFromWatchlist}
        onRate={updateRating}
      />
    </main>
  )
}