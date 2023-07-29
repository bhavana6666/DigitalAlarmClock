import React, { useState } from 'react';
import { TiDelete } from 'react-icons/ti';
import moment from  'moment';

const Alarm = ({ alarms, setAlarms }) => {
  const [alarmTime, setAlarmTime] = useState(moment().format('HH:mm'));

  const handleAddAlarm = () => {
    if (!alarms.includes(alarmTime)) {
      setAlarms([...alarms, alarmTime]);
    }
  };

  const handleDeleteAlarm = (alarm) => {
    setAlarms(alarms.filter((time) => time !== alarm));
  };

return (
    <div className="alarm">
      <input className='txt'
        type="time"
        value={alarmTime}
       onChange={(e) => setAlarmTime(e.target.value)}
      />
      <button className='btn' onClick={handleAddAlarm}>AddAlarm</button>
    <ul>
        {alarms.map((alarm, index) => (
          <li key={index}>
     {alarm}
            <span onClick={() => handleAddAlarm(alarm)}>
            <TiDelete />
            </span>
          </li>
        ))}
 </ul>
 </div>
);
        };
export default Alarm;