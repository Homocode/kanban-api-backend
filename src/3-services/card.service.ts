/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { CardscontainerModel } from '../data-base/models'
import { CardRepository } from '../data-base/generic-repository-pattern/repositories/card.repository'
import { ObjectIdType } from '../types'
import { cardDefault } from '../utils/card-and-container-default'
import { getCardscontainerById } from './cards-container.service'

const newCard = async (cardscontainerId: ObjectIdType) => {
  const defaultCard = cardDefault()
  const repository = new CardRepository(CardscontainerModel)
  await repository.updateOneCard({ _id: cardscontainerId }, { $push: { cards: defaultCard } })
  const updateCardscontainer = await getCardscontainerById(cardscontainerId)
  return updateCardscontainer
}

const removeCard = async (cardscontainerId: ObjectIdType, cardId: ObjectIdType) => {
  const repository = new CardRepository(CardscontainerModel)
  const removedCard = await repository.updateOneCard({ _id: cardscontainerId }, { $pull: { cards: { _id: cardId } } })
  return removedCard
}

export { newCard, removeCard }
