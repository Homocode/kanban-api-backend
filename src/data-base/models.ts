import { Schema, model } from 'mongoose'
import { IUser, ICard, ICardscontainer } from '../types'

const cardSchema = new Schema<ICard>({
  assignment: String,
  priority: Number,
  status: Number
})

const cardscontainerSchema = new Schema<ICardscontainer>({
  associateUserId: Schema.Types.ObjectId,
  title: String,
  cards: [cardSchema]
}

)

const userSchema = new Schema<IUser>({
  name: String,
  password: String
}
)

const UserModel = model('user', userSchema)
const CardscontainerModel = model('cardscontainer', cardscontainerSchema)

export { CardscontainerModel, UserModel }