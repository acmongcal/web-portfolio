import { useState, useEffect, useContext} from "react";
import { restBase } from "../utilities/Utilities";
import { LoadingContext } from "../context/LoadingContext";
import ProjectCard from "./ProjectCard";
import Slider from "./Slider";
function Projects({ limit, filter }) {
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
    <>
      {isLoaded ? (
        <>
          {limit ? (
            <Slider targetSubClass="project-card">
              {restData ? (
                restData
                  .slice(0, limit)
                  .map((project, index) => (
                    <ProjectCard
                      key={index}
                      id={`project-${project.id}`}
                      project={project}
                    />
                  ))
              ) : (
                //Fallback if rest api failed to load
                <p>No featured projects found</p>
              )}
            </Slider>
          ) : (
            <section>
              {restData ? (
                restData.map((project) => {
                  const terms = project._embedded?.["wp:term"] ?? [];
                  const matchesFilter =
                    filter === null ||
                    filter === undefined ||
                    filter === "All" ||
                    terms.some((termGroup) =>
                      termGroup.some((term) => term.name === filter),
                    );

                  return matchesFilter ? (
                    <ProjectCard
                      key={project.id}
                      id={`project-${project.id}`}
                      project={project}
                    />
                  ) : null;
                })
              ) : (
                //Fallback if rest api failed to load
                <p>No projects found</p>
              )}
            </section>
          )}
        </>
      ) : null}
    </>
  );
}

export default Projects;
