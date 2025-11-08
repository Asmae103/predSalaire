import React from 'react'
import './style.css'
import './index.css'
import Navbar from './composant/Navbar/Navbar.jsx';
import Hero from './composant/Hero/Heroo.jsx';
import Darkmode from './composant/Navbar/Darkmode.jsx';




const App = () => {
  return (
    <div >
      <Navbar />
      <Hero />
      {/* <Espace /> */}
     
    </div>
    
  )
}

export default App