import Button from '../Ui/Buttons/Button/Button';
import HiddenText from '../HiddenText/HiddenText';
import styles from './AboutEvent.module.scss';
// import { EventsContext } from "../../constext/EventsContext";

function AboutEvent({ idEvent }: { idEvent?: string }) {
	// const { isOpenPopap, setIsOpenPopap, handleGetCurrentEvent } =
	//   useSeatContext();
	// const { currentEvent } = useContext(EventsContext);

	const handleClick = () => {
		// handleGetCurrentEvent(idEvent);
		// setIsOpenPopap(!isOpenPopap);
		idEvent;
	};

	return (
		<section className={styles['about-event']}>
			<div className={styles['about-event__description']}>
				<h2 className={styles['about-event__title']}>О концерте</h2>
				{/* <p className="about-event__text">{currentEvent?.description}</p> */}
				<p className={styles['about-event__text']}>
					Большой сольный концерт одной из самых популярных, прослушиваемых и
					любимых российских артисток в Москве! Новая концертная программа!
				</p>
				<p className={styles['about-event__text']}>
					Популярность пришла к Zivert после выхода дебютного мини-альбома,
					получившего лаконичное и жизнеутверждающие название «Сияй». EP,
					наполненный простым вечным смыслом в сочетании с сочными современными
					битами, пронизан атмосферой конца 80-х и началом 90-х годов. «Винтаж —
					это любовь всей моей жизни. Для меня конец 80-х — начало 90-х — это
					самое стильное время и в музыке, и в моде... И я счастлива, что
					наконец-то пришла в состояние осознания себя, как личности, и к той
					стилистике в музыке, к которой всегда относилась с особой страстью», —
					рассказывает о своей работе Юлия Zivert.
				</p>
				<HiddenText
					// text={currentEvent?.description}
					text={'About'}
					className={styles['about-event__text']}
				/>
			</div>
			<Button
				type="button"
				onClick={handleClick}
				additionalClass={styles['about-event__button-buy']}
				gradient={true}
			>
				Купить билет
			</Button>
		</section>
	);
}

export default AboutEvent;
