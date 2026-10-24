import FeaturedImage from "../utilities/FeaturedImage";
import { decodeHtml } from "../utilities/functions";
import ExternalLinkIcon from "../assets/images/external-link-icon.svg";
function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <h3 className="title">{decodeHtml(project.title.rendered)}</h3>
      <div className="rectangle left-top"></div>
      <div className="rectangle right-top"></div>
      <div className="rectangle left-bottom"></div>
      <div className="rectangle right-bottom"></div>
      <FeaturedImage
        featuredImageObject={project._embedded["wp:featuredmedia"][0]}
      />
      <ul className="category">
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
          Project Details
        </a>
        <a href={project.acf.live_site_link} className="button-53" target="_blank" rel="noopener">
          <img className="logo" src={ExternalLinkIcon} alt="External Link icon" />
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
