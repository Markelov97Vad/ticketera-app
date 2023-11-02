import Header from "../Header/Header";
import Calendar from "../Calendar/Calendar";
import MainFrame from "../MainFrame/MainFrame";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import ScrollToTop from "../../utils/ScrollToTop";
import styles from './EventPage.module.scss';
import AboutEvent from "./AboutEvent/AboutEvent";
import EventLocation from "./EventLocation/EventLocation";
import Title from "../Title/Title";

function EventPage({
  // currentCity,
  // isActivePopupCity,
  // setIsActivePopupCity,
  ...props
}) {
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

  // useEffect(() => {
  //   setTotalOrder({});
  //   setPaymentData([]);
  //   currentEventApi
  //     .getCurrentEvent(id)
  //     .then((event) => {
  //       if (event) {
  //         setCurrentEvent(event);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <>
      <ScrollToTop/>
      <Header
        // currentCity={currentCity}
        // isActivePopupCity={isActivePopupCity}
        // setIsActivePopupCity={setIsActivePopupCity}
      />
      {/* стили в app.css */}
      <main className={styles['event-page']}>
        <Title text="Афиша"/>
        <Calendar 
        // handleSelectedDateChange={handleSelectedDateChange} 
        />
        {/* <section className={styles["event-page"]}> */}
          <MainFrame 
            // eventData={currentEvent} 
            {...props} 
          />
          <AboutEvent idEvent={id} />
          <EventLocation />
        {/* </section> */}
      </main>
      <Footer />
      {/* <ChoiseThePalce /> */}
    </>
  );
}

export default EventPage;
