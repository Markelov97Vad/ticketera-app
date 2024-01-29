import { useEffect } from 'react';
import Calendar from '../../components/Calendar/Calendar';
import EventCards from '../../components/EventCards/EventCards';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import MainFrame from '../../components/MainFrame/MainFrame';
import Title from '../../components/Title/Title';
import styles from './MainPage.module.scss';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { fetchEvents } from '@/store/event/api';

function MainPage() {
  const dispatch = useAppDispatch();
  const { events } = useAppSelector(state => state.event);
  useEffect(() => {
    dispatch(fetchEvents());
    console.log(events);
    
  }, []);
  return (
    <div className={styles['main-page']}>
      <Header />
      <main className={styles['main-page__content']}>
        {/* <h1 className={styles['main-page__title']}>Афиша</h1> */}
        <Title text="Афиша" />
        <Calendar />
        <MainFrame eventData={events[0]} />
        <EventCards />
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;
