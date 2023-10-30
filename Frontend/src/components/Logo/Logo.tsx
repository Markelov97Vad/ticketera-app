import { Link, useLocation } from "react-router-dom";
import headerLogo from "../../assets/images/header-logo.svg";
import styles from './Logo.module.scss';

function Logo() {
  const { pathname } = useLocation();

  const reloadPage = () => {
    if (pathname === "/") {
      window.location.reload();
    } else {
      return;
    }
  };

  return (
    <Link to="/" className={styles.logo} onClick={reloadPage}>
      <img loading="eager" src={headerLogo} alt="Лого проекта" className={styles['logo__image']} />
      <p className={styles['logo__text']}>TICKETERA</p>
    </Link>
  );
}

export default Logo;
