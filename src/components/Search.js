import React, { useState, useCallback } from 'react'
import { ReactComponent as MagnifyingGlass } from '../media/magnifying-glass.svg'
import styles from './Search.module.css'

function Search({ className, id }) {
  const [query, setQuery] = useState('')
  const handleQueryChange = useCallback(evt => {
    setQuery(evt.target.value)
  }, [])
  const handleSearch = useCallback(evt => {
    evt.preventDefault()
    window.alert(query)
    setQuery('')
  }, [query, setQuery])
  return (
    <form
      className={[className, styles.wrapper].join(' ')}
      id={id}
      onSubmit={handleSearch}
    >
      <button type='submit'>
        <MagnifyingGlass/>
      </button>
      <input
        value={query}
        onChange={handleQueryChange}
        placeholder='Pesquisa'
        autoComplete='off'
      />
    </form>
  )
}

export default Search