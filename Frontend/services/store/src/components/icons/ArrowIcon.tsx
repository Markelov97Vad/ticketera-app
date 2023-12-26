type ArrowIconProps = {
  direction: 'left' | 'right'
}

function ArrowIcon({ direction }: ArrowIconProps) {

  const handleDirection = (direction: string) => {
    switch (direction) {
      case 'right':
        return <path d="M12.9668 9.5L18.9337 15.4669L12.9668 21.4337" stroke="#4C4F52" />;
      case 'left':
        return <path d="M17.0332 21.5L11.0664 15.5331L17.0332 9.56629" stroke="#4C4F52"/>;

      default:
        return <path d="M17.0332 21.5L11.0664 15.5331L17.0332 9.56629" stroke="#4C4F52"/>;
    }
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="31"
      viewBox="0 0 30 31"
      fill="none"
    >
      <circle cx="15" cy="15.5" r="14.5" stroke="#4C4F52" />
      {handleDirection(direction)}
    </svg>
  );
}

export default ArrowIcon;