import SearchIcon from '../../../icons/SearchIcon';
import styles from './ButtonSearch.module.scss';

type ButtonSearchProps = {
	extraClass?: string;
};

function ButtonSearch({ extraClass }: ButtonSearchProps) {
	return (
		<button
			className={`${styles['button-search']} ${extraClass ? extraClass : ''}`}
			type="submit"
		>
			<SearchIcon />
		</button>
	);
}

export default ButtonSearch;
