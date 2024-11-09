import React from 'react'
import Header from './Components/1-header/header.jsx'
import Hero from './Components/2-hero/hero.jsx'
import Main from './Components/3-Main/main.jsx'
import Contact from './Components/4-contact/contact.jsx'
import Footer from './Components/5-footer/footer.jsx'
function App() {
 

  return (
    <div className='container'>

      <Header />
      <div className='divider'/>
      <Hero />
      <div className='divider'/>
      <Main />
      <div className='divider'/>
      <Contact />
      <div className='divider'/>
      <Footer />

    </div>
  )
}

export default App
