import { useState } from 'react'

function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('')
  const handleFormSubmit = (event) => {
    event.preventDefault()
    // console.log(event.target.value)
    onSubmit(query)
  }

  const handleChange = (event) => {
    setQuery(event.target.value)
  }
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input onChange={handleChange} />
      </form>
    </div>
  )
}

export default SearchBar
