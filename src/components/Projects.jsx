import { useState, useEffect, useContext, useRef } from "react";
import { restBase } from "../utilities/Utilities";
import { LoadingContext } from "../context/LoadingContext";
import ProjectCard from "./ProjectCard";
function Projects({ limit, filter }) {
  const restPath = restBase + "project?_embed=1";
  const [restData, setData] = useState([]);
  const [isLoaded, setLoadStatus] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const sliderRef = useRef(null);
  const { runWithLoading } = useContext(LoadingContext);
  const isPaused = isHovered || prefersReducedMotion;

  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const updateMotionPreference = (event) => {
      setPrefersReducedMotion(event.matches);
    };

    updateMotionPreference(motionPreference);
    motionPreference.addEventListener("change", updateMotionPreference);
    return () => {
      motionPreference.removeEventListener("change", updateMotionPreference);
    };
  }, []);

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

  useEffect(() => {
    const slider = sliderRef.current;
    if (!limit || !isLoaded || isPaused || prefersReducedMotion || !slider) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      const cards = Array.from(slider.querySelectorAll(".project-card"));
      if (cards.length < 2) return;

      const sliderCenter =
        slider.getBoundingClientRect().left + slider.clientWidth / 2;
      const currentIndex = cards.reduce(
        (closestIndex, card, index) => {
          const closestDistance = Math.abs(
            cards[closestIndex].getBoundingClientRect().left +
              cards[closestIndex].getBoundingClientRect().width / 2 -
              sliderCenter,
          );
          const distance = Math.abs(
            card.getBoundingClientRect().left +
              card.getBoundingClientRect().width / 2 -
              sliderCenter,
          );
          return distance < closestDistance ? index : closestIndex;
        },
        0,
      );
      const nextCard = cards[(currentIndex + 1) % cards.length];
      const nextCardRect = nextCard.getBoundingClientRect();
      const nextScrollLeft =
        slider.scrollLeft +
        nextCardRect.left -
        slider.getBoundingClientRect().left -
        (slider.clientWidth - nextCardRect.width) / 2;

      slider.scrollTo({ left: nextScrollLeft, behavior: "smooth" });
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [isLoaded, isPaused, limit, restData]);

  return (
    <section
      className={limit ? "slider" : ""}
      ref={limit ? sliderRef : null}
      onMouseEnter={limit ? () => setIsHovered(true) : undefined}
      onMouseLeave={limit ? () => setIsHovered(false) : undefined}
    >
      {isLoaded ? (
        <>
          {limit ? (
            <>
              <h2>Featured Projects</h2>
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
            </>
          ) : (
            <>
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
            </>
          )}
        </>
      ) : null}
    </section>
  );
}

export default Projects;
