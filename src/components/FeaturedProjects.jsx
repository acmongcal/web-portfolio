import { useState, useEffect, useContext } from "react";
import { restBase } from "../utilities/Utilities";
import { LoadingContext } from "../context/LoadingContext";
import { decodeHtml } from "../utilities/functions";
import FeaturedImage from "../utilities/FeaturedImage";
function FeaturedProjects() {
  const restPath = restBase + "project?_embed=1";
  const [restData, setData] = useState([]);
  const [isLoaded, setLoadStatus] = useState(false);
  const { runWithLoading } = useContext(LoadingContext);

  useEffect(() => {
    const fetchData = async () => {
      await runWithLoading(async () => {
        const response = await fetch(restPath);
        if (response.ok) {
          const data = await response.json();
          setData(data);
          setLoadStatus(true);
        } else {
          setLoadStatus(false);
        }
      });
    };
    fetchData();
  }, [restPath, runWithLoading]);

  return (
    <section>
      {isLoaded ? (
        <>
          <h2>Featured Projects</h2>
          {restData ? (
            restData.slice(0, 3).map((project, index) => (
              <article key={index} id={`project-${project.id}`}>
                <h3>{decodeHtml(project.title.rendered)}</h3>
                <FeaturedImage
                  featuredImageObject={project._embedded["wp:featuredmedia"][0]}
                />
                <a href={project.acf.live_site_link} className="button-49">
                  Go to livesite
                </a>
                <p></p>
                <a href={project.acf.github_link} className="button-49">
                  Go to repo
                </a>
                {/* <p>{decodeHtml(project.acf.project_overview)}</p> */}
                <ul>
                  <h4>Tech Stack</h4>
                  {project._embedded["acf:post"].map((techstack, index) => (
                    <li key={index}>
                      <img className="logo" src={techstack.featured_image_url} alt={techstack.title.rendered + " Logo"} />
                    </li>
                  ))}
                </ul>
              </article>
            ))
          ) : (
            //Fallback if rest api failed to load
            <p>No featured projects found</p>
          )}
        </>
      ) : null}
    </section>
  );
}

export default FeaturedProjects;
