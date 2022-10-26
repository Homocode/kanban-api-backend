/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import { user, cardscontainer, card } from '../controllers/index.controllers'
const router = express.Router()

router.post('/user', user.handleUser)
router.post('/cards-container', cardscontainer.createCardscontainer)
router.post('/card', card.createCard)

router.delete('/cards-container/:id', cardscontainer.deleteCardscontainer)
router.delete('/card/:cardscontainerid/:id', card.deleteCard)
export { router }
