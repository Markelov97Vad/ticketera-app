import ArrowIcon from '../../../icons/ArrowIcon';
import styles from './ButtonNavigate.module.scss';

type ButtonNavigateProps = {
	extraClass?: string;
	direction: 'left' | 'right';
	onClick?: () => void;
};

function ButtonNavigate({
	extraClass,
	direction,
	onClick,
}: ButtonNavigateProps) {
	return (
		<button
			onClick={onClick}
			className={`${styles['button-navigate']} ${extraClass ? extraClass : ''}`}
			type="button"
		>
			<ArrowIcon direction={direction} />
		</button>
	);
}

export default ButtonNavigate;
