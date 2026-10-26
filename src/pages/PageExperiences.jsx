import WorkHistory from "../components/WorkHistory";
import Education from "../components/Education";
import Skills from "../components/Skills";

function PageExperiences() {
  return (
    <section className="experiences-section">
      <title>Experiences | Kuuhaku Dev</title>
      <meta name="author" content="Alan Mongcal" />
      <meta
        name="keywords"
        content="My Experiences, Education, Work, Roles, Skills"
      />
      <meta
        name="description"
        content="This page shows all the experience I have such as work, education and the skills that I have acquired along the way."
      />
      <h1 className="page-header">Experiences</h1>
      <Education />
      <Skills />
      <WorkHistory />
    </section>
  );
}

export default PageExperiences;
