import React, { useState, useEffect } from "react";

const TimerComponent = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    //set the timer when component mount
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000); //update evry 1 second

    //Cleanup function to clear the timer
    return () => {
      clearInterval(timer);
    };
  }, []); //Empty dependecy array => useEffect will run only once

  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
    </div>
  );
};

export default TimerComponent;
