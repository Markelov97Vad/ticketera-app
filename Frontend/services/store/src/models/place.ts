export interface IZone {
  id: number;
  name: string;
  row: number;
  seat: number;
  price: number;
}

export interface IOrder {
  sum: number;
  tickets: IZone[];
  orderNumber: number;
}
