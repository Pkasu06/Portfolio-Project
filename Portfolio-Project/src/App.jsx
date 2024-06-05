import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header, Footer, Home, About, Contact, Projects, Skills } from './components/index'

function App() {
  const [count, setCount] = useState(0)
  //TODO: 1) Add back to top button
  //TODO: 2) Add Theme changer for dark mode, light mode


  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
