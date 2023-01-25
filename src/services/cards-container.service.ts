import { CardscontainerModel, UserModel } from "../data-base/models";
import CardscontainerRepository from "../data-base/generic-repository-pattern/repositories/cards-container.repository";
import UserRepository from "../data-base/generic-repository-pattern/repositories/user.repository";
import { ICardscontainer, ObjectIdType, IUser } from "../types";
import { cardscontainerDefault } from "../utils/card-and-container-default";

const newCardscontainer = async (
  associateUserId: ObjectIdType
): Promise<ICardscontainer> => {
  const initialCardscontainerAndCard = cardscontainerDefault(associateUserId);
  const repository = new CardscontainerRepository(CardscontainerModel);
  const createdCardscontainer = (await repository.create(
    initialCardscontainerAndCard
  )) as ICardscontainer;

  return createdCardscontainer;
};

const removeCardscontainer = async (id: ObjectIdType): Promise<boolean> => {
  let documentIsDelete: boolean = false;
  const repository = new CardscontainerRepository(CardscontainerModel);
  const deletedCardscontainer = await repository.deleteOne(id);
  if (deletedCardscontainer != null) documentIsDelete = true;

  return documentIsDelete;
};

const getCardscontainersByUser = async (userInfo: IUser) => {
  const { name, password } = userInfo;
  const userRepository = new UserRepository(UserModel);
  const userId = await userRepository.find({ name: name, password: password });
  const repository = new CardscontainerRepository(CardscontainerModel);
  const userCardscontainers = await repository.find({
    associateUserId: userId,
  });

  return userCardscontainers;
};

const getCardscontainerById = async (
  id: ObjectIdType
): Promise<ICardscontainer[]> => {
  const repository = new CardscontainerRepository(CardscontainerModel);
  const foundCardscontainer = await repository.find({ _id: id });

  return foundCardscontainer;
};

export {
  newCardscontainer,
  removeCardscontainer,
  getCardscontainersByUser,
  getCardscontainerById,
};
