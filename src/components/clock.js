import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Clock = () => {
    
  const [currentTime, setCurrentTime] = useState(moment());

    useEffect(() => {
      const interval = setInterval(() => {  
        setCurrentTime(moment());
     }, 1000);
  
      return () => clearInterval(interval);
 }, []);
  
    return <div className="clock">{currentTime.format('h:mm:ss')}</div>;
  };
  
  export default Clock;

 