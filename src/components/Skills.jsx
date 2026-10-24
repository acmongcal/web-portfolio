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
    <section className="window">
      <div className="titlebar">
        <h2>Skills</h2>
      </div>
      <div className="content">
        {isLoaded ? (
          <>
            {restData ? (
              restData.map((skillType) => (
                <article key={skillType.id}>
                  <h3 id={`skill-${skillType.id}`}>
                    {decodeHtml(skillType.title.rendered)}
                  </h3>
                  <ul>
                    {skillType.acf.skills.map((skill, index) => (
                      <li key={index}>{skill.skill}</li>
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
