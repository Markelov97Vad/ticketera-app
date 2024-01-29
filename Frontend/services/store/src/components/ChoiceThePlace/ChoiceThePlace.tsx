import { useEffect, useState } from 'react';
import Button from '../Ui/Buttons/Button/Button';
import ButtonCross from '../Ui/Buttons/ButtonCross/ButtonCross';
import PlaceIcon from '../icons/PlaceIcon';
import SceneIcon from '../icons/SceneIcon';
import TimeIcon from '../icons/TimeIcon';
// import ZoneIcon from '../icons/ZoneIcon';
// import SeatIcon from '../icons/hall-layout/SeatIcon';
// import SeatIconDisabled from '../icons/hall-layout/SeatIconDisabled';
import styles from './ChoiceThePlace.module.scss';
// import useSeatContext from '../../hooks/useSeatContext';
import { useNavigate } from 'react-router-dom';
import * as supportFunction from '../../utils/supportFunction';
import useImplementationScheme from '@/hooks/useImplementationScheme';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import {
  addOrder,
  clearPaymentData,
  // patchPaymentData,
  togglePopup,
} from '@/store/place/placeSlice';
import SchemesSizeSmall from '../schemes/SchemesSizeSmall';
import SchemesSizeBig from '../schemes/SchemesSizeBig';
import { IZone } from '@/models/place';

