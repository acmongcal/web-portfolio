import { Route, Routes, Link, NavLink } from 'react-router-dom'
import ScrollToTop from './utilities/ScrollToTop'
import Home from './templates/Home'
import Posts from './templates/Posts'
import Post from './templates/Post'
import Contact from './templates/Contact'
import Page from './templates/Page'
import Works from './templates/Works'
import Profile from './templates/Profile'
import Job from './templates/Job'
import Jobs from './templates/Jobs'
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
            <li><NavLink to='/blog'>Blog</NavLink></li>
            <li><NavLink to='/services'>Services</NavLink></li>
            <li><NavLink to='/works'>Works</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
            <li><NavLink to='/profile'>Profile</NavLink></li>
          </ul>
        </nav>
      </header>
      <main id="main">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Page pageID={200} />} />
          <Route path='/about' element={<Page pageID={12} />} />
          <Route path='/privacy-policy' element={<Page pageID={3} />} />
          <Route path='/blog' element={<Posts />} />
          <Route path='/blog/:slug' element={<Post />} />
          <Route path='/careers' element={<Jobs />} />
          <Route path='/careers/:slug' element={<Job />} />
          <Route path='/works' element={<Works />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </main>
      <footer>
        <nav className="site-navigation">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/privacy-policy'>Privacy</NavLink></li>
            <li><NavLink to='/careers'>Careers</NavLink></li>
          </ul>
        </nav>
        <p className="copyright">Created by <a href="https://kuuhakudev.com/" target="_blank" rel="noopener noreferrer">Alan</a>.</p>
      </footer>
    </>
  )
}

export default App
