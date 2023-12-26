import ProfileIcon from "../../../icons/ProfileIcon";
import styles from './ButtonProfile.module.scss'

type ButtonProfileProps = {
  onClick?: () => void
}

function ButtonProfile({ onClick } : ButtonProfileProps) {
  return (
    <button className={styles['button-profile']} onClick={onClick} type="button">
      <ProfileIcon/>
    </button>
  );
}

export default ButtonProfile;