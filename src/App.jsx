import { Route, Routes, Link, NavLink } from 'react-router-dom'
import { LoadingProvider } from './context/LoadingProvider'
import PageHome from './pages/PageHome'
import PageProjects from './pages/PageProjects'
import PageExperiences from './pages/PageExperiences'
import PageAbout from './pages/PageAbout'
import PageProject from './pages/PageProject'

function App() {

  return (
    <>
      <LoadingProvider>
        <header id="masthead" className="site-header">
          <nav className="site-navigation">
            <ul>
              <li><NavLink to='/' end>Home</NavLink></li>
              <li><NavLink to='/projects'>Projects</NavLink></li>
              <li><NavLink to='/experiences'>Experiences</NavLink></li>
              <li><NavLink to='/about'>My Story</NavLink></li>
            </ul>
          </nav>
        </header>
        <main id="main">
          <Routes>
            <Route path='/' element={<PageHome />} />
            <Route path='/projects' element={<PageProjects />} />
            <Route path='/projects/:slug' element={<PageProject />} />
            <Route path='/experiences' element={<PageExperiences />} />
            <Route path='/about' element={<PageAbout />} />
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
        </footer>
      </LoadingProvider>
    </>
  )
}

export default App
