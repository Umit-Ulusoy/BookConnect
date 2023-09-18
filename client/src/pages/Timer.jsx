import React, { useState, useEffect } from "react";
import axios from "axios";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [isCancelled, setIsCancelled] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning && !isPaused) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isPaused, isRunning]);

  useEffect(() => {
    let saveIntervalId;

    if (isRunning && !isPaused) {
      saveIntervalId = setInterval(() => {
        saveTimeToDatabase();
      }, 10000);
    } else {
      clearInterval(saveIntervalId);
    }

    return () => {
      clearInterval(saveIntervalId);
    };
  }, [isPaused, isRunning]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600).toString().padStart(2, "0");
    const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, "0");
    const remainingSeconds = (seconds % 60).toString().padStart(2, "0");
    return `${hours}:${minutes}:${remainingSeconds}`;
  };

  const handleStart = () => {
    setIsRunning(true);
    setIsPaused(false);
    setIsCancelled(false);
  };

  const handleStop = () => {
    setIsRunning(false);
    setIsCompleted(true);
    saveTimeToDatabase();
  };

  const handlePause = () => {
    if (isRunning) {
      setIsPaused(true);
    }
  };

  const handleResume = () => {
    if (isRunning) {
      setIsPaused(false);
    }
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
    setIsPaused(true);
    setIsCancelled(true);
    setIsCompleted(false);
  };

  const saveTimeToDatabase = () => {
    axios
      .post("/api/saveTime", { time })
      .then((response) => {
       citonsole.log(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div 
      className="timer-container ">
    <div 
      className="timer-display" aria-live="polite">
      <time>{formatTime(time)}</time>
    </div>
    <div className="timer-controls">
      {isCompleted ? (
        <button onClick={handleReset} aria-label="Sıfırla">
          Sıfırla
        </button>
      ) : (
        <>
          {isCancelled ? (
            <>
              <button onClick={handleStart} aria-label="Başlat">
                Başlat
              </button>
              <button
                onClick={handlePause}
                disabled={!isRunning}
                aria-label="Duraklat"
              >
                Duraklat
              </button>
            </>
          ) : (
            <>
              {isRunning ? (
                <>
                  <button onClick={handleStop} aria-label="Durdur">
                    Durdur
                  </button>
                  <button onClick={handlePause} aria-label="Duraklat">
                    Duraklat
                  </button>
                  <button onClick={handleResume} aria-label="Devam Et">
                    Devam Et
                  </button>
                </>
              ) : (
                <>
                  <button onClick={handleStart} aria-label="Başlat">
                    Başlat
                  </button>
                  <button
                    onClick={handlePause}
                    disabled={!isRunning || isPaused}
                    aria-label="Duraklat"
                  >
                    Duraklat
                  </button>
                </>
              )}
            </>
          )}
        </>
      )}
    </div>
  </div>
  )}
  export default Timer;