import React from 'react'

import {Navbar, Brand, CTA} from './components';
import {Footer, Blog, Possibility, Features, WhatGPT4, Header} from './containers';
import './App.css'

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT4 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App