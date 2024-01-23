import { useEffect, useState } from 'react';
import styles from './MainFrame.module.scss';
import * as supportFunction from '../../utils/supportFunction';

// import eventData from './eventTestData.json';
import ButtonLike from '../Ui/Buttons/ButtonLike/ButtonLike';
import TimeIcon from '../icons/TimeIcon';
import PlaceIcon from '../icons/PlaceIcon';
import { EventType } from '@/types/event';
// import ButtonShare from '../Ui/Buttons/ButtonShare/ButtonShare';

type MainFrameProps = {
  eventData: EventType;
};

function MainFrame({ eventData }: MainFrameProps) {
  const [isActive, setIsActive] = useState(false);
  // const { image, name, date_event, time_event } = eventData;

  const handleLike = () => {
    setIsActive(!isActive);
  };
  useEffect(() => {
    console.log(eventData?.image);
  }, [eventData]);

  return (
    <section className={styles['main-frame']}>
      <div className={styles['main-frame__img-wrapper']}>
        <img
          className={styles['main-frame__img']}
          src={eventData?.image}
          alt={eventData?.name}
        />
      </div>
      <div className={styles['main-frame__container']}>
        <div className={styles['main-frame__buttons']}>
          {/* <div className={styles["main-frame__button-share"]}>
            <ButtonShare />
            <span className={styles["main-frame__button-title"]}>Поделиться</span>
          </div> */}
          <div className={styles['main-frame__button-like']}>
            <ButtonLike handleLike={handleLike} isActive={isActive} />
            <span className={styles['main-frame__button-title']}>
              Избранное
            </span>
          </div>
        </div>
        <div className={styles['main-frame__info']}>
          <ul className={styles['main-frame__tags-info']}>
            {/* <li className="main-frame__type">{eventData?.type}</li> */}
            {/* <li className="main-frame__tag">{eventData?.tag}</li> */}
          </ul>
          <h1 className={styles['main-frame__title']}>{eventData?.name}</h1>
          <div
            className={`${styles['main-frame__date']} ${styles['main-frame__event-info']}`}
          >
            <TimeIcon color="white" />
            <span className={styles['main-frame__date-title']}>
              {supportFunction.renderDate(eventData?.date_event)},{' '}
              {supportFunction.renderTime(eventData?.time_event)}
            </span>
          </div>
          <div
            className={`${styles['main-frame__location']} ${styles['main-frame__event-info']}`}
          >
            <PlaceIcon color="white" />
            <span className={styles['main-frame__location-title']}>
              {eventData?.place?.city}, {eventData?.place.name}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainFrame;
