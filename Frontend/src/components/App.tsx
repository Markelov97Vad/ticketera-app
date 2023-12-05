import { useState } from "react";
import './App.scss';


function App() {
  const [state, setState] = useState(0);
  return (
    <>
      <h1>TICKETERA</h1>
      <button type="button" onClick={() => setState(state + 2)}>{state}</button>
    </>
  );
}

export default App;