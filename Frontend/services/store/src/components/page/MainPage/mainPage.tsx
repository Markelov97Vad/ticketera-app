import Calendar from "../../Calendar/Calendar";
import EventCards from "../../EventCards/EventCards";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import MainFrame from "../../MainFrame/MainFrame";
import Title from "../../Title/Title";
import styles from './MainPage.module.scss';

function MainPage() {
  return (
    <>
    <Header/>
    <main className={styles['main-page']}>
      {/* <h1 className={styles['main-page__title']}>Афиша</h1> */}
      <Title text="Афиша"/>
      <Calendar/>
      <MainFrame/>
      <EventCards/>
    </main>
    <Footer />
    </>
  );
}

export default MainPage;