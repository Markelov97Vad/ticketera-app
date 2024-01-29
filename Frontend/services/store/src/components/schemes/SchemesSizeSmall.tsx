import {
  isPaidProps,
  renderValueSeatProps,
} from '@/hooks/useImplementationScheme';
import { IZone } from '@/models/place';
import styles from './Schemes.module.scss';

type SchemesSizeSmallProps = {
  eventZone: IZone[];
  renderValueSeat: ({
    seatValue,
    seat,
    row,
    name,
    price,
    id,
  }: renderValueSeatProps) => JSX.Element;
  isPaid: ({ seat, row, name }: isPaidProps) => boolean;
};

function SchemesSizeSmall({
  eventZone,
  renderValueSeat,
  isPaid,
}: SchemesSizeSmallProps) {
  return eventZone.map(zone => (
    <div key={zone.id} className={styles.zone}>
      {Array.from(Array(zone.row).keys()).map((row, i) => (
        <div key={i} className={styles['zone__row']}>
          <div className={styles['zone__column']}>
            {Array.from(Array(Math.floor(zone.seat / zone.row / 2)).keys()).map(
              (seat, id) => (
                <span key={id} className={styles.zone__seat}>
                  {renderValueSeat({
                    seatValue: isPaid({
                      seat: seat + 1,
                      row: row + 1,
                      name: zone.name,
                    }),
                    seat: seat + 1,
                    row: row + 1,
                    name: zone.name,
                    price: zone.price,
                    id: zone.id,
                    // id + 1,
                  })}
                </span>
              ),
            )}
          </div>
          <div className={styles['zone__column']}>
            {Array.from(Array(Math.floor(zone.seat / zone.row / 2)).keys()).map(
              (seat, id) => {
                return (
                  <span key={id} className={styles.zone__seat}>
                    {renderValueSeat({
                      seatValue: isPaid({
                        seat: seat + 1 + Math.floor(zone.seat / zone.row) / 2,
                        row: row + 1,
                        name: zone.name,
                      }),
                      seat: seat + 1 + Math.floor(zone.seat / zone.row) / 2,
                      row: row + 1,
                      name: zone.name,
                      price: zone.price,
                      id: zone.id,
                    })}
                  </span>
                );
              },
            )}
          </div>
        </div>
      ))}
    </div>
  ));
}

export default SchemesSizeSmall;
