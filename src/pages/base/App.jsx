import './App.css'
import Header from '../../components/header/header.jsx'
import Main from '../../components/main_section/main_section.jsx'
import { useState } from 'react'

function App() {
  const [toggleTheme, setToggleTheme] = useState(false)

  const handleToggleTheme = () => {
    console.log('clicked')
    setToggleTheme(!toggleTheme)
  }

  return (
    <div className={toggleTheme ? 'dark_mode' : 'light_mode'}>
      <Header handleToggleTheme={handleToggleTheme} toggleTheme={toggleTheme} />
      <Main />
    </div>
  )
}

export default App
