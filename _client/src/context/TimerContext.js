// TimerContext.js
import React, { createContext, useState, useEffect } from 'react';

const TimerContext = createContext();

const TimerProvider = ({ children }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup the interval when the component unmounts
  }, []);

  return (
    <TimerContext.Provider value={{ time }}>
      {children}
    </TimerContext.Provider>
  );
};

export { TimerContext, TimerProvider };
