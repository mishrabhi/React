import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const initialMinutes = 1; //Set the initial timer duration (in minutes)
  const initialSeconds = 0; //Set the initial timer seconds

  const [time, setTime] = useState({
    minutes: initialMinutes,
    seconds: initialSeconds,
  });

  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Function to format time display as MM:SS
  const formatTime = () => {
    const { minutes, seconds } = time;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  //Start or Resume the timer
  const startTimer = () => {
    if (!isActive || isPaused) {
      setIsActive(true);
      setIsPaused(false);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          const { minutes, seconds } = prevTime;
          if (seconds > 0) {
            return { minutes, seconds: seconds - 1 };
          } else if (minutes > 0) {
            return { minutes: minutes - 1, seconds: 59 };
          } else {
            clearInterval(intervalRef.current);
            return { minutes: 0, seconds: 0 };
          }
        });
      }, 1000);
    }
  };

  //Pause the timer
  const pauseTimer = () => {
    clearInterval(intervalRef.current);
    setIsPaused(true);
  };

  //Reset the timer to initial value
  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTime({
      minutes: initialMinutes,
      seconds: initialSeconds,
    });
  };

  //Clear the interval when component unmounts
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="container">
      <h2>Timer</h2>
      <div className="timerDisplay">{formatTime()}</div>
      <div className="buttonGroup">
        <button onClick={startTimer} disabled={isActive && !isPaused}>
          Start
        </button>
        <button onClick={pauseTimer} disabled={isActive || isPaused}>
          Pause
        </button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
