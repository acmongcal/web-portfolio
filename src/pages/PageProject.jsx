import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { restBase } from "../utilities/Utilities";
import { LoadingContext } from "../context/LoadingContext";
import { decodeHtml } from "../utilities/functions";
import Slider from "../components/Slider";
import ACFImage from "../utilities/ACFImage";

function PageProject() {
  const { id } = useParams();
  const restPath = restBase + `project/${id}?_embed=1`;
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
    <section className="project-section">
      {isLoaded ? (
        <article className="window">
          {restData ? (
            <>
              <div className="titlebar">
                <h1>{decodeHtml(restData.title.rendered)}</h1>
              </div>
              <div className="content">
                <Slider targetSubClass="project-screenshot">
                  {restData._embedded["acf:attachment"].map(
                    (screenshot, index) => (
                      <div key={index} className="project-screenshot">
                        <ACFImage acfImageObject={screenshot} />
                      </div>
                    ),
                  )}
                </Slider>
                <ul className="project-techstack">
                  {restData._embedded["acf:post"].map((techstack, index) => (
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
                  <a
                    href={restData.acf.live_site_link}
                    className="button-49"
                    target="_blank"
                    rel="noopener"
                    aria-label="Open live project in a new tab"
                  >
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
                  <a
                    href={restData.acf.github_link}
                    className="button-53"
                    target="_blank"
                    rel="noopener"
                    aria-label="View project repository on GitHub"
                  >
                    <svg
                      className="logo"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.59 1.21 3.22.92.1-.72.39-1.21.7-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.12-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3.01 0 4.27-2.6 5.21-5.08 5.49.4.35.75 1.02.75 2.06V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z" />
                    </svg>
                  </a>
                </div>
                <p>{restData.acf.project_overview}</p>
                <h2>Take Away</h2>
                <h3>Lessons Learned</h3>
                <ul>
                  {restData.acf.lessons_learned.map((lesson, index) => (
                    <li key={index}>{lesson.lesson}</li>
                  ))}
                </ul>
                <h3>Reflection</h3>
                <p>{restData.acf.reflection}</p>
                {restData.acf.collaborators ? (
                  <h2>Features I Worked On</h2>
                ) : (
                  <h2>Key Features</h2>
                )}
                <ul>
                  {restData.acf.key_features.map((feature, index) => (
                    <li key={index}>
                      <h3>{feature.feature}</h3>
                      <p>{feature.feature_overview}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            //Fallback if rest api failed to load
            <p>Project not found</p>
          )}
        </article>
      ) : null}
    </section>
  );
}

export default PageProject;
