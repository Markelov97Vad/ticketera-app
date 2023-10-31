import Calendar from "../../Calendar/Calendar";
import Header from "../../Header/Header";
import styles from './MainPage.module.scss';

function MainPage() {
  return (
    <>
    <Header/>
    <main className={styles['main-page']}>
      <h1 className={styles['main-page__title']}>Афиша</h1>
      <Calendar/>
    </main>
    </>
  );
}

export default MainPage;