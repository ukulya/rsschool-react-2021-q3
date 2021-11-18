import React from 'react'

import About from './components/About'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route, Link as NavLink } from 'react-router-dom'
import NotFound from './components/NotFound'
import Details from './components/Details'

const App = () => {
 

  return<Router>
    <div>
      <nav>
        <ul className="navbar-nav">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/about" element={<About />}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/details/:id" element={<Details/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  </Router>
}

export default App
