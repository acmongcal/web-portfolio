import { Route, Routes, NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { LoadingProvider } from "./context/LoadingProvider";
import PageHome from "./pages/PageHome";
import PageProjects from "./pages/PageProjects";
import PageExperiences from "./pages/PageExperiences";
import PageAbout from "./pages/PageAbout";
import PageProject from "./pages/PageProject";
import PageNotFound from "./pages/PageNotFound";
import Socials from "./components/Socials";

function App() {
  const [isBottomNavOpen, setIsBottomNavOpen] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
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
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
        <div className="app-shell">
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
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </main>
          <footer>
            <Socials location="footer" />
            <p>&copy; Kuuhaku Dev {new Date().getFullYear()}.</p>
          </footer>
          {!isMobileViewport && showScrollToTop && (
            <button
              className="scroll-to-top"
              type="button"
              aria-label="Scroll to top"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)",
                  ).matches
                    ? "auto"
                    : "smooth",
                })
              }
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                focusable="false"
              >
                <path d="m6 14 6-6 6 6" />
              </svg>
            </button>
          )}
        </div>
      </LoadingProvider>
    </>
  );
}

export default App;
