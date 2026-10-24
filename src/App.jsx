import { Route, Routes, Link, NavLink } from "react-router-dom";
import { LoadingProvider } from "./context/LoadingProvider";
import PageHome from "./pages/PageHome";
import PageProjects from "./pages/PageProjects";
import PageExperiences from "./pages/PageExperiences";
import PageAbout from "./pages/PageAbout";
import PageProject from "./pages/PageProject";
import GithubIcon from "./assets/images/github-icon.png";
import LinkedInIcon from "./assets/images/linkedin-icon.png";
import MailIcon from "./assets/images/mail-icon.png";

function App() {
  return (
    <>
      <LoadingProvider>
        <header id="masthead" className="site-header">
          <nav className="site-navigation">
            <ul>
              <li>
                <NavLink to="/" end>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/experiences">Experiences</NavLink>
              </li>
              <li>
                <NavLink to="/about">My Story</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main id="main">
          <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="/projects" element={<PageProjects />} />
            <Route path="/project-details/:id" element={<PageProject />} />
            <Route path="/experiences" element={<PageExperiences />} />
            <Route path="/about" element={<PageAbout />} />
          </Routes>
        </main>
        <footer>
          <div className="contact-footer">
            <a href="mailto:kuuuhakudev@gmail.com">
              <img className="logo" src={MailIcon} alt="mail-icon" />
            </a>
            <a href="https://www.linkedin.com/in/acmongcal" target="_blank" rel="noopener">
              <img className="logo" src={LinkedInIcon} alt="linkedin-icon" />
            </a>
            <a href="https://github.com/acmongcal" target="_blank" rel="noopener">
              <img className="logo" src={GithubIcon} alt="github-icon" />
            </a>
          </div>
          <p>&copy; Kuuhaku Dev {new Date().getFullYear()}.</p>
        </footer>
      </LoadingProvider>
    </>
  );
}

export default App;
