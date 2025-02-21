import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Button from './components/Button.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <About />
    <Contact/>
    <Services/>
    <Navbar/>
    <Footer/>
    <Button/>
    
  </StrictMode>,
)
