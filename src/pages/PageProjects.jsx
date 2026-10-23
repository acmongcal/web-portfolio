import { useState, useEffect, useContext } from "react";
import { restBase } from "../utilities/Utilities";
import { LoadingContext } from "../context/LoadingContext";
import Projects from "../components/Projects";
function PageProjects() {
  const [filter, setFilter] = useState("All");
  const restPath = restBase + "project-type?_embed=1";
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
        <ul>
          <li>
            <button
              className={filter == "All" ? "active-btn" : "filter"}
              onClick={() => setFilter("All")}
            >
              All
            </button>
          </li>
          {restData
            ? restData.map((projectType, index) => (
                <li key={index} id={`project-type-${projectType.id}`}>
                  <button
                    className={
                      filter == projectType.name ? "active-btn" : "filter"
                    }
                    onClick={() => setFilter(projectType.name)}
                  >
                    {projectType.name}
                  </button>
                </li>
              ))
            : null}
        </ul>
      ) : null}
      <Projects filter={filter} />
    </section>
  );
}

export default PageProjects;
