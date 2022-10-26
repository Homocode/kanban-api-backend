import { ICard, ICardscontainer, ObjectIdType } from '../types'
import { Priority, Status } from './enums'

const cardDefault = (): ICard => {
  return {
    assignment: '',
    priority: Priority.one,
    status: Status.notStarted
  }
}

const cardscontainerDefault = (userId: ObjectIdType): ICardscontainer => ({
  associateUserId: userId,
  title: 'New Column',
  cards: [cardDefault()]
})

export { cardscontainerDefault, cardDefault }
