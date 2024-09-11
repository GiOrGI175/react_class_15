import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    console.log('hello world');
    setCount((count) => count + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>hello</button>
    </>
  );
}

export default App;
