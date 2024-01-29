import { IEvent } from './event';
import { IUserTicket } from './user';

export interface ITicket {
  _id: string;
  name: string;
  row: number;
  seat: number;
  price: number;
  guest: IUserTicket;
}

export interface IEventTicket extends IEvent {
  ticket: ITicket[];
}
