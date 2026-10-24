import WorkHistory from "../components/WorkHistory";
import Education from "../components/Education";
import Skills from "../components/Skills";

function PageExperiences() {
  return (
    <section className="experiences-section">
      <h1 className="page-header">Experiences</h1>
      <Education />
      <Skills />
      <WorkHistory />
    </section>
  );
}

export default PageExperiences;