function ChoiceThePlace() {
  const [sizeLayout, setSizeLayout] = useState<'big' | 'small'>('small');
  const dispatch = useAppDispatch();
  const { tickets, paymentData, isOpen } = useAppSelector(state => state.place);
  const { currentEvent } = useAppSelector(state => state.event);
  const {
    // eventZone,
    // handleСhoicePlace,
    handleDeleteСhoicePlace,
    renderColorZone,
    renderValueSeat,
    counterPrice,
    isPaid,
  } = useImplementationScheme({ tickets, currentEvent, sizeLayout });
  const navigate = useNavigate();
  const [eventZone, setEventZone] = useState<IZone[]>([]);

  useEffect(() => {
    setEventZone(currentEvent?.place?.type?.zone);
    console.log('currentEventZone', currentEvent?.place?.type?.zone);
    console.log('cEve', currentEvent);
  }, [currentEvent]);

  const declination = (numTicket: number, text: string[], cases: number[]) => {
    return text[
      numTicket % 100 > 4 && numTicket % 100 < 20
        ? 2
        : cases[numTicket % 10 < 5 ? numTicket % 10 : 5]
    ];
  };

  const handleEnding = (numTicket: number) => {
    const text = ['билет', 'билета', 'билетов'];
    const cases = [2, 0, 1, 1, 1, 2];

    return declination(numTicket, text, cases);
  };

  const renderInt = (num: number) => {
    const numbFmt = new Intl.NumberFormat('ru-RU').format(num);
    return numbFmt;
  };

  function generateRandomFiveDigitNumber(): number {
    const min = 10000; // Минимальное пятизначное число
    const max = 99999; // Максимальное пятизначное число

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomNumber;
  }

  const randomFiveDigitNumber = generateRandomFiveDigitNumber();

  const handleOrder = () => {
    if (counterPrice > 0) {
      dispatch(
        addOrder({
          sum: counterPrice + 100,
          tickets: paymentData,
          orderNumber: randomFiveDigitNumber,
        }),
      );
      // setTotalOrder({
      //   totalSum: counterPrice + 100,
      //   tickets: paymentData,
      //   оrderNumber: randomFiveDigitNumber,
      // });
      sessionStorage.setItem(
        'totalOrder',
        JSON.stringify({
          totalSum: counterPrice + 100,
          tickets: paymentData,
          оrderNumber: randomFiveDigitNumber,
          eventName: currentEvent?.name,
        }),
      );
      navigate('/order', { replace: true });
    }
  };

  const handleClose = () => {
    dispatch(clearPaymentData());
    dispatch(togglePopup());
  };

  const countSeat = (zones: IZone[]) => {
    const numberSeats = zones?.reduce((prevVal, zone) => {
      return prevVal + zone.seat;
    }, 0);

    return numberSeats;
  };

  useEffect(() => {
    setSizeLayout(countSeat(eventZone) <= 108 ? 'small' : 'big');
    console.log('EventZONE', eventZone);
    console.log('Small', sizeLayout);
  }, []);

  return (
    <div
      className={`${styles['choice-the-place']} ${
        isOpen ? styles['choice-the-place_visible'] : ''
      }`}
    >
      <div className={styles['choice-the-place__container']}>
        <ButtonCross
          onClick={handleClose}
          black={true}
          additionalClass={styles['choice-the-place__close-button']}
        />
        <h1 className={styles['choice-the-place__title']}>Выбор места</h1>
        <div className={styles['event-info']}>
          <h2 className={styles['event-info__title']}>{currentEvent?.name}</h2>
          <div className={styles['event-info__info-column']}>
            <PlaceIcon color="violet" />
            <span className={styles['event-info__text']}>
              {currentEvent?.place?.city}, {currentEvent?.place?.name}
            </span>
          </div>
          <div className={styles['event-info__info-column']}>
            <TimeIcon color="violet" />
            <span className={styles['event-info__text']}>
              {supportFunction.renderDate(currentEvent?.date_event)},{' '}
              {supportFunction.renderTime(currentEvent?.time_event)}
            </span>
          </div>
        </div>

        <section className={styles['choice-the-place__hall-layout']}>
          <div className={styles['hall-layout__wrapper']}>
            <div className={styles['hall-layout__location']}>
              <div className={styles.location__scene}>
                {sizeLayout === 'big' ? (
                  <SceneIcon size="big" />
                ) : (
                  <SceneIcon size="small" />
                )}
              </div>
              <div className={styles['location__zone-seats']}>
                <div
                  className={`${styles.location__seats} ${
                    sizeLayout === 'big' ? styles.location__seats_type_big : ''
                  }`}
                >
                  {countSeat(eventZone) <= 108
                    ? eventZone?.length > 0 && (
                        <SchemesSizeSmall
                          eventZone={eventZone}
                          renderValueSeat={renderValueSeat}
                          isPaid={isPaid}
                        />
                      )
                    : eventZone?.length > 0 && (
                        <SchemesSizeBig
                          eventZone={eventZone}
                          renderValueSeat={renderValueSeat}
                          isPaid={isPaid}
                        />
                      )}
                </div>
              </div>
            </div>
            <div className={styles['hall-layout__about-zones']}>
              {eventZone?.map((zoneElem, id) => (
                <div key={id} className={styles['sector-element']}>
                  {renderColorZone(zoneElem.id)}
                  <span
                    className={`${styles['sector-element__text']} ${styles['sector-element__text_type_zone']}`}
                  >
                    {zoneElem.name}
                  </span>
                  <span
                    className={`${styles['sector-element__text']} ${styles['sector-element__text_type_price']}`}
                  >
                    {renderInt(zoneElem.price)} ₽
                  </span>
                </div>
              ))}
            </div>
          </div>

          {paymentData.length > 0 && (
            <div
              className={`${styles.counter} ${styles['choise-the-place__counter']}`}
            >
              <h3 className={styles.counter__title}>Билеты</h3>
              <div className={styles['counter__amount-list']}>
                {paymentData.map((payData, id) => {
                  return (
                    <div key={id} className={styles['counter__seat-info']}>
                      <div className={styles.counter__column}>
                        <span
                          className={`${styles.counter__text} ${styles.counter__text_type_zone}`}
                        >
                          {payData.name}&nbsp;
                        </span>
                        <span className={styles.counter__text}>
                          ряд {payData.row},&nbsp;
                        </span>
                        <span className={styles.counter__text}>
                          {' '}
                          место {payData.seat}{' '}
                        </span>
                      </div>
                      <div className={styles.counter__column}>
                        <span className={styles.counter__text}>
                          {renderInt(payData.price)} ₽
                        </span>
                        <ButtonCross
                          onClick={() => {
                            handleDeleteСhoicePlace({
                              id,
                              price: payData.price,
                            });
                          }}
                          additionalClass={styles['counter__cross-button']}
                          red={true}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className={styles['counter__amount-info']}>
                <div className={styles.counter__column}>
                  <span className={styles.counter__text}>
                    {paymentData.length} {handleEnding(paymentData.length)} на
                    сумму
                  </span>
                  <span>{renderInt(counterPrice)} ₽</span>
                </div>
                <div className={styles.counter__column}>
                  <span className={styles.counter__text}>Сервисный сбор</span>
                  <span>{renderInt(100)} ₽</span>
                </div>
                <div className={styles.counter__column}>
                  <span
                    className={`${styles.counter__text} ${styles['counter__info-text_type_total-amount']}`}
                  >
                    Итого к оплате:
                  </span>
                  <span
                    className={`${styles.counter__text} ${styles['counter__info-text_type_total-amount']}`}
                  >
                    {renderInt(counterPrice + 100)} ₽
                  </span>
                </div>
              </div>
              <Button
                type="submit"
                gradient={true}
                additionalClass={styles['column__add-button']}
                onClick={handleOrder}
                disabled={paymentData.length === 0 ? true : false}
              >
                Оформить заказ
              </Button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default ChoiceThePlace;
