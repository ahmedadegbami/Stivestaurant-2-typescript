export interface Reservation {
  _id: string;
  name: string;
  phone: string;
  numberOfPeople: number;
  dateTime: string;
  smoking: boolean;
  specialRequests: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
