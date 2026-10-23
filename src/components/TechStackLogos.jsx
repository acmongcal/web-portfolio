import { useState, useEffect, useContext } from "react";
import { restBase } from "../utilities/Utilities";
import { LoadingContext } from "../context/LoadingContext";
import FeaturedImage from "../utilities/FeaturedImage";

function TechStackLogos({ embed }) {
  const restPath = restBase + "tech-stack?_embed=1&per_page=100";
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
    <section className="home-techstack">
      {isLoaded ? (
        <>
          {restData
            ? restData.map((techstack, index) => (
                <FeaturedImage
                  key={index}
                  id={`techstack-${techstack.id}`}
                  className={"techstack-logo"}
                  featuredImageObject={
                    techstack._embedded["wp:featuredmedia"][0]
                  }
                />
              ))
            : //Fallback if rest api failed to load
              null}
        </>
      ) : null}
    </section>
  );
}

export default TechStackLogos;
