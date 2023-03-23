import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import { useState } from 'react'
import './App.css'

function App() {
  const [query, setQuery] = useState('')
  const handleSubmit = (query) => {
    setQuery(query)
  }
  return (
    <div className='App'>
      <h1>Let's do some searching shall we?</h1>
      <SearchBar onSubmit={handleSubmit} />
      <SearchResults query={query} />
    </div>
  )
}

export default App
