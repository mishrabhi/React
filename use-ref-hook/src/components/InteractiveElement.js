import React, { useRef } from "react";

function InteractiveElement() {
  const divRef = useRef(null);

  const handleClick = () => {
    if (divRef.current) {
      divRef.current.style.backgroundColor = "lightblue";
    }
  };

  return (
    <div>
      <h1>Interactive DOM Element</h1>
      <div
        ref={divRef}
        onClick={handleClick}
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "lightgray",
          cursor: "pointer",
        }}
      >
        Click me to change my color!
      </div>
    </div>
  );
}

export default InteractiveElement;
