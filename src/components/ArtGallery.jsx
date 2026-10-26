import { useState, useEffect, useContext } from "react";
import { restBase } from "../utilities/Utilities";
import { LoadingContext } from "../context/LoadingContext";
import { decodeHtml } from "../utilities/functions";
import FeaturedImage from "../utilities/FeaturedImage";

function ArtGallery() {
  const restPath = restBase + "art-work?_embed=1";
  const [restData, setData] = useState([]);
  const [isLoaded, setLoadStatus] = useState(false);
  const [selectedArtIndex, setSelectedArtIndex] = useState(0);
  const { runWithLoading } = useContext(LoadingContext);

  useEffect(() => {
    const fetchData = async () => {
      await runWithLoading(async () => {
        const response = await fetch(restPath);
        if (response.ok) {
          const data = await response.json();
          setData(data);
          setSelectedArtIndex(0);
          setLoadStatus(true);
        } else {
          setLoadStatus(false);
        }
      });
    };
    fetchData();
  }, [restPath, runWithLoading]);

  const selectedArt = restData[selectedArtIndex];

  return (
    <section className="art-gallery" aria-label="Art gallery">
      {isLoaded &&
        (selectedArt ? (
          <>
            <div className="art-gallery-feature">
              <FeaturedImage
                className="art-gallery-main-image"
                featuredImageObject={
                  selectedArt._embedded["wp:featuredmedia"][0]
                }
              />
              <p className="art-gallery-description">
                {decodeHtml(selectedArt.acf.description)}
              </p>
            </div>
            <div className="art-gallery-thumbnails" aria-label="Choose artwork">
              {restData.map((art, index) => (
                <button
                  className={`art-gallery-thumbnail${
                    index === selectedArtIndex ? " is-selected" : ""
                  }`}
                  key={art.id}
                  type="button"
                  aria-label={`Show artwork ${index + 1}`}
                  aria-pressed={index === selectedArtIndex}
                  onClick={() => setSelectedArtIndex(index)}
                >
                  <FeaturedImage
                    className="art-gallery-thumbnail-image"
                    featuredImageObject={art._embedded["wp:featuredmedia"][0]}
                  />
                </button>
              ))}
            </div>
          </>
        ) : (
          <p>No art works found</p>
        ))}
    </section>
  );
}

export default ArtGallery;