import React, { useState, useEffect } from "react";
import "./styles/Timer.css";

const Timer = ({
  isRunning,
  onTimeUpdate,
  startTime,
  stopTime,
  isPaused,
  initialTime = 0,
  isFixedTime = 0,
}) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (!isFixedTime) {
      let interval;
      if (isRunning && startTime) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 1);
        }, 1000);
      } else if (!isRunning && time !== 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    } else {
      setTime(isFixedTime);
    }
  }, [isRunning, time, isFixedTime, startTime]);

  useEffect(() => {
    onTimeUpdate(time);
  }, [time, onTimeUpdate]);

  const formatTime = (seconds) => {
    if (!startTime) return "00:00";  // Show 00:00 if startTime is not provided
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}`;
  };

  const getIndicatorClassName = () => {
    if (stopTime) return "indicator red";
    if (isPaused) return "indicator yellow";
    if (startTime) return "indicator green";
    return "indicator gray";
  };

  const indicatorClassName = getIndicatorClassName();

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <span className={indicatorClassName}></span>
      <span>{formatTime(time)}</span>
    </div>
  );
};

export default Timer;
