import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from './components/Navbar'
import Content from './components/Content'
import Services from './components/Services'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import Freebies from './components/Freebies'
import Help from './components/Help'
import WhyUs from './components/WhyUs'

const App = () => {
  return (
      <Router>
        <Routes>
            <Route exact path="/" element=
            {
              <div>
              <Navbar/>
              <Content/>
              <Services/>
              <Newsletter/>
              <WhyUs/>
              <Freebies/>
              <Help/>
              <Footer/>
              </div>
          }/>
          </Routes>
        </Router>
  )
}

export default App