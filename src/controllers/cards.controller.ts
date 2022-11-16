/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from "express";
import { newCard, removeCard } from "../services/card.service";
import { getCardscontainerById } from "../services/cards-container.service";
import { ObjectIdType } from "../types";

const createCard = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const cardscontainerId = req.body.cardscontainerId;
    const updatecardscontainer = await newCard(cardscontainerId);
    return res.status(201).json(updatecardscontainer);
  } catch (e) {
    next(e);
  }
};

const deleteCard = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const cardscontainerId = req.params
      .cardscontainerid as unknown as ObjectIdType;
    const cardId = req.params.id as unknown as ObjectIdType;
    await removeCard(cardscontainerId, cardId);
    const CardConteinerAfterDeletion = await getCardscontainerById(
      cardscontainerId
    );
    return res.status(201).json(CardConteinerAfterDeletion);
  } catch (e) {
    next(e);
  }
};

export { createCard, deleteCard };
