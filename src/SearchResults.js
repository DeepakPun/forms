function SearchResults({ query }) {
  return (
    <div>
      {query === '' ? '' : <h1>Displaying search results for {query}</h1>}
    </div>
  )
}

export default SearchResults
