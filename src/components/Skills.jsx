import { useState, useEffect } from "react";
import Loading from "../utilities/Loading";
import { restBase } from "../utilities/Utilities";
import { decodeHtml } from "../utilities/functions";
function Skills() {
  const restPath = restBase + "skill-type?_embed=1";
  const [restData, setData] = useState([]);
  const [isLoaded, setLoadStatus] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(restPath);
      if (response.ok) {
        const data = await response.json();
        setData(data);
        setLoadStatus(true);
      } else {
        setLoadStatus(false);
      }
    };
    fetchData();
  }, [restPath]);
  return (
    <section>
      {isLoaded ? (
        <>
          <h2>Skills</h2>
          {restData ? (
            restData.map((skillType, index) => (
              <article>
                <h3 key={index} id={`skill-${skillType.id}`}>
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
      ) : (
        <Loading />
      )}
    </section>
  );
}

export default Skills;
