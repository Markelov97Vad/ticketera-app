import { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import { categoryData } from '../../utils/data';
import CategoryTab from './CategoryTab/CategoryTab';
import Logo from '../Logo/Logo';
import Button from '../Ui/Buttons/Button/Button';
import ButtonSearch from '../Ui/Buttons/ButtonSearch/ButtonSearch';
import ButtonProfile from '../Ui/Buttons/ButtonsProfile/ButtonProfile';
import { useNavigate } from 'react-router-dom';
import { storeRoutes } from '@packages/shared/src/routes/store';
import { useSelector } from 'react-redux';
import { useAppSelector, useAppDispatch } from '@/hooks/reduxHooks';
// импорт события
import eventSlice from '../../store/event/eventSlice';
import { RootState } from '@/store';
import { fetchEvents } from '@/store/event/api';

// type HeaderProps = {
//   isActivePopupCity: boolean;
//   setIsActivePopupCity: boolean;
//   currentCity: string[];
// }

const Header: React.FC = () => {
  // const {setType} = usePopupContext();
  const currentCityStorage = localStorage.getItem('currentCity');
  // const {isLoggedIn} = useUserContext();
  const isLoggedIn = true;
  const navigate = useNavigate();
  // const { pathname } = useLocation();
  const [isActivePopupCity, setIsActivePopupCity] = useState<boolean>(false);
  const [currentCity] = useState('Москва');
  //
  const { events } = useAppSelector(state => state.event);
  // const event = useSelector((state: RootState) => state.event.events);
  // функция (триггер) сообщает о событии, которое нужно передать в редьюсер
  const dispatch = useAppDispatch();

  const handleClick = () => {
    // setType('login')
  };
  const handleHavigate = (): void => {
    navigate(storeRoutes.personalAccount.myTickets);
  };

  useEffect(() => {
    dispatch(fetchEvents());
    console.log(events);
  }, []);

  return (
    <header className={`${styles.header} ${styles['main-page__header']}`}>
      <div className={styles.header__box}>
        <Logo />
        <p
          onClick={() => setIsActivePopupCity(!isActivePopupCity)}
          className={styles['header__box-location']}
        >
          г. {currentCityStorage ? currentCityStorage : currentCity}
        </p>
        <div className={styles['header__search']}>
          <input
            type="text"
            placeholder="Поиск площадки, события, исполнителя"
            minLength={1}
            maxLength={100}
            className={styles['header__search-input']}
          />
          <ButtonSearch extraClass={styles['header__search-button']} />
        </div>
        {isLoggedIn ? (
          <ButtonProfile onClick={handleHavigate} />
        ) : (
          <Button
            onClick={handleClick}
            type={'button'}
            gradient={true}
            additionalClass="header__button_signin"
          >
            Войти
          </Button>
        )}
      </div>
      <div className={styles.header__buttons}>
        {categoryData.map((item, i) => (
          <CategoryTab key={i} icon={item.icon} text={item.text} />
        ))}
      </div>
    </header>
  );
};

export default Header;
