import React, { useState } from 'react';
import Navbar from "./Components/Navbar"
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Menu from './pages/Menu'
import Aboutus from './pages/Aboutus'
import Contact from './pages/Contact'
import Footer from "./Components/Footer"

const App = () => {
  return (
    <div>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/home" exact Component={Home} />
          <Route path="/menu" exact Component={Menu} />
          <Route path="/aboutus" exact Component={Aboutus} />
          <Route path="/contact" exact Component={Contact} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App
