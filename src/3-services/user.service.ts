import { UserModel } from "../data-base/models";
import UserRepository from "../data-base/generic-repository-pattern/repositories/user.repository";
import {
  ICardscontainerDocument,
  IUser,
  IUserDocument,
  ObjectIdType,
} from "../types";
import { newCardscontainer } from "./cards-container.service";

const getUserId = async (userInfo: IUser): Promise<IUserDocument[]> => {
  const { name, password } = userInfo;
  const repository = new UserRepository(UserModel);
  const userDocument = await repository.find({
    name: name,
    password: password,
  });

  return userDocument;
};

const newUser = async (userInfo: IUser): Promise<ICardscontainerDocument[]> => {
  const repository = new UserRepository(UserModel);
  const createdUser = (await repository.create(userInfo)) as IUserDocument;
  const userId = createdUser._id as ObjectIdType;
  const associateCardscontainer = await newCardscontainer(userId);

  return [associateCardscontainer];
};

export { getUserId, newUser };
