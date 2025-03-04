import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { BackButton } from "../components/Buttons";
import { Lables } from "../constants";

const CountdownTimer: React.FC = () => {
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<any>(null);

  const totalTimeInSeconds = () => {
    return hours * 3600 + minutes * 60 + seconds;
  };

  const formatTime = (time: number): string => {
    const h = Math.floor(time / 3600);
    const m = Math.floor((time % 3600) / 60);
    const s = time % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  const handleStart = () => {
    const totalTime = totalTimeInSeconds();
    setTimeLeft(totalTime);
    setIsRunning(true);
  };

  const handlePause = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    setIsRunning(false);
  };

  const handleResume = () => {
    setIsRunning(true);
  };

  const handleReset = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    setIsRunning(false);
    setTimeLeft(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      const id = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(id);
            setIsRunning(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
      setIntervalId(id);
    } else {
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning, timeLeft, intervalId]);

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<number>>) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = Number(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setter(value);
    }
  };

  return (
    <div className="  flex flex-col justify-start items-center gap-4 mt-10 ">
      <h1 className="text-blue-600 text-xl">Countdown Timer</h1>
      <div className="flex flex-row justify-center items-center gap-5">
        <input
          type="number"
          value={hours}
          onChange={handleInputChange(setHours)}
          min={0}
          className="h-10 w-20 border-2 text-blue-600 border-blue-400 outline-none rounded p-1"
          placeholder="HH"
        />
        <input
          type="number"
          value={minutes}
          onChange={handleInputChange(setMinutes)}
          min={0}
          max={59}
          className="h-10 w-20 border-2 text-blue-600 border-blue-400 outline-none rounded p-1"
          placeholder="MM"
        />
        <input
          type="number"
          value={seconds}
          onChange={handleInputChange(setSeconds)}
          min={0}
          max={59}
          className="h-10 w-20 border-2 text-blue-600 border-blue-400 outline-none rounded p-1"
          placeholder="SS"
        />
      </div>
      <div className="flex flex-row justify-center items-center gap-5 mt-4">
        <div className="text-2xl font-semibold text-blue-600">
          {formatTime(timeLeft)}
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-4 mt-4">
        {!isRunning ? (
          <Button variant="contained" className="h-10" onClick={handleStart}>
            {Lables.START_BUTTON}
          </Button>
        ) : (
          <>
            <Button
              variant="contained"
              className="h-10"
              onClick={handlePause}
            >
              {Lables.PAUSE_BUTTON}
            </Button>
            <Button
              variant="contained"
              className="h-10"
              onClick={handleResume}
            >
              {Lables.RESUME_BUTTON}
            </Button>
          </>
        )}
        <Button variant="contained" className="h-10" onClick={handleReset}>
          {Lables.RESET_BUTTON}
        </Button>
      </div>
    
    </div>
  );
};

export default CountdownTimer;
