import styled from 'styled-components'

export const HeaderMenuItemMain = styled.a`
  display: block;
  cursor: pointer;
  padding: 10px 5px;
  margin-right: 5px;
  border-bottom: 1px solid transparent;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    border-bottom: 1px solid #2f2f2f;
  }
`
