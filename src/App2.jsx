import React, { useState } from 'react';
import './App.css';

const App2 = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleLight = () => {
    setIsOn((perv) => !perv);
  };

  return (
    <div className={`container light_${isOn ? 'off' : 'on'}`}>
      <p>this light is {isOn ? 'ON' : 'OFF'}</p>
      <button onClick={toggleLight}>trun {isOn ? 'OFF' : 'ON'}</button>
    </div>
  );
};

export default App2;
