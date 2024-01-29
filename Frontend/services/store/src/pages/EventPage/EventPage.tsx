import Header from '../../components/Header/Header';
import Calendar from '../../components/Calendar/Calendar';
import MainFrame from '../../components/MainFrame/MainFrame';
import Footer from '../../components/Footer/Footer';
import { useParams } from 'react-router-dom';
import ScrollToTop from '../../utils/ScrollToTop';
import styles from './EventPage.module.scss';
import AboutEvent from '../../components/AboutEvent/AboutEvent';
import EventLocation from '../../components/EventLocation/EventLocation';
import Title from '../../components/Title/Title';
import ChoiseThePlace from '../../components/ChoiceThePlace/ChoiceThePlace';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { getCurrentEvent } from '@/store/event/api';

function EventPage() {
  const dispatch = useAppDispatch();
  const { currentEvent } = useAppSelector(state => state.event);
  // const [eventData, setEventData] = useState<EventType>(currentEvent);
  // const [selectedDateEvents, setSelectedDateEvents] = useState([]);
  // const handleSelectedDateChange = (events) => {
  //   setSelectedDateEvents(events);
  // };
  // const {
  //   setTotalOrder,
  //   setPaymentData,
  // } = useSeatContext();

  // const { currentEvent, setCurrentEvent } = useContext(EventsContext);
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    dispatch(getCurrentEvent(id));
    // setTotalOrder({});
    // setPaymentData([]);
    // currentEventApi
    //   .getCurrentEvent(id)
    //   .then((event) => {
    //     if (event) {
    //       setCurrentEvent(event);
    //     }
    //   })
    //   .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ScrollToTop />
      <Header
      // currentCity={currentCity}
      // isActivePopupCity={isActivePopupCity}
      // setIsActivePopupCity={setIsActivePopupCity}
      />
      <main className={styles['event-page']}>
        <Title text="Афиша" />
        <Calendar
        // handleSelectedDateChange={handleSelectedDateChange}
        />
        {/* <section className={styles["event-page"]}> */}
        <MainFrame
          eventData={currentEvent}
          // {...props}
        />
        <AboutEvent eventData={currentEvent} />
        <EventLocation eventData={currentEvent} />
        {/* </section> */}
      </main>
      <Footer />
      <ChoiseThePlace />
    </>
  );
}

export default EventPage;
