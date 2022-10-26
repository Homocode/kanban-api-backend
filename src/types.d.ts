import { Types } from 'mongoose'
import { Priority, Status } from './utils/enums'

export type ObjectIdType = Types.ObjectId

export interface IUserDocument {
  _id?: ObjectIdType
  name: string
  password: string
  isNew?: boolean
}

export interface ICardDocument {
  _id?: ObjectIdType
  assignment: String
  priority: Priority
  status: Status
}

export type ICard = Omit<ICardDocument, '_id'>

export interface ICardscontainerDocument {
  _id?: ObjectIdType
  associateUserId: ObjectIdType
  title: String
  cards: ICard[]
}

export type IUser = Omit<IUserDocument, '_id'>
export type ICardscontainer = Omit<ICardscontainerDocument, '_id'>
