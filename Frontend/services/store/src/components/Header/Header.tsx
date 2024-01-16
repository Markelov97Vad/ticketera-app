import { useState } from 'react';
import styles from './Header.module.scss';
import { categoryData } from '../../utils/data';
import CategoryTab from './CategoryTab/CategoryTab';
import Logo from '../Logo/Logo';
import Button from '../Ui/Buttons/Button/Button';
import ButtonSearch from '../Ui/Buttons/ButtonSearch/ButtonSearch';
import ButtonProfile from '../Ui/Buttons/ButtonsProfile/ButtonProfile';

// type HeaderProps = {
//   isActivePopupCity: boolean;
//   setIsActivePopupCity: boolean;
//   currentCity: string[];
// }

const Header = () => {
	// const {setType} = usePopupContext();
	const currentCityStorage = localStorage.getItem('currentCity');
	// const {isLoggedIn} = useUserContext();
	const isLoggedIn = true;
	// const navigate = useNavigate();
	// const { pathname } = useLocation();
	const [isActivePopupCity, setIsActivePopupCity] = useState(false);
	const [currentCity] = useState('Москва');

	const handleClick = () => {
		// setType('login')
	};
	const handleHavigate = () => {
		// navigate("/personal-account/favourites");
	};

	return (
		<header className={styles.header}>
			<div className={styles.header__box}>
				<Logo />
				<p
					onClick={() => setIsActivePopupCity(!isActivePopupCity)}
					className={styles[`header__box-location`]}
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
