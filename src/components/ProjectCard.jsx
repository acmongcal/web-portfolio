import FeaturedImage from "../utilities/FeaturedImage";
import { decodeHtml } from "../utilities/functions";
function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <h3>{decodeHtml(project.title.rendered)}</h3>
      <FeaturedImage
        featuredImageObject={project._embedded["wp:featuredmedia"][0]}
      />
      <ul className="project-techstack">
        {project._embedded["acf:post"].map((techstack, index) => (
          <li key={index}>
            <img
              className="logo"
              src={techstack.featured_image_url}
              alt={techstack.title.rendered + " Logo"}
            />
          </li>
        ))}
      </ul>
      <div className="project-links">
        <a href={`/project-details/${project.id}`} className="button-49">
          More Info
        </a>
        <a href={project.acf.live_site_link} className="button-49">
          livesite
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
