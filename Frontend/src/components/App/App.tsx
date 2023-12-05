import { Route, Routes } from 'react-router-dom';
import MainPage from '../page/MainPage/MainPage';
import style from './App.module.scss';
import EventPage from '../EventPage/EventPage';

function App() {
  
  return (
    <div className={style.App}>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/event' element={<EventPage/>}/>
        {/* <Route path='/personal-account' element{<></>} /> */}
      </Routes>
    </div>
  )
}

export default App
