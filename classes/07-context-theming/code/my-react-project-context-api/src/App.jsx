import './App.css'
import { useState } from 'react'
import Counter from './components/Counter'

import ThemeSwitcher from './components/ThemeSwicther'
import ThemeContext from './contexts/ThemeContext'

function App() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <ThemeContext.Provider value={{ color: theme }}>
        <Counter/>
        <ThemeSwitcher toggleTheme={toggleTheme}/>
      </ThemeContext.Provider>
    </>
  )
}
export default App

