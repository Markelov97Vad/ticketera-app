import HeartIcon from '../components/icons/HeartIcon';
import PersonIcon from '../components/icons/PersonIcon';
import ReviewIcon from '../components/icons/ReviewIcon';
import TicketIcon from '../components/icons/TicketIcon';

export const tabData = [
	{
		link: '/personal-account/my-tickets',
		text: 'Мои билеты',
		svg: <TicketIcon />,
	},
	{
		link: '/personal-account/favourites',
		text: 'Избранное',
		svg: <HeartIcon />,
	},
	{
		link: '/personal-account/my-data',
		text: 'Мои данные',
		svg: <PersonIcon />,
	},
	{
		link: '/personal-account/my-reviews',
		text: 'Мои отзывы',
		svg: <ReviewIcon />,
	},
];
