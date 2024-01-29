import { useState } from 'react';
import { useAppDispatch } from './reduxHooks';
import { IZone } from '@/models/place';
import ZoneIcon from '@/components/icons/ZoneIcon';
import SeatIcon from '@/components/icons/hall-layout/SeatIcon';
import SeatIconDisabled from '@/components/icons/hall-layout/SeatIconDisabled';
import { ITicket } from '@/models/ticket';
import {
  addPaymentData,
  deletePaymentData,
  patchPaymentData,
} from '@/store/place/placeSlice';

type useImplementationSchemeProps = {
  // currentEvent: IEvent;
  tickets: ITicket[];
  sizeLayout: 'big' | 'small';
};
type ZoneType = Omit<IZone, 'id' | 'price'>;
type handleDeleteСhoicePlaceType = Pick<IZone, 'id' | 'price'>;
// interface handleСhoicePlaceType extends IZone {
//   idSeat: number;
// }

export type isPaidProps = ZoneType;
export interface renderValueSeatProps extends IZone {
  seatValue: boolean;
}

function useImplementationScheme({
  // currentEvent,
  tickets,
  sizeLayout,
}: useImplementationSchemeProps) {
  const [counterPrice, setCounterPrice] = useState(0);
  const dispatch = useAppDispatch();

  function isPaid({ seat, row, name }: isPaidProps) {
    return tickets.some(ticket => {
      return ticket.seat === seat && ticket.row === row && ticket.name === name;
    });
  }

  const handleСhoicePlace = ({ seat, row, name, id, price }: IZone) => {
    if (isPaid({ seat, row, name })) {
      return;
    } else {
      setCounterPrice(value => value + price);
      dispatch(addPaymentData({ seat, row, name, id, price }));
    }
  };

  const handleDeleteСhoicePlace = ({
    id,
    price,
  }: handleDeleteСhoicePlaceType) => {
    dispatch(deletePaymentData(id));

    setCounterPrice(value => value - price);
  };

  const renderColorZone = (id: number) => {
    switch (id) {
      case 1:
        return <ZoneIcon blue />;
      case 2:
        return <ZoneIcon violet />;
      case 3:
        return <ZoneIcon red />;
      default:
        return <ZoneIcon blue />;
    }
  };

  const handleDeletTicket = (ticketsPaymentData: IZone) => {
    dispatch(patchPaymentData(ticketsPaymentData));
    setCounterPrice(numPrice => numPrice - ticketsPaymentData.price);
  };

  function renderColorSeat({ seat, row, name, price, id }: IZone) {
    switch (id) {
      case 1:
        return (
          <SeatIcon
            price={price}
            seat={seat}
            row={row}
            name={name}
            handleDeletTicket={handleDeletTicket}
            handleСhoicePlace={handleСhoicePlace}
            blue
            id={id}
            sizeLayout={sizeLayout}
          />
        );
      case 2:
        return (
          <SeatIcon
            price={price}
            seat={seat}
            row={row}
            name={name}
            handleDeletTicket={handleDeletTicket}
            handleСhoicePlace={handleСhoicePlace}
            violet
            id={id}
            sizeLayout={sizeLayout}
          />
        );
      case 3:
        return (
          <SeatIcon
            price={price}
            seat={seat}
            row={row}
            name={name}
            handleDeletTicket={handleDeletTicket}
            handleСhoicePlace={handleСhoicePlace}
            red
            id={id}
            sizeLayout={sizeLayout}
          />
        );
      default:
        return (
          <SeatIcon
            price={price}
            seat={seat}
            row={row}
            name={name}
            handleDeletTicket={handleDeletTicket}
            handleСhoicePlace={handleСhoicePlace}
            red={true}
            id={id}
            sizeLayout={sizeLayout}
          />
        );
    }
  }
  function renderValueSeat({
    seatValue,
    seat,
    row,
    name,
    price,
    id,
  }: renderValueSeatProps) {
    switch (seatValue) {
      case false:
        return renderColorSeat({ seat, row, name, price, id });
      case true:
        return <SeatIconDisabled />;
      default:
        return <SeatIconDisabled />;
    }
  }

  return {
    // tickets,
    // eventZone,
    handleСhoicePlace,
    handleDeleteСhoicePlace,
    renderColorZone,
    renderValueSeat,
    counterPrice,
    setCounterPrice,
    isPaid,
  };
}

export default useImplementationScheme;
