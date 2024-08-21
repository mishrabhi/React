import React, { useRef } from "react";

//Managing uncontrolled components
function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleInputChange = () => {
    if (inputRef.current) {
      console.log(inputRef.current.value);
    }
  };

  return (
    <div>
      <h1>Uncontrolled Input Field</h1>
      <input
        ref={inputRef}
        type="text"
        onChange={handleInputChange}
        placeholder="Type something.."
      />
      <p>Current Value: {inputRef.current ? inputRef.current.value : ""}</p>
    </div>
  );
}

export default UncontrolledInput;
