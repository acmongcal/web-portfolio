import { useState, useEffect, useContext } from "react";
import { restBase } from "../utilities/Utilities";
import { formatDate } from "../utilities/functions";
import { LoadingContext } from "../context/LoadingContext";

function WorkHistory() {
  const restPath = restBase + "work-experience?_embed=1";
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
        <h2>Work History</h2>
      </div>
      <div className="content">
        {isLoaded ? (
          restData.length > 0 ? (
            <div className="work-history-timeline">
              {restData.map((work) => (
                <article
                  className="work-history-item"
                  key={work.id}
                  id={`work-${work.id}`}
                >
                  <span className="work-history-marker"/>
                  <p className="work-history-meta work-history-dates">
                    {formatDate(work.acf.start_date)} -{" "}
                    {formatDate(work.acf.end_date)}
                  </p>
                  <div className="work-history-card">
                    <div className="work-history-details">
                      <h4>Reflection</h4>
                      <p>{work.acf.reflection}</p>
                      <h4>Roles</h4>
                      <ul>
                        {work.acf.roles.map((role, roleIndex) => (
                          <li key={roleIndex}>{role.role}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="work-history-heading">
                      <h3>{work.title.rendered}</h3>
                      <p className="work-history-meta work-history-company">
                        {work.acf.company_name}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p>No work experiences found</p>
          )
        ) : null}
      </div>
    </section>
  );
}

export default WorkHistory;
