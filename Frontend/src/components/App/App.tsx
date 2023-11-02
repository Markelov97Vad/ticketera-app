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
      </Routes>
    </div>
  )
}

export default App
