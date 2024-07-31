import './App.css'
import { Home } from './components/home'

// MUI
import { ThemeProvider } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'
import { lightTheme, darkTheme } from './utils/theme';





function App() {

  const isDarkTheme = useMediaQuery('(prefers-color-scheme: dark)')
  return (
    <ThemeProvider theme={ isDarkTheme ? darkTheme : lightTheme}>
      <Home/>
    </ThemeProvider>
  )
}

export default App
