import { useState } from 'react';
import './App.css';
import MyComponent from './componenta/MyComponent';

function App() {
  const [state, setState] = useState(false);

  const onClickhandler = () => {
    setState((perv) => !perv);
  };

  return (
    <>
      <h1>hello</h1>
      <button onClick={onClickhandler}>Click me</button>
      {state && <MyComponent />}
    </>
  );
}

export default App;
