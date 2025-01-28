import { useState } from 'react'
import reactLogo from './assets/react.svg'
import linkedIn from '../LinkedIn-Logos/LI-Logo.png'
import './App.css'

function Header(){
  return(
    <header>
      <h1>Daniel Jones</h1>
    </header>
  );
}

function Footer(){
  return(
    <footer>
      <a href="https://www.linkedin.com/in/dan-jones-pro/" target="_blank">
          <img src={linkedIn} className="logo" alt="LinkedIn logo" />
      </a>
    </footer>
  );
}




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Footer/>
    </>
  )
}

export default App
