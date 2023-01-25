import { Types } from "mongoose";
import { Priority, Status } from "./utils/enums";

export type ObjectIdType = Types.ObjectId;

export interface IUser {
  _id?: ObjectIdType;
  name: string;
  password: string;
  isNew?: boolean;
}

export interface ICard {
  _id?: ObjectIdType;
  assignment: String;
  priority: Priority;
  status: Status;
}

export interface ICardscontainer {
  _id?: ObjectIdType;
  associateUserId: ObjectIdType;
  title: String;
  cards: ICard[];
}
