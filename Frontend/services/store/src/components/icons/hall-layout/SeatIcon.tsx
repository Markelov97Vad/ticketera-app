import './SeatIcon.scss';
import { IZone } from '@/models/place';
import { useAppSelector } from '@/hooks/reduxHooks';
import { useEffect, useState } from 'react';

type SeatIconProps = {
  blue?: boolean;
  violet?: boolean;
  red?: boolean;
  grey?: boolean;
  handleDeletTicket: (ticketsPaymentData: IZone) => void;
  seat: number;
  row: number;
  name: string;
  id: number;
  price: number;
  handleСhoicePlace: ({ seat, row, name, id, price }: IZone) => void;
  sizeLayout: 'big' | 'small';
};

function SeatIcon({
  blue,
  violet,
  red,
  grey,
  handleDeletTicket,
  seat,
  row,
  name,
  price,
  handleСhoicePlace,
  id,
  sizeLayout = 'big',
}: SeatIconProps) {
  // const { paymentData } = useSeatContext();
  // const dispatch = useAppDispatch();
  const { paymentData } = useAppSelector(state => state.place);
  const [payData, setPayData] = useState(paymentData);

  const colors = [
    blue ? '#2BA6FF' : null,
    violet ? '#8B52F6' : null,
    red ? '#EA3057' : null,
    grey ? '#D9D9D9' : null,
  ];

  const color = colors.find(col => col !== null);
  useEffect(() => {
    setPayData(() => paymentData);
    console.log(handleIsActive());
    
  }, [paymentData]);

  function handleIsActive() {
    return payData.some(ticket => {
      return seat === ticket.seat && row === ticket.row && name === ticket.name;
    });
  }
  const handleClick = () => {
    console.log('CLick');
    
    if (handleIsActive()) {
      handleDeletTicket({ seat, row, name, price, id });
    } else if (!handleIsActive()) {
      handleСhoicePlace({ seat, row, name, price, id });
    }
  };

  return sizeLayout === 'big' ? (
    <svg
      width="21.6"
      height="21.6"
      viewBox="0 0 21.6 21.6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleClick}
      className="seat-icon"
    >
      {handleIsActive() ? (
        <path
          d="M2.90137 7.63916L10.4014 15.6392L20.4014 2.63916"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <circle cx="11.426" cy="11.4753" r="8.21311" fill={color} />
      )}
    </svg>
  ) : handleIsActive() ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="18"
      viewBox="0 0 22 18"
      fill="none"
      className="seat-icon-small"
      onClick={handleClick}
    >
      <path
        d="M2.21973 7.78125L9.71973 15.7812L19.7197 2.78125"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="18"
      viewBox="0 0 17 18"
      fill="none"
      onClick={handleClick}
      className="seat-icon-small"
    >
      <circle cx="8.31394" cy="9.18577" r="8.21311" fill={color} />
    </svg>
  );
}

export default SeatIcon;
