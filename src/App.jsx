import { Route, Routes, Link, NavLink } from 'react-router-dom'
import ScrollToTop from './utilities/ScrollToTop'
import Home from './templates/Home'
import Projects from './templates/Projects'
import Experiences from './templates/Experiences'
import About from './templates/About'
import Project from './templates/Project'

function App() {

  return (
    <>
      <ScrollToTop />
      <header id="masthead" className="site-header">
        <div className="site-branding">
          <p className="site-title">Web Portfolio</p>
        </div>
        <nav className="site-navigation">
          <ul>
            <li><NavLink to='/' end>Home</NavLink></li>
            <li><NavLink to='/projects'>Projects</NavLink></li>
            <li><NavLink to='/experiences'>Experiences</NavLink></li>
            <li><NavLink to='/about'>My Story</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
          </ul>
        </nav>
      </header>
      <main id="main">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/:slug' element={<Project />} />
          <Route path='/experiences' element={<Experiences />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
      <footer>
        <nav className="site-navigation">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/projects'>Projects</NavLink></li>
            <li><NavLink to='/experiences'>Experiences</NavLink></li>
          </ul>
        </nav>
        <p className="copyright">Created by <a href="https://kuuhakudev.com/" target="_blank" rel="noopener noreferrer">Alan</a>.</p>
      </footer>
    </>
  )
}

export default App
