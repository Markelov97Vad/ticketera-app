import { Link, useLocation } from 'react-router-dom';
import styles from './Logo.module.scss';
import HeaderLogoIcon from '../icons/HeaderLogoIcon';
import { storeRoutes } from '@packages/shared/src/routes/store';

function Logo() {
  const { pathname } = useLocation();

  const reloadPage = () => {
    if (pathname === storeRoutes.main) {
      window.location.reload();
    } else {
      return;
    }
  };

  return (
    <Link to="/store" className={styles.logo} onClick={reloadPage}>
      <HeaderLogoIcon />
      <p className={styles['logo__text']}>TICKETERA</p>
    </Link>
  );
}

export default Logo;
