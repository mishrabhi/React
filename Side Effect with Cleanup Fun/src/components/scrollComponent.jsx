import React, { useState, useEffect } from "react";

const ScrollComponent = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    //Function to handle scroll position
    const handleScroll = () => {
      console.log(window.scrollY);
      setScroll(window.scrollY);
    };

    //Adding event-listener when the component mounts
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []); //empty dependency array to run the effect once on mount

  return (
    <div style={{ height: "150vh", paddingTop: "20px" }}>
      <h1>Scroll Position: {scroll}px</h1>
      <p>Scroll down to see the scroll position update</p>
    </div>
  );
};

export default ScrollComponent;
