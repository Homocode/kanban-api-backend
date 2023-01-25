import { UserModel } from "../data-base/models";
import UserRepository from "../data-base/generic-repository-pattern/repositories/user.repository";
import { ICardscontainer, IUser, ObjectIdType } from "../types";
import { newCardscontainer } from "./cards-container.service";

const getUserId = async (
  userInfo: IUser
): Promise<ObjectIdType | undefined> => {
  const { name, password } = userInfo;
  const repository = new UserRepository(UserModel);
  const userDocument = await repository.find({
    name: name,
    password: password,
  });
  const userId = userDocument[0]._id;
  return userId;
};

const newUser = async (userInfo: IUser): Promise<ICardscontainer[]> => {
  const repository = new UserRepository(UserModel);
  const createdUser = (await repository.create(userInfo)) as IUser;
  const userId = createdUser._id as ObjectIdType;
  const associateCardscontainer = await newCardscontainer(userId);

  return [associateCardscontainer];
};

export { getUserId, newUser };
