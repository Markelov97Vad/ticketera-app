import {
  isPaidProps,
  renderValueSeatProps,
} from '@/hooks/useImplementationScheme';
import { IZone } from '@/models/place';
import styles from './Schemes.module.scss';

type SchemesSizeBigProps = {
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

function SchemesSizeBig({
  eventZone,
  renderValueSeat,
  isPaid,
}: SchemesSizeBigProps) {
  return (
    <>
      {eventZone[0] && (
        <div className={styles.sector}>
          <div
            className={`${styles.sector__zone} ${styles.sector__zone_type_left}`}
          >
            {Array.from(Array(5).keys()).map((row2, row) => (
              <div
                key={row}
                className={`${styles.sector__row} ${styles.sector__row_left}`}
              >
                {Array.from(Array(4 + row).keys()).map((seat, numSeat) => (
                  <span key={numSeat}>
                    {renderValueSeat({
                      seatValue: isPaid({
                        seat: numSeat + 1,
                        row: row + 1,
                        name: eventZone[0].name,
                      }),
                      seat: numSeat + 1,
                      row: row + 1,
                      name: eventZone[0].name,
                      price: eventZone[0].price,
                      id: eventZone[0].id,
                    })}
                  </span>
                ))}
              </div>
            ))}
          </div>
          <div className={`${styles.sector__zone}`}>
            {Array.from(Array(5).keys()).map((row, numRow) => (
              <div
                key={numRow}
                className={`${styles.sector__row} ${styles.sector__row_center}`}
              >
                {Array.from(Array(6 + numRow).keys()).map((row, numSeat) => (
                  <span key={numSeat}>
                    {renderValueSeat({
                      seatValue: isPaid({
                        seat: numSeat + (5 + numRow),
                        row: numRow + 1,
                        name: eventZone[0].name,
                      }),
                      seat: numSeat + (5 + numRow),
                      row: numRow + 1,
                      name: eventZone[0].name,
                      price: eventZone[0].price,
                      id: eventZone[0].id,
                    })}
                  </span>
                ))}
              </div>
            ))}
          </div>
          <div
            className={`${styles.sector__zone} ${styles.sector__zone_type_right}`}
          >
            {Array.from(Array(5).keys()).map((row, numRow) => (
              <div key={numRow} className={`${styles.sector__row}`}>
                {Array.from(Array(4 + numRow).keys()).map((row, numSeat) => (
                  <span key={numSeat}>
                    {renderValueSeat({
                      seatValue: isPaid({
                        seat: numSeat + (11 + numRow),
                        row: numRow + 1,
                        name: eventZone[0].name,
                      }),
                      id: eventZone[0].id,
                      seat: numSeat + (11 + numRow + numRow),
                      row: numRow + 1,
                      name: eventZone[0].name,
                      price: eventZone[0].price,
                    })}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
      {eventZone[1] && (
        <div className={styles.sector}>
          <div
            className={`${styles.sector__zone} ${styles['sector__zone_type_left-second']}`}
          >
            {Array.from(Array(1).keys()).map((row, numRow) => (
              <div
                key={numRow}
                className={`${styles.sector__row} ${styles.sector__row_left}`}
              >
                {Array.from(Array(7).keys()).map((row, numSeat) => (
                  <span key={numSeat}>
                    {renderValueSeat({
                      seatValue: isPaid({
                        seat: numSeat + 1,
                        row: numRow + 1,
                        name: eventZone[1].name,
                      }),
                      id: eventZone[1].id,
                      seat: numSeat + 1,
                      row: numRow + 1,
                      name: eventZone[1].name,
                      price: eventZone[1].price,
                    })}
                  </span>
                ))}
              </div>
            ))}
            {Array.from(Array(2).keys()).map((row, numRow) => (
              <div
                key={numRow}
                className={`${styles.sector__row} ${styles.sector__row_left}`}
              >
                {Array.from(Array(6).keys()).map((row, numSeat) => (
                  <span key={numSeat}>
                    {renderValueSeat({
                      seatValue: isPaid({
                        seat: numSeat + 1,
                        row: numRow + 2,
                        name: eventZone[1].name,
                      }),
                      id: eventZone[1].id,
                      seat: numSeat + 1,
                      row: numRow + 2,
                      name: eventZone[1].name,
                      price: eventZone[1].price,
                    })}
                  </span>
                ))}
              </div>
            ))}
            {eventZone[2] && (
              <>
                {Array.from(Array(2).keys()).map((row, numRow) => (
                  <div
                    key={numRow}
                    className={`${styles.sector__row} ${styles.sector__row_left}`}
                  >
                    {Array.from(Array(5).keys()).map((row, numSeat) => (
                      <span key={numSeat}>
                        {renderValueSeat({
                          seatValue: isPaid({
                            seat: numSeat + 1,
                            row: numRow + 1,
                            name: eventZone[2].name,
                          }),
                          id: eventZone[2].id,
                          seat: numSeat + 1,
                          row: numRow + 1,
                          name: eventZone[2].name,
                          price: eventZone[2].price,
                        })}
                      </span>
                    ))}
                  </div>
                ))}
                {Array.from(Array(1).keys()).map((row, numRow) => (
                  <div
                    key={numRow}
                    className={`${styles.sector__row} ${styles.sector__row_left}`}
                  >
                    {Array.from(Array(4).keys()).map((row, numSeat) => (
                      <span key={numSeat}>
                        {renderValueSeat({
                          seatValue: isPaid({
                            seat: numSeat + 1,
                            row: numRow + 3,
                            name: eventZone[2].name,
                          }),
                          id: eventZone[2].id,
                          seat: numSeat + 1,
                          row: numRow + 3,
                          name: eventZone[2].name,
                          price: eventZone[2].price,
                        })}
                      </span>
                    ))}
                  </div>
                ))}
                {Array.from(Array(1).keys()).map((row, numRow) => (
                  <div
                    key={numRow}
                    className={`${styles.sector__row} ${styles.sector__row_left}`}
                  >
                    {Array.from(Array(3).keys()).map((row, numSeat) => (
                      <span key={numSeat}>
                        {renderValueSeat({
                          seatValue: isPaid({
                            seat: numSeat + 1,
                            row: numRow + 4,
                            name: eventZone[2].name,
                          }),
                          id: eventZone[2].id,
                          seat: numSeat + 1,
                          row: numRow + 4,
                          name: eventZone[2].name,
                          price: eventZone[2].price,
                        })}
                      </span>
                    ))}
                  </div>
                ))}
              </>
            )}
          </div>
          {/* <div className={`${styles.sector__zone} ${styles.sector__zone_type_center}`}> */}
          <div className={`${styles.sector__zone}`}>
            {Array.from(Array(1).keys()).map((row, numRow) => (
              <div
                key={numRow}
                className={`${styles.sector__row} ${styles.sector__row_center}`}
              >
                {Array.from(Array(12 + numRow).keys()).map((row, numSeat) => (
                  <span key={numSeat}>
                    {renderValueSeat({
                      seatValue: isPaid({
                        seat: numSeat + (8 + numRow),
                        row: numRow + 1,
                        name: eventZone[1].name,
                      }),
                      id: eventZone[1].id,
                      seat: numSeat + (8 + numRow),
                      row: numRow + 1,
                      name: eventZone[1].name,
                      price: eventZone[1].price,
                    })}
                  </span>
                ))}
              </div>
            ))}
            {Array.from(Array(5).keys()).map((row, numRow) => (
              <div
                key={numRow}
                className={`${styles.sector__row} ${styles.sector__row_center}`}
              >
                {Array.from(Array(13 + numRow).keys()).map((row, numSeat) => (
                  <span key={numSeat}>
                    {renderValueSeat({
                      seatValue: isPaid({
                        seat: numSeat + 7,
                        row: numRow + 2,
                        name: eventZone[1].name,
                      }),
                      id: eventZone[1].id,
                      seat: numSeat + 7,
                      row: numRow + 2,
                      name: eventZone[1].name,
                      price: eventZone[1].price,
                    })}
                  </span>
                ))}
              </div>
            ))}
          </div>

          <div
            className={`${styles.sector__zone} ${styles['sector__zone_type_right-second']}`}
          >
            {Array.from(Array(1).keys()).map((row, numRow) => (
              <div key={numRow} className={`${styles.sector__row}`}>
                {Array.from(Array(7).keys()).map((row, numSeat) => (
                  <span key={numSeat}>
                    {renderValueSeat({
                      seatValue: isPaid({
                        seat: numSeat + 20,
                        row: numRow + 1,
                        name: eventZone[1].name,
                      }),
                      id: eventZone[1].id,
                      seat: numSeat + 20,
                      row: numRow + 1,
                      name: eventZone[1].name,
                      price: eventZone[1].price,
                    })}
                  </span>
                ))}
              </div>
            ))}
            {Array.from(Array(2).keys()).map((row, numRow) => (
              <div key={numRow} className={`${styles.sector__row}`}>
                {Array.from(Array(6).keys()).map((row, numSeat) => (
                  <span key={numSeat}>
                    {renderValueSeat({
                      seatValue: isPaid({
                        seat: numSeat + 20 + numRow,
                        row: numRow + 2,
                        name: eventZone[1].name,
                      }),
                      id: eventZone[1].id,
                      seat: numSeat + 20 + numRow,
                      row: numRow + 2,
                      name: eventZone[1].name,
                      price: eventZone[1].price,
                    })}
                  </span>
                ))}
              </div>
            ))}
            {eventZone[2] && (
              <>
                {Array.from(Array(2).keys()).map((row, numRow) => (
                  <div key={numRow} className={`${styles.sector__row}`}>
                    {Array.from(Array(5).keys()).map((row, numSeat) => (
                      <span key={numSeat}>
                        {renderValueSeat({
                          seatValue: isPaid({
                            seat: numSeat + 24,
                            row: numRow + 1,
                            name: eventZone[2].name,
                          }),
                          id: eventZone[2].id,
                          seat: numSeat + 24,
                          row: numRow + 1,
                          name: eventZone[2].name,
                          price: eventZone[2].price,
                        })}
                      </span>
                    ))}
                  </div>
                ))}
                {Array.from(Array(1).keys()).map((row, numRow) => (
                  <div key={numRow} className={`${styles.sector__row}`}>
                    {Array.from(Array(4).keys()).map((row, numSeat) => (
                      <span key={numSeat}>
                        {renderValueSeat({
                          seatValue: isPaid({
                            seat: numSeat + 5,
                            row: numRow + 3,
                            name: eventZone[2].name,
                          }),
                          id: eventZone[2].id,
                          seat: numSeat + 5,
                          row: numRow + 3,
                          name: eventZone[2].name,
                          price: eventZone[2].price,
                        })}
                      </span>
                    ))}
                  </div>
                ))}
                {Array.from(Array(1).keys()).map((row, numRow) => (
                  <div key={numRow} className={`${styles.sector__row}`}>
                    {Array.from(Array(3).keys()).map((row, numSeat) => (
                      <span key={numSeat}>
                        {renderValueSeat({
                          seatValue: isPaid({
                            seat: numSeat + 4,
                            row: numRow + 4,
                            name: eventZone[2].name,
                          }),
                          id: eventZone[2].id,
                          seat: numSeat + 4,
                          row: numRow + 4,
                          name: eventZone[2].name,
                          price: eventZone[2].price,
                        })}
                      </span>
                    ))}
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      )}
      {eventZone[2] && (
        <div className={`${styles.sector} ${styles.sector_type_additional}`}>
          {Array.from(Array(2).keys()).map((row, numRow) => (
            <div key={numRow} className={`${styles.sector__row}`}>
              {Array.from(Array(18).keys()).map((row, numSeat) => (
                <span key={numSeat}>
                  {renderValueSeat({
                    seatValue: isPaid({
                      seat: numSeat + 6,
                      row: numRow + 1,
                      name: eventZone[2].name,
                    }),
                    id: eventZone[2].id,
                    seat: numSeat + 6,
                    row: numRow + 1,
                    name: eventZone[2].name,
                    price: eventZone[2].price,
                  })}
                </span>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default SchemesSizeBig;
