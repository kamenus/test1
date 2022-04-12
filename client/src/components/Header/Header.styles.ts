import styled from 'styled-components'

export const HeaderMain = styled.header`
  position: fixed;
  width: 100%;
  display: flex;
  height: 80px;
  padding: 0 10px;
  justify-content: center;
  padding: 0 5%;
  background-color: #fff;
  z-index: 1;
  box-shadow: 0 8px 20px rgb(117 115 111 / 20%);
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const HeaderButton = styled.a`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-style: none;
  padding: 10px 15px;
  // border-radius: 16px;
  background-color: #f1f0ed;
  font-weight: 500;
  transition: background-color .2s ease;

  &:hover {
    background-color: #A0A09E;
  }
`
