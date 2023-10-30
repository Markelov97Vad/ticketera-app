
type ButtonLikeProps = {
  extraClass: string,
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
      className={`button-like ${isActive ? 'button-like_active' : ''} ${extraClass}`} 
      onClick={handleLike}
    >
    </button>
   );
}

export default ButtonLike;