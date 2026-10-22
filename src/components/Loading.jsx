import { useEffect, useRef } from "react";
import { randomIntScale, between } from "../utilities/functions";
function Loading() {
  const loaderRef = useRef(null);

  useEffect(() => {
    const loader = loaderRef.current;
    if (!loader) return undefined;

    const circles = [];
    for (let i = 0; i < 30; i++) {
      let size = randomIntScale(50, 1000);
      const borderOpt = randomIntScale(1, 4);

      const circle = document.createElement("div");
      circle.classList.add("line_custom", "circle-line");

      if (between(size, size - 5, size + 5)) {
        size += 100;
      }

      circle.style.width = size + "px";
      circle.style.height = size + "px";
      circle.style.animationDuration = randomIntScale(20, 50) + "s";

      switch (borderOpt) {
        case 1:
          circle.style.borderTopColor = "transparent";
          break;
        case 2:
          circle.style.borderRightColor = "transparent";
          break;
        case 3:
          circle.style.borderBottomColor = "transparent";
          break;
        case 4:
          circle.style.borderLeftColor = "transparent";
          break;
      }
      loader.appendChild(circle);
      circles.push(circle);
    }

    return () => circles.forEach((circle) => circle.remove());
  }, []);
  return (
    <section className="loading-bg" ref={loaderRef} role="status" aria-label="Loading">
      <div className="line1 circle-line"></div>
      <div className="line2 circle-line"></div>
      <div className="line3 circle-line"></div>
    </section>
  );
}

export default Loading;
