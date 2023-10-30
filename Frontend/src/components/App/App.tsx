import { Route, Routes } from 'react-router-dom';
import MainPage from '../page/MainPage/mainPage';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.App}>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
      </Routes>
    </div>
  )
}

export default App
