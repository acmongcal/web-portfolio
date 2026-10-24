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
          <>
            {restData ? (
              restData.map((work, index) => (
                <article key={index} id={`work-${work.id}`}>
                  <h3>{work.title.rendered}</h3>
                  <p>
                    {formatDate(work.acf.start_date)} -{" "}
                    {formatDate(work.acf.end_date)}
                  </p>
                  <h3>Company: {work.acf.company_name} </h3>
                  <h3>Reflection</h3>
                  <p>{work.acf.reflection}</p>
                  <h3>Roles:</h3>
                  <ul>
                    {work.acf.roles.map((role, index) => (
                      <li key={index}>{role.role}</li>
                    ))}
                  </ul>
                </article>
              ))
            ) : (
              //Fallback if rest api failed to load
              <p>No work experiences found</p>
            )}
          </>
        ) : null}
      </div>
    </section>
  );
}

export default WorkHistory;
