import { IZone } from './place';
import { ITicket } from './ticket';
import { IUserPersonalData } from './user';

export interface IEventCard {
  _id: string;
  name: string;
  location: string;
  image: string;
  time_event: string;
  date_event: string;
  likes: IUserPersonalData[];
}

export interface IEvent {
  _id: string;
  type_event: string;
  place: {
    name: string;
    address: string;
    city: string;
    point?: string;
    type: {
      name: string;
      zone: IZone[];
    };
  };
  name: string;
  location: string;
  description: string;
  date_event: string;
  time_event: string;
  image: string;
  likes: IUserPersonalData[];
  tickets: ITicket[];
}
