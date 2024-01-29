import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

type ButtonProps = {
  children?: JSX.Element | string;
  primary?: boolean;
  primaryOutlined?: boolean;
  disabled?: boolean;
  light?: boolean;
  lightOutlined?: boolean;
  dark?: boolean;
  darkOutlined?: boolean;
  grayOutlined?: boolean;
  gradient?: boolean;
  type: 'submit' | 'link' | 'button';
  url?: string;
  additionalClass?: string;
  onClick?: () => void;
};

const Button = ({
  children,
  primary,
  primaryOutlined,
  disabled,
  light,
  lightOutlined,
  dark,
  darkOutlined,
  grayOutlined,
  gradient,
  type,
  url,
  additionalClass,
  onClick,
}: ButtonProps) => {
  const stylesData = [
    primary ? styles.button_type_primary : null,
    primaryOutlined ? styles['button_type_primary-outlined'] : null,
    disabled ? styles.button_type_disabled : null,
    light ? styles.button_type_light : null,
    lightOutlined ? styles['button_type_light-outlined'] : null,
    dark ? styles.button_type_dark : null,
    darkOutlined ? styles['button_type_dark-outlined'] : null,
    grayOutlined ? styles['button_type_gray-outlined'] : null,
    gradient ? styles.button_type_gradient : null,
  ];
  const style = stylesData.filter(style => style !== null);
  const styleString = style.join(' ');

  switch (type) {
    case 'link':
      return (
        <Link
          to={url as string}
          className={`button ${styleString} ${
            additionalClass ? additionalClass : ''
          }`}
          // disabled={disabled}
          onClick={onClick}
        >
          {children}
        </Link>
      );
    case 'submit':
      return (
        <button
          type="submit"
          className={`button ${styleString} ${
            additionalClass ? additionalClass : ''
          }`}
          disabled={disabled}
        >
          {children}
        </button>
      );
    case 'button':
      return (
        <button
          type="button"
          className={`button ${styleString} ${
            additionalClass ? additionalClass : ''
          }`}
          disabled={disabled}
          onClick={onClick}
        >
          {children}
        </button>
      );
    default:
      return (
        <button
          type="button"
          className={`button ${styleString} ${
            additionalClass ? additionalClass : ''
          }`}
          disabled={disabled}
          onClick={onClick}
        >
          {children}
        </button>
      );
  }
};

export default Button;
