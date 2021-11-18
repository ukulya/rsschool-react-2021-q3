import React from 'react'
import { TransitionGroup,CSSTransition } from 'react-transition-group';
import About from './components/About'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import NotFound from './components/NotFound'
import Details from './components/Details'

const routes = [
  { path: '/', name: 'Home', element: Home },
  { path: '/about', name: 'About', element: About },
  { path: '/details/:id', name: 'Details', element: Details },
  { path: '*', name: 'NotFound', element: NotFound },
]

const App = ({ location }) => {
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
      {/* <TransitionGroup> */}
      <CSSTransition /* key={location.pathname.split('/')[1] || '/'} */ timeout={300} classNames="fading-animation-transition" appear >
      <Routes /* location={location} */>
        <Route path="/about" element={<About />}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/details/:id" element={<Details/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </CSSTransition>
      {/* </TransitionGroup> */}
    </div>
  </Router>
}

export default App
