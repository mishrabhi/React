import React, { useRef, useState } from "react";

const OtpInput = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputRefs = useRef([]);

  const handleInputChange = (e, index) => {
    const value = e.target.value;

    // Allow only numbers and limit the input to one character
    if (!isNaN(value) && value !== "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Automatically move to the next input
      if (index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  //handling Backspace
  const handleBackspace = (e, index) => {
    // console.log(e.key, otp[index]);
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  //handle Paste
  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData("text").split("").slice(0, 6);
    const newOtp = [...otp];

    pasteData.forEach((char, i) => {
      if (!isNaN(char)) {
        newOtp[i] = char;
        if (i < 5) inputRefs.current[i + 1].focus();
      }
    });

    setOtp(newOtp);
  };

  //handle Submit
  const handleSubmit = () => {
    console.log("OTP submitted:", otp.join(""));
  };

  return (
    <div className="otp-container">
      <div className="otp-inputs" onPaste={handlePaste}>
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleInputChange(e, index)}
            onKeyDown={(e) => handleBackspace(e, index)}
            ref={(el) => (inputRefs.current[index] = el)}
          />
        ))}
      </div>
      <button
        onClick={handleSubmit}
        disabled={otp.includes("")}
        className="subkit-btn"
      >
        Submit
      </button>
    </div>
  );
};

export default OtpInput;
