import { useState, useEffect, useContext } from "react";
import { restBase } from "../utilities/Utilities";
import { decodeHtml } from "../utilities/functions";
import { LoadingContext } from "../context/LoadingContext";
function Skills() {
  const restPath = restBase + "skill-type?_embed=1";
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
    <section className="window skills">
      <div className="titlebar">
        <h2>Skills</h2>
      </div>
      <div className="content">
        {isLoaded ? (
          <>
            {restData ? (
              restData.map((skillType) => (
                <article
                  className="skill-cluster"
                  key={skillType.id}
                  style={{
                    "--skill-radius": `${Math.max(
                      7.5,
                      skillType.acf.skills.length > 1
                        ? 3.5 /
                            Math.sin(Math.PI / skillType.acf.skills.length) +
                            0.5
                        : 7.5,
                    )}rem`,
                  }}
                >
                  <h3 className="skill-cluster-title" id={`skill-${skillType.id}`}>
                    <span>{decodeHtml(skillType.title.rendered)}</span>
                  </h3>
                  <ul className="skill-cluster-list">
                    {skillType.acf.skills.map((skill, index) => (
                      <li
                        key={index}
                        style={{
                          "--skill-angle": `${(360 * index) / skillType.acf.skills.length}deg`,
                        }}
                      >
                        <span>{skill.skill}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))
            ) : (
              //Fallback if rest api failed to load
              <p>No skills found</p>
            )}
          </>
        ) : null}
      </div>
    </section>
  );
}

export default Skills;
