import LikeActiveIcon from '../../../icons/LikeActiveIcon';
import LikeDisabledIcon from '../../../icons/LikeDisabledIcon';
import styles from './ButtonLike.module.scss'

type ButtonLikeProps = {
  extraClass?: string,
  isActive: boolean,
  handleLike: () => void 
}

function ButtonLike({ 
  extraClass,
  isActive,
  handleLike
}: ButtonLikeProps) {

  return ( 
    <button 
      type='button' 
      className={`${styles["button-like"]} ${extraClass}`} 
      onClick={handleLike}
    >
      {
        isActive ? <LikeActiveIcon/> : <LikeDisabledIcon/>
      }
    </button>
   );
}

export default ButtonLike;