import './App.css'
import React, {useState} from 'react'
import Router from '../src/routes/Router'
import theme from '../src/constants/theme'
import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter } from 'react-router-dom'
import Header from "./components/Header/Header"

const App = () => {
  const token = localStorage.getItem("token")
  const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
        <Router setRightButtonText={setRightButtonText}/>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App