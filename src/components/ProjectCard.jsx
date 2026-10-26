import FeaturedImage from "../utilities/FeaturedImage";
import { decodeHtml } from "../utilities/functions";
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
        <a href={project.acf.live_site_link} className="button-53" target="_blank" rel="noopener" aria-label="Open live project in a new tab">
          <svg
            className="logo"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M21 11V3h-8v2h4v2h-2v2h-2v2h-2v2H9v2h2v-2h2v-2h2V9h2V7h2v4h2zM11 5H3v16h16v-8h-2v6H5V7h6V5z" />
          </svg>
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
