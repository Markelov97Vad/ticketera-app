// import React from 'react';
import moment from 'moment';
import styles from './Month.module.scss'
// import { type } from 'os';

type MonthProps = {
  monthIndex: number;
  daysToShow: number[];
  selectedDay: number
  handleDayClick: (i: number, day: number) => void
  weekDays: string[]
}



function Month({ monthIndex, daysToShow, selectedDay, handleDayClick, weekDays }: MonthProps) {
  const monthInfo = moment().add(monthIndex, 'months');
  const monthName = monthInfo.format('MMMM');

  const firstDayOfMonth = moment(monthInfo).startOf('month');
  const firstDayOfWeekIndex = firstDayOfMonth.day();

  return (
    <div className={styles.month}>
      <p className={styles.month__name}>{monthName}</p>
      <div className={styles.dates}>
        {daysToShow?.map((day, index) => (
          <div key={index} className={styles.date} onClick={() => handleDayClick(monthIndex, day)}>
            <span className={`${styles.date__day} ${day === selectedDay ? styles['date__selected'] : ''}`}>{day}</span>
            <span className={`${styles.date__weekday} ${weekDays[(day + firstDayOfWeekIndex - 1) % 7] === 'сб' || weekDays[(day + firstDayOfWeekIndex - 1) % 7] === 'вс' ? styles.date__weekend : ''}`}>
              {weekDays[(day + firstDayOfWeekIndex - 1) % 7]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Month;
