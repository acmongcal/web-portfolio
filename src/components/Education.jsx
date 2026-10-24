import { useState, useEffect, useContext } from "react";
import { restBase } from "../utilities/Utilities";
import { formatDate } from "../utilities/functions";
import { decodeHtml } from "../utilities/functions";
import { LoadingContext } from "../context/LoadingContext";

function Education() {
  const restPath = restBase + "education?_embed=1";
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
    <section className="window">
      <div className="titlebar">
        <h2>Education Background</h2>
      </div>
      {isLoaded ? (
        <div className="education-timeline">
          {restData.length > 0 ? (
            restData.map((education, index) => (
              <article
                key={education.id}
                id={`education-${education.id}`}
                className="education-item"
              >
                <span className="education-marker" aria-hidden="true" />
                <div className="education-card">
                  <h3>{decodeHtml(education.title.rendered)}</h3>
                  <p className="education-meta education-dates">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M7 2v3m10-3v3M4 9h16M5 4h14a1 1 0 0 1 1 1v15H4V5a1 1 0 0 1 1-1Z" />
                      <path d="M8 13h2m4 0h2m-8 4h2m4 0h2" />
                    </svg>
                    {formatDate(education.acf.start_date)} -{" "}
                    {formatDate(education.acf.end_date)}
                  </p>
                  <p className="education-meta education-school">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="m2 9 10-5 10 5-10 5L2 9Z" />
                      <path d="M6 11v5c3.5 3 8.5 3 12 0v-5M22 9v6" />
                    </svg>
                    {education.acf.school}
                  </p>
                </div>
              </article>
            ))
          ) : (
            //Fallback if rest api failed to load
            <p>No education found</p>
          )}
        </div>
      ) : null}
    </section>
  );
}

export default Education;
