import { useState, useEffect } from 'react';
import styles from './Calendar.module.scss';

import moment from 'moment';
import 'moment/locale/ru';
import { eventCardsData } from './eventCardsData';
import Month from './Month/Month';
import ButtonNavigate from '../Ui/Buttons/ButtonNavigate/ButtonNavigate';

// type dataType = {
//   id: number;
//   image: string;
//   location: string;
//   date: string;
//   name: string;
// }[]

// type CalendarProps = {
//   handleSelectedDateChange: (data: dataType) => void
// }

type Date = {
	[index: string]: number;
} | null;

function Calendar() {
	const defaultProps = {
		weekDays: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
		months: [
			'Январь',
			'Февраль',
			'Март',
			'Апрель',
			'Май',
			'Июнь',
			'Июль',
			'Август',
			'Сентябрь',
			'Октябрь',
			'Ноябрь',
			'Декабрь',
		],
	};

	// const [_, setSelectedDateEvents] = useState<dataType>([]);

	// const handleSelectedDateChange = (events: dataType) => {
	//   setSelectedDateEvents(() => events);
	// };

	const { weekDays } = defaultProps;

	const [currentMonthIndex] = useState(0);

	const currentDate = moment();
	const currentDay = currentDate.date();

	// const currentWeekdayIndex = currentDate.day();

	const monthsToShow = 12;

	const [selectedDay, setSelectedDay] = useState<Date>({});

	const [visibleDays, setVisibleDays] = useState(11);

	const handleDayClick = (monthIndex: number, day: number) => {
		setSelectedDay(() => ({
			[monthIndex]: day,
		}));

		const selectedDate = moment().add(monthIndex, 'months').date(day);

		const eventsForSelectedDate = eventCardsData.filter(event => {
			const eventDate = moment(event.date, 'D MMMM, HH:mm');
			return eventDate.isSame(selectedDate, 'day');
		});

		localStorage.setItem('selectedDate', JSON.stringify({ monthIndex, day }));
		localStorage.setItem(
			'eventsForSelectedDate',
			JSON.stringify(eventsForSelectedDate),
		);
		localStorage.setItem('visibleDays', visibleDays.toString());

		// handleSelectedDateChange(eventsForSelectedDate);
	};

	useEffect(() => {
		const savedSelectedDate = localStorage.getItem('selectedDate');
		const savedVisibleDays = localStorage.getItem('visibleDays');

		if (savedSelectedDate) {
			const { monthIndex, day } = JSON.parse(savedSelectedDate);
			setSelectedDay({ [monthIndex]: day });

			// const eventsForSelectedDate = JSON.parse(localStorage.getItem('eventsForSelectedDate')!);
			// handleSelectedDateChange(eventsForSelectedDate);
		}

		if (savedVisibleDays) {
			setVisibleDays(parseInt(savedVisibleDays));
		}
	}, []);

	const handleNextClick = () => {
		const newVisibleDays = (prev: number) => prev + 11;
		setVisibleDays(newVisibleDays);
	};

	const handlePrevClick = () => {
		const newVisibleDays = (prev: number) => prev - 11;
		setVisibleDays(newVisibleDays);
	};

	const calendar = [];

	for (let i = 0; i < monthsToShow; i++) {
		const monthInfo = currentDate.clone().add(i, 'months');
		const isCurrentMonth = i === 0;
		const daysToShow = isCurrentMonth
			? Array.from(
					{ length: monthInfo.daysInMonth() - (currentDay - 1) },
					(_, index) => index + currentDay,
				)
			: Array.from(
					{ length: monthInfo.daysInMonth() },
					(_, index) => index + 1,
				);

		calendar.push(
			<Month
				key={i}
				monthIndex={i}
				// monthName={months[i]}
				daysToShow={daysToShow}
				selectedDay={selectedDay![i]}
				handleDayClick={handleDayClick}
				weekDays={weekDays}
				// currentWeekdayIndex={currentWeekdayIndex}
			/>,
		);
	}

	return (
		<section className={styles.calendar}>
			<div
				className={`${styles.arrow} ${
					visibleDays > 11 ? styles['arrow-left'] : ''
				}`}
			>
				<ButtonNavigate
					onClick={visibleDays > 11 ? handlePrevClick : undefined}
					direction="left"
					extraClass={`${styles['arrow-btn']} ${styles['arrow-left-btn']} ${
						visibleDays > 11 ? '' : styles.disabled
					}`}
				/>
			</div>
			<div className={styles['calendar__container']}>
				<div
					className={styles['dates-visible']}
					style={{ transform: `translateX(-${(visibleDays - 11) * 47.5}px)` }}
				>
					{calendar}
				</div>
			</div>
			<div
				className={`${styles.arrow} ${
					currentMonthIndex + visibleDays / 30 < monthsToShow - 1
						? styles['arrow-right']
						: ''
				}`}
			>
				<ButtonNavigate
					onClick={
						currentMonthIndex + visibleDays / 30 < monthsToShow - 1
							? handleNextClick
							: undefined
					}
					direction="right"
					extraClass={`${styles['arrow-btn']} ${styles['arrow-right-btn']} ${
						currentMonthIndex + visibleDays / 30 < monthsToShow - 1
							? ''
							: styles.disabled
					}`}
				/>
			</div>
		</section>
	);
}

export default Calendar;
