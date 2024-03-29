type PlaceIconProps = {
  size?: string;
  color: 'white' | 'gray' | 'violet';
};

function PlaceIcon({ size = '24', color }: PlaceIconProps) {
  const handleColor = (color: string) => {
    switch (color) {
      case 'white':
        return '#FFF';
      case 'gray':
        return '#4C4F52';
      case 'violet':
        return '#8B52F6';
      default:
        return '#FFF';
    }
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0002 12C13.565 12 14.8335 10.7315 14.8335 9.16673C14.8335 7.60198 13.565 6.3335 12.0002 6.3335C10.4355 6.3335 9.16699 7.60198 9.16699 9.16673C9.16699 10.7315 10.4355 12 12.0002 12Z"
        stroke={handleColor(color)}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0004 3.50049C15.1299 3.50049 17.6669 6.03745 17.6669 9.16695C17.6669 11.741 13.8334 18.1955 12.4727 20.2468C12.3677 20.405 12.1904 20.5002 12.0004 20.5002C11.8105 20.5002 11.6332 20.405 11.5282 20.2468C10.1675 18.1955 6.33398 11.741 6.33398 9.16695C6.33398 6.03745 8.87095 3.50049 12.0004 3.50049Z"
        stroke={handleColor(color)}
      />
    </svg>
  );
}

export default PlaceIcon;
