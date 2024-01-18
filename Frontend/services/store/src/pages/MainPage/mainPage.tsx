import Calendar from '../../components/Calendar/Calendar';
import EventCards from '../../components/EventCards/EventCards';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import MainFrame from '../../components/MainFrame/MainFrame';
import Title from '../../components/Title/Title';
import styles from './MainPage.module.scss';

function MainPage() {
  return (
    <div className={styles['main-page']}>
      <Header />
      <main className={styles['main-page__content']}>
        {/* <h1 className={styles['main-page__title']}>Афиша</h1> */}
        <Title text="Афиша" />
        <Calendar />
        <MainFrame />
        <EventCards />
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;
