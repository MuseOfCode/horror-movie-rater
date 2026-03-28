//Next.js defaults to render pages on server, useState only works in browser.
//adding use state tells Next.js that this component renders in the browser
"use client"

import { useState } from "react"
import Header from "@/components/Header"
import SearchBar from "@/components/SearchBar"
import FilmGrid from "@/components/FilmGrid"


export default function Home() {
  const [results, setResults] = useState([])


  return (
    <main>
      <Header/>
      <SearchBar onResults={setResults}/> 
      <FilmGrid results = {results}/>
    </main>
  )
}

//function prop; searchbar calls on onResult & updates state in page.js. Lifting state.