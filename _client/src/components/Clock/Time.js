import React, { useEffect, useState, useContext } from 'react';
import "./Time.css";
import useInterval from '../../hooks/useInterval';
import { ClockController } from '../../utils/ClockController';
import { ApiContext } from '../../context/APIContext';

export const Clock = ({ counter }) => {
  const [time, setTime] = useState([]);
  const { userStyles } = useContext(ApiContext); 

  useEffect(() => {
    setTime(ClockController());
  }, [counter]);

  const clockStyle = {
    color: userStyles.TimeColor ,
    //fontSize: userStyles.clockFontSize || '1rem', // Use userStyles to set clock font size
    // Add more style properties based on your userStyles object
  };

  return (
    <div className='Time' style={clockStyle}>
      <p>{time.length && `${time[0]}:${time[1]}:${time[2]}`}</p>
    </div>
  );
};
