import { Route, Routes, NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { LoadingProvider } from "./context/LoadingProvider";
import PageHome from "./pages/PageHome";
import PageProjects from "./pages/PageProjects";
import PageExperiences from "./pages/PageExperiences";
import PageAbout from "./pages/PageAbout";
import PageProject from "./pages/PageProject";

function App() {
  const [isBottomNavOpen, setIsBottomNavOpen] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const bottomNavRef = useRef(null);

  useEffect(() => {
    const mobileViewport = window.matchMedia("(max-width: 767px)");
    const handleViewportChange = (event) => {
      setIsMobileViewport(event.matches);
      if (!event.matches) {
        setIsBottomNavOpen(false);
      }
    };

    setIsMobileViewport(mobileViewport.matches);
    mobileViewport.addEventListener("change", handleViewportChange);
    return () => {
      mobileViewport.removeEventListener("change", handleViewportChange);
    };
  }, []);

  useEffect(() => {
    if (!isBottomNavOpen) return undefined;

    const handleOutsideClick = (event) => {
      if (!bottomNavRef.current?.contains(event.target)) {
        setIsBottomNavOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);
    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, [isBottomNavOpen]);
  return (
    <>
      <LoadingProvider>
        <header>
          {isMobileViewport ? (
            <nav
              ref={bottomNavRef}
              className={`mobile-nav${isBottomNavOpen ? " is-open" : ""}`}
            >
              <div className="mobile-nav-menu" id="mobile-nav-menu">
                <NavLink to="/" end onClick={() => setIsBottomNavOpen(false)}>
                  Home
                </NavLink>
                <NavLink
                  to="/projects"
                  onClick={() => setIsBottomNavOpen(false)}
                >
                  Projects
                </NavLink>
                <NavLink
                  to="/experiences"
                  onClick={() => setIsBottomNavOpen(false)}
                >
                  Experiences
                </NavLink>
                <NavLink to="/about" onClick={() => setIsBottomNavOpen(false)}>
                  My Story
                </NavLink>
              </div>
              <button
                className="mobile-nav-toggle"
                type="button"
                aria-expanded={isBottomNavOpen}
                aria-controls="mobile-nav-menu"
                onClick={() => setIsBottomNavOpen((isOpen) => !isOpen)}
              >
                <span>Kuuhaku Dev</span>
                <span className="mobile-nav-icon" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
              </button>
            </nav>
          ) : (
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
          )}
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
            <a href="mailto:kuuuhakudev@gmail.com" aria-label="Email Alan">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M3 5h18v14H3z" />
                <path d="m3 6 9 7 9-7" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/acmongcal"
              target="_blank"
              rel="noopener"
              aria-label="Alan on LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M5.2 3.5a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.4 9.5H7v11H3.4zM9.2 9.5h3.5V11h.1a3.8 3.8 0 0 1 3.4-1.8c3.6 0 4.3 2.4 4.3 5.5v5.8h-3.7v-5.1c0-1.2 0-2.8-1.8-2.8s-2.1 1.3-2.1 2.7v5.2H9.2z" />
              </svg>
            </a>
            <a
              href="https://github.com/acmongcal"
              target="_blank"
              rel="noopener"
              aria-label="Alan on GitHub"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.59 1.21 3.22.92.1-.72.39-1.21.7-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.12-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3.01 0 4.27-2.6 5.21-5.08 5.49.4.35.75 1.02.75 2.06V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
            </a>
          </div>
          <p>&copy; Kuuhaku Dev {new Date().getFullYear()}.</p>
        </footer>
      </LoadingProvider>
    </>
  );
}

export default App;
