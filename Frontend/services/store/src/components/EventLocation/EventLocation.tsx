import eventsDataJson from './events.json';
import styles from './EventLocation.module.scss';
import MapComponent from '../MapComponent/MapComponent';

function EventLocation() {
  const eventData = eventsDataJson[0];
  return (
    <section className={styles['event-location']}>
      <div className={styles['event-location__container']}>
        <h2 className={styles['event-location__title']}>Место проведения</h2>
        <p
          className={styles['event-location__location']}
        >{`${eventData?.place?.name}, ${eventData?.place?.type?.name}`}</p>
        <p className={styles['event-location__adress']}>
          {eventData?.place?.address}
        </p>
        <MapComponent point='37.553728 55.715742'/>
        {/* <Map className={styles['event-location__map']} map={''} /> */}
      </div>
    </section>
  );
}

export default EventLocation;
