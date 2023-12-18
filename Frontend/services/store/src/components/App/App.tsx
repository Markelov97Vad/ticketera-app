import { Suspense, useState } from "react";
import styles from './App.module.scss';
import { Outlet, useNavigate } from "react-router-dom";

function App() {
  const [state, setState] = useState(0);
  const navigate = useNavigate()

  return (
    <>
      <h1 data-testid={'title'} className={styles.title}>TICKETERA module</h1>
      {__PLATFORM__ === 'desktop' && <p>Desktop === {__PLATFORM__}</p>}
      {__PLATFORM__ === 'mobile' && <p>Mobile === {__PLATFORM__}</p>}
      <button data-testid={'Button.test'} type="button" onClick={() => setState(state + 2)}>{state}</button>
      <button type="button" onClick={() => navigate('/store/about')}>to About</button>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Outlet/>
      </Suspense>
    </>
  );
}

export default App;