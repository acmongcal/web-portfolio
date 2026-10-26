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
    <section className="projects-section">
      <title>Projects | Kuuhaku Dev</title>
      <meta name="author" content="Alan Mongcal" />
      <meta name="keywords" content="Project, React.js, JavaScript, WooCommerce, WordPress, CMS" />
      <meta
        name="description"
        content="Showcases all the projects that I have done from react, wordpress, cms, woocommerce and javascript"
      />
      <h1 className="page-header">Projects</h1>
      {isLoaded ? (
        <ul className="btn-group">
          <li>
            <button
              className={filter == "All" ? "active-btn button-53" : "button-53"}
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
                      filter == projectType.name
                        ? "active-btn button-53"
                        : "button-53"
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
