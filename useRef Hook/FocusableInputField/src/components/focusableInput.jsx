import React, { useRef, useEffect } from "react";

const AutoFocusUncontrolledInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleInputChange = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <h2>Auto-Focus Uncontrolled Input Field</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type here.."
        onChange={handleInputChange}
      />
    </div>
  );
};

export default AutoFocusUncontrolledInput;
