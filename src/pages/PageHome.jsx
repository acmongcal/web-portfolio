import Projects from "../components/Projects";
import TechStackLogos from "../components/TechStackLogos";
import PersonaPhoto from "../assets/images/kuuhaku.jpg";
function PageHome() {
  return (
    <div className="home-container">
      <section className="window">
        <div className="titlebar">
          <h1>Front End Web Developer</h1>
        </div>
        <div className="content">
          <article>
            <div className="home-profile">
              <h2>Hi! I'm Alan</h2>
              <div className="home-socials">
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
              <p>
                Continuing my journey into the web development world. I'm a
                detail oriented web developer with a 6 year background of
                Quality Assurance. I'm also passionate about problem solving
                through code, collaborating with other people and also
                continously learning on the different web technologies.
              </p>
              <img
                className="profile"
                src={PersonaPhoto}
                alt="A portrait drawn"
              />
              <div className="home-ctas">
                <a href="/experiences" className="button-49">
                  Background
                </a>
                <a href="/about" className="button-53">
                  My Story
                </a>
              </div>
            </div>
          </article>
          <h2>Tech Stack </h2>
          <TechStackLogos />
        </div>
      </section>
      <section>
        <h2>Featured Projects</h2>
        <Projects limit={3} />
      </section>
    </div>
  );
}

export default PageHome;
