import React from 'react'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Examples from './components/Examples'
import Newsletter from './components/Newsletter'
import Cards from './components/Cards'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Content/>
      <Examples/>
      <Newsletter/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App