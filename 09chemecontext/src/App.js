import logo from './logo.svg';
import './App.css';
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';
import { ThemeProvider } from './context/Theme';
import {useState, useEffect} from 'react'

function App() {
  const [themeMode, setThemeMode] = useState('dark')

  const darkTheme = ()=>{
    setThemeMode('dark')
  }
  const lightTheme = ()=>{
    setThemeMode('light')
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove('dark','theme')
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <ThemeBtn/>
      <Card/>
    </ThemeProvider>
  );
}

export default App;
