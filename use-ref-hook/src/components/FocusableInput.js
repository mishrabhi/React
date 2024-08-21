import React, { useRef, useEffect } from "react";

//creating a focusable input field
function FocusableInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <h1>Focusable Input Field</h1>
      <input ref={inputRef} type="text" placeholder="Focus on me!" />
    </div>
  );
}

export default FocusableInput;
