import React, { useRef } from "react";

const ChangeBackground = () => {
  const divRef = useRef(null);

  const handleDivClick = () => {
    divRef.current.style.backgroundColor =
      divRef.current.style.backgroundColor === "yellow"
        ? "lightblue"
        : "yellow";
  };

  return (
    <div>
      <h2>Click to change background color</h2>
      <div
        ref={divRef}
        onClick={handleDivClick}
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: "lightblue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        Click Me!
      </div>
    </div>
  );
};

export default ChangeBackground;
