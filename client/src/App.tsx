import React from 'react'
import styled from 'styled-components'
import 'App.css'

import {
  BrowserRouter as Router
} from 'react-router-dom'
import ConfigRouter from 'navigation/ConfigRouter'

import { Header } from 'components/Header'
// import { Footer } from 'components/Footer'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const AppElement = styled.div`
  flex: 1;
  padding: 110px 5% 30px;
`

function App() {
  return (
    <AppContainer>
      <Router>
        <Header />
        <AppElement className="app">
          <ConfigRouter />
        </AppElement>
      </Router>
    </AppContainer>
  )
}

export default App
