import Button from "../../Ui/Buttons/Button/Button";
import HiddenText from "../HiddenText/HiddenText";
import styles from './AboutEvent.module.scss';
// import { EventsContext } from "../../constext/EventsContext";

function AboutEvent({ idEvent } : {idEvent?: string }) {
  // const { isOpenPopap, setIsOpenPopap, handleGetCurrentEvent } =
  //   useSeatContext();
  // const { currentEvent } = useContext(EventsContext);

  const handleClick = () => {
    // handleGetCurrentEvent(idEvent);
    // setIsOpenPopap(!isOpenPopap);
    idEvent
  };

  return (
    <section className={styles["about-event"]}>
      <div className={styles["about-event__description"]}>
        <h2 className={styles["about-event__title"]}>О концерте</h2>
        {/* <p className="about-event__text">{currentEvent?.description}</p> */}
        <p className={styles["about-event__text"]}>About</p>
        <HiddenText
          // text={currentEvent?.description}
          text={'About'}
          className={styles["about-event__text"]}
        />
      </div>
      <Button type="button" onClick={handleClick} additionalClass={styles["about-event__button-buy"]} gradient={true}>
        Купить билет
      </Button>
    </section>
  );
}

export default AboutEvent;
