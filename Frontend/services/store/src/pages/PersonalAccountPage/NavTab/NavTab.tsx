import { Link, useMatch } from 'react-router-dom';
import './NavTab.css';
import { ComponentProps, ReactElement, ReactNode } from 'react';

type Props = {
	dissabled: boolean;
};

type NavTabProps = {
	link: string;
	text: string;
	component: () => ReactElement<Props>;
};

function NavTab({ link, text, component: Component }: NavTabProps) {
	const match = useMatch(link);

	return (
		<Link to={link} className={`nav-tab ${match ? 'nav-tab_active' : ''}`}>
			{/* <Component disabled={!match} />
      <span className='nav-tab__text'>{text}</span> */}
		</Link>
	);
}

export default NavTab;
