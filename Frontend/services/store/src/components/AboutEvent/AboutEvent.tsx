import Button from '../Ui/Buttons/Button/Button';
import HiddenText from '../HiddenText/HiddenText';
import styles from './AboutEvent.module.scss';
import { IEvent } from '@/models/event';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { togglePopup } from '@/store/place/placeSlice';
// import { EventsContext } from "../../constext/EventsContext";
type AboutEventProps = {
  eventData: IEvent;
};

function AboutEvent({ eventData }: AboutEventProps) {
  // const { isOpenPopap, setIsOpenPopap, handleGetCurrentEvent } =
  //   useSeatContext();
  // const { currentEvent } = useContext(EventsContext);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(togglePopup());
    // handleGetCurrentEvent(idEvent);
    // setIsOpenPopap(!isOpenPopap);
    // idEvent;
  };

  return (
    <section className={styles['about-event']}>
      <div className={styles['about-event__description']}>
        <h2 className={styles['about-event__title']}>О концерте</h2>
        {/* <p className="about-event__text">{currentEvent?.description}</p> */}
        {/* <p className={styles['about-event__text']}>
          Большой сольный концерт одной из самых популярных, прослушиваемых и
          любимых российских артисток в Москве! Новая концертная программа!
        </p> */}
        <HiddenText
          // text={currentEvent?.description}
          text={eventData?.description}
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
