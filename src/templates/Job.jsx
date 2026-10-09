import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../utilities/Loading";
import { restBase } from "../utilities/Utilities";
import FeaturedImage from "../utilities/FeaturedImage";

const Job = () => {
  const { slug } = useParams();
  const restPath = restBase + `fwd-job-posting?slug=${slug}&_embed=1`;
  const [restData, setData] = useState([]);
  const [isLoaded, setLoadStatus] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(restPath);
      if (response.ok) {
        const data = await response.json();
        setData(data[0]);
        setLoadStatus(true);
      } else {
        setLoadStatus(false);
      }
    };
    fetchData();
  }, [restPath]);
  
  return (
    <>
      {isLoaded ? (
        <>
          <title>{`${restData.title.rendered} | Mindset Headless`}</title>
          <article id={`job-${restData.id}`}>
            <h1>{restData.title.rendered}</h1>
            <div
              className="entry-content"
              dangerouslySetInnerHTML={{ __html: restData.content.rendered }}
            ></div>
          </article>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Job;
