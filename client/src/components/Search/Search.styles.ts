import styled from 'styled-components'

export const SearchContainer = styled.div`
  display: flex;
  border: 1px solid black;
  border-radius: 15px;
  padding: 5px 10px;
`

export const SearchInput = styled.input`
  height: 2rem;
  padding-right: 15px;
`

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
  margin: -5px -10px;
  border-radius: 0 14px 14px 0;
  background: rgb(2, 60, 255);
  color: white;
  cursor: pointer;
`
