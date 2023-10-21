import { useEffect, useState } from "react";
import StatioSelector from "./StationSelector";

const MouseTrackingComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  let timeoutId;

  const showComponent = () => {
    setIsVisible(true);
    clearTimeout(timeoutId);
  };

  const hideComponent = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  };

  useEffect(() => {
    const stem = document.getElementById("stem");

    // Prevent mouse event propagation to the stem
    const handleMouseEnter = () => {
      setMenuVisible(true);
    };

    const handleMouseLeave = () => {
      setMenuVisible(false);
    };

    document.addEventListener("mousemove", showComponent);
    document.addEventListener("mouseleave", hideComponent);

    stem.addEventListener("mouseenter", handleMouseEnter);
    stem.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", showComponent);
      document.removeEventListener("mouseleave", hideComponent);

      stem.removeEventListener("mouseenter", handleMouseEnter);
      stem.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`${isVisible ? "block" : "hidden"} absolute h-screen w-screen flex justify-center items-center`}
    >
        <StatioSelector/>
    </div>
  );
};

export default MouseTrackingComponent;
