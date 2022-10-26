import { Request, Response, NextFunction } from 'express'
import { userService } from '../services/index.services'
import { cardscontainerService } from '../services/index.services'
import { IUser } from '../types'
import validateUserData from './validations.controllers'

const handleUser = async (req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined> => {
  try {
    const validatedUserData = validateUserData(req.body) as IUser
    if (validatedUserData.isNew === true) {
      const userData = await userService.newUser(validatedUserData)
      return res.status(201).json(userData)
    } else {
      const userData = await cardscontainerService.getCardscontainersByUser(validatedUserData)
      return res.status(200).send(userData)
    }
  } catch (e: any) {
    next(e)
  }
}

export { handleUser }
