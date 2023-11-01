import React from "react";
import styles from './EventCards.module.scss'
import EventCard from "../EventCard/EventCard";
import eventCardsButtonData from "./eventCardsButtonData.json";
import Button from "../Ui/Buttons/Button/Button";
import { eventCardsData } from "../Calendar/eventCardsData";

const EventCards = () => {
  const [buttonId, setButtonId] = React.useState(0);
  // const { events } = useContext(EventsContext);

  return (
    <section className={styles["event-cards"]}>
      <div className={styles["event-cards__container"]}>
        <h2 className={styles["event-cards__title"]}>Вам могут быть интересны</h2>
        <div className={styles["event-cards__buttons"]}>
          {eventCardsButtonData.map((item, index) => (
            <Button
              type="button"
              grayOutlined={true}
              additionalClass={`${styles['event-cards__buttons-button']} ${
                buttonId === index ? styles["event-cards__buttons-button_active"] : ""
              }`}
              key={item.id}
              onClick={() => setButtonId(index)}
            >
              {item.title}
            </Button>
          ))}
        </div>
        <div className={styles["event-cards__list"]}>
          {eventCardsData.map((item) => (
            <EventCard key={item.id} eventData={item} />
          ))}
        </div>
        <Button type="button" primaryOutlined={true} additionalClass={styles["event-cards__button"]}>
          Показать еще
        </Button>
      </div>
    </section>
  );
};

export default EventCards;
