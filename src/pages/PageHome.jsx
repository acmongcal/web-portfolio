import Projects from "../components/Projects";
import TechStackLogos from "../components/TechStackLogos";
import PersonaPhoto from "../assets/images/kuuhaku.jpg";
import GithubIcon from "../assets/images/github-icon.png";
import LinkedInIcon from "../assets/images/linkedin-icon.png";
import MailIcon from "../assets/images/mail-icon.png";
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
                <a href="mailto:kuuuhakudev@gmail.com">
                  <img src={MailIcon} alt="mail-icon" />
                </a>
                <a
                  href="https://www.linkedin.com/in/acmongcal"
                  target="_blank"
                  rel="noopener"
                >
                  <img src={LinkedInIcon} className="linked-in" />
                </a>
                <a
                  href="https://github.com/acmongcal"
                  target="_blank"
                  rel="noopener"
                >
                  <img src={GithubIcon} alt="github-icon" />
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
      <Projects limit={3} />
    </div>
  );
}

export default PageHome;
