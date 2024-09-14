import React, { useRef, useState } from "react";

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
};
