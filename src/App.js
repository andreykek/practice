import React, { useState, useEffect } from "react";
import alarmSound from "./alarmSound.wav";

const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const audio = new Audio(alarmSound);

  useEffect(() => {
    if (isFinished) {
      audio.play();
      document.body.style.backgroundColor = "red";
    } else {
      audio.pause();
      document.body.style.backgroundColor = "white";
    }
  }, [isFinished]);

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsFinished(false);
    setMinutes(0);
    setSeconds(0);
    document.body.style.backgroundColor = "white";
  };

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            setIsFinished(true);
            setIsActive(false);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  const padZero = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div>
      <div>
        <input
          type="number"
          value={minutes}
          disabled={isActive}
          onChange={(e) => setMinutes(parseInt(e.target.value))}
        />
        :
        <input
          type="number"
          value={seconds}
          disabled={isActive}
          onChange={(e) => setSeconds(parseInt(e.target.value))}
        />
      </div>
      <div>
        <button onClick={startTimer} disabled={isActive || (minutes === 0 && seconds === 0)}>
          Start
        </button>
        <button onClick={stopTimer} disabled={!isActive}>
          Stop
        </button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;