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
                <div className="project-links">
                  <a href={restData.acf.live_site_link} className="button-49">
                    livesite
                  </a>
                  <a href={restData.acf.github_link} className="button-49">
                    repo
                  </a>
                </div>
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
