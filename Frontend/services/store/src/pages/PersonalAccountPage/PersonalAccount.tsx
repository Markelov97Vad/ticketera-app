import { Link, Navigate, Outlet, useLocation } from 'react-router-dom';
// import "./PersonalAccount.css";
import LogoutIcon from '../../components/icons/LogoutIcon';
// import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';

// import crumbs from './crumbs.json'
import { tabData } from '../../utils/tabsData';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ScrollToTop from '../../utils/ScrollToTop';
import NavTab from './NavTab/NavTab';

function PersonalAccount() {
	const { pathname } = useLocation();
	// const { handleLogout, setIsLoggedIn, setCurrentUser } = useUserContext();

	if (pathname === '/personal-account' || pathname === '/personal-account/') {
		return <Navigate to="/personal-account/favourites" replace />;
	}

	const handleClickLogout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('isCityDefinedCorrectly');
		localStorage.removeItem('currentCity');

		// setIsLoggedIn(false);
		// handleLogout();
		// setCurrentUser({});
	};

	return (
		<>
			<ScrollToTop />
			<Header />
			<main className="account">
				<div className="account__wrapper">
					{/* <BreadCrumbs crumbs={crumbs}/> */}
					<div className="account__title-container">
						<h2 className="account__title">Личный кабинет</h2>
						<Link onClick={handleClickLogout} to="/" className="button-link">
							Выйти <LogoutIcon />
						</Link>
					</div>
					<div className="account__tabs">
						<nav>
							<ul className="account__tabs-list">
								{tabData.map((tabEl, index) => (
									<li key={index}>
										{/* <NavTab
                      link={tabEl.link}
                      text={tabEl.text}
                      // component={tabEl.svg}
                    /> */}
									</li>
								))}
							</ul>
						</nav>
					</div>
					<div className="account__content">
						<Outlet />
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default PersonalAccount;
