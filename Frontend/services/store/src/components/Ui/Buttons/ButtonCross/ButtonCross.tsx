import styles from './ButtonCross.module.scss';

type ButtonCrossProps = {
  additionalClass: string;
  red?: boolean;
  black?: boolean;
  onClick: () => void;
};

function ButtonCross({
  additionalClass,
  red,
  black,
  onClick,
}: ButtonCrossProps) {
  const colors = [red ? 'red' : null, black ? 'black' : null];
  const color = colors.filter(color => color !== null);
  return (
    <button
      onClick={onClick}
      className={`${styles['button-cross']} ${additionalClass} ${
        styles[`button-cross_color_${color}`]
      }`}
      type="button"
    ></button>
  );
}

export default ButtonCross;
