import { useState, useEffect, useRef } from "react";

function Slider({ children, targetSubClass }) {
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const sliderRef = useRef(null);
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
    const slider = sliderRef.current;
    if (isPaused || prefersReducedMotion || !slider) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      const cards = Array.from(slider.querySelectorAll(`.${targetSubClass}`));
      if (cards.length < 2) return;

      const sliderCenter =
        slider.getBoundingClientRect().left + slider.clientWidth / 2;
      const currentIndex = cards.reduce((closestIndex, card, index) => {
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
      }, 0);
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
  }, [isPaused]);

  return (
    <section
      className="slider"
      ref={sliderRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={ () => setIsHovered(false)}
    >
      {children}
    </section>
  );
}

export default Slider;
