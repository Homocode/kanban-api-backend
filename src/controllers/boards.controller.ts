import { Request, Response, NextFunction } from "express";
import { newBoard, removeBoard } from "../services/boards.services";
import { userService, cardscontainerService } from "../services";
import { ObjectIdType, IUser } from "../types";
import validateUserData from "./validations.controllers";

const createBoard = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<any, Record<string, any>> | undefined> => {
  try {
    const validatedUserData = validateUserData(req.body) as IUser;
    const userInfoFromDb = await userService.getUserId(validatedUserData);
    const userId = userInfoFromDb.find(
      (element) => element._id
    ) as unknown as ObjectIdType;
    await newCardscontainer(userId);
    const allUserCardscontainers =
      await cardscontainerService.getCardscontainersByUser(validatedUserData);
    return res.status(201).json(allUserCardscontainers);
  } catch (e) {
    next(e);
  }
};

const deleteBoard = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | undefined> => {
  try {
    const validatedUserData = validateUserData(req.body) as IUser;
    const cardscontainerId: ObjectIdType = req.params
      .id as unknown as ObjectIdType;
    await removeCardscontainer(cardscontainerId);
    const cardsConteinersAfterDeletion = await getCardscontainersByUser(
      validatedUserData
    );
    return res.status(200).json(cardsConteinersAfterDeletion);
  } catch (e) {
    next(e);
  }
};

export { createBoard, deleteBoard };
