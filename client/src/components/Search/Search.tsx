import React, { useState, useEffect } from 'react'
import { SearchInput, SearchContainer, SearchButton } from './Search.styles'

import { SearchIcon } from 'components/Icons'

function Search () {
  const [searchValue, setSearchValue] = useState('')

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSearchValue(value)
  }

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        value={searchValue}
        onChange={handleSearchChange}
      />
      <SearchButton>
        <SearchIcon />
      </SearchButton>
    </SearchContainer>
  )
}

export default Search
