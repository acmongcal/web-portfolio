import Projects from "../components/Projects";
import TechStackLogos from "../components/TechStackLogos";
import PersonaPhoto from "../assets/images/kuuhaku.jpg";
import Socials from "../components/Socials";
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
              <Socials location="home"/>
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
