import React, { useState } from 'react';
import './App.css';
import Clock from './components/clock';
import Alarm from './components/alaram';

function App(){
  const [alarms,setAlarms] = useState([]);
return (
<div className='App'>
<h1 className='alar'>Digital Alarm Clock</h1>
      <Clock/>
      <Alarm alarms={alarms} setAlarms={setAlarms} />
  </div>
  );
}

export default App;