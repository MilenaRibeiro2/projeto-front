import './App.css'
import React from 'react'
import Router from '../src/routes/Router'
import theme from '../src/constants/theme'
import { ThemeProvider } from '@material-ui/core/styles'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router/>
    </ThemeProvider>
  )
}

export default App