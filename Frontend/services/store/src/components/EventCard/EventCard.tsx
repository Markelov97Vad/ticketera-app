// import { useEffect, useState } from "react";
import styles from './EventCard.module.scss';
import { Link } from 'react-router-dom';
// import ButtonLike from "../Buttons/ButtonLike/ButtonLike";
import * as supportFunction from '../../utils/supportFunction';
import ButtonLike from '../Ui/Buttons/ButtonLike/ButtonLike';
// import { addEventToFavorites, deleteEventToFavorites } from "../../utils/currentEventApi";
// import useUserContext from "../../hooks/useUserContext";
// import usePopupContext from "../../hooks/usePopupContext";
// import { useContext } from "react";
// import { EventsContext } from "../../constext/EventsContext";

type EventCardProps = {
	eventData: {
		id?: number;
		image?: string;
		location?: string;
		date?: string;
		name: string;
		is_favorited: boolean;
		time_event: string;
		date_event: string;
		place: string;
	};
};

function EventCard({ eventData }: EventCardProps) {
	// const {renderCard,setRenderCard} = useContext(EventsContext);
	// const [isActiveLike, setIsActiveLike] = useState();
	const isActiveLike = eventData.is_favorited;

	// const {isLoggedIn} = useUserContext();
	// const {setType} = usePopupContext();
	const { name, image, time_event, date_event, place, id } = eventData;

	// useEffect(() => {
	// }, [renderCard]);

	// const handleLike = () => {
	//   const token = JSON.parse(localStorage.getItem('token'))
	//   if (isLoggedIn) {

	//     if (!isActiveLike) {
	//       addEventToFavorites(id,token)
	//         .then(res => {
	//           // console.log(res);
	//         })
	//         .catch(err => console.log(err))
	//       // setRenderCard(!renderCard);
	//     } else {
	//       deleteEventToFavorites(id, token)
	//         .then(res => console.log(res))
	//         .catch(err => console.log(err));
	//       // setRenderCard(!renderCard);
	//     }
	//   } else {
	//     console.log('Вам надо авторизоваться');
	//     setType('login');
	//   }
	// };
	return (
		<article className={styles['event-card']}>
			<Link to={`/event/${id}`}>
				<div className={styles['event-card__img-wrapper']}>
					<img className={styles['event-card__image']} src={image} alt={name} />
				</div>
				<div className={styles['event-card__info']}>
					<h2 className={styles['event-card__title']}>{name}</h2>
					<div className={styles['event-card__info-columns']}>
						<div className={styles['event-card__info-column']}>
							<i className="event-card__icon event-card__icon_time"></i>
							<span className={styles['event-card__text']}>
								{supportFunction.renderDate(date_event)},{' '}
								{supportFunction.renderTime(time_event)}
							</span>
						</div>
						<div className={styles['event-card__info-column']}>
							<i
								className={`${styles['event-card__icon']} ${styles['event-card__icon_place']}`}
							></i>
							<span className={styles['event-card__text']}>{place}</span>
						</div>
					</div>
				</div>
			</Link>
			<ButtonLike
				extraClass={styles['event-card__button-like']}
				// handleLike={handleLike}
				handleLike={() => null}
				isActive={isActiveLike}
			/>
		</article>
	);
}

export default EventCard;
