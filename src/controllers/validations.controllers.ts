import { isString, isBoolean } from '../utils/types-validations'
import { IUser } from '../types'
import { Error400 } from '../error-handling/api-errors/errors'

const parseUserName = (userNameFromRequest: any): string => {
  if (!isString(userNameFromRequest)) {
    throw new Error400('User name is missing or the type is incorrect (must be a string)')
  }
  return userNameFromRequest
}

const parseUserPassword = (userPasswordFromRequest: any): string => {
  if (!isString(userPasswordFromRequest)) {
    throw new Error400('User password is missing or the type is incorrect (must be a string)')
  }
  return userPasswordFromRequest
}

const parseUserIsNew = (isNewFromrequest: any): boolean => {
  if (!isBoolean(isNewFromrequest)) {
    throw new Error400('User isNew is missing or the type is incorrect (must be a boolean)')
  }
  return isNewFromrequest
}

const validateUserData = (object: IUser): IUser | undefined => {
  const name = parseUserName(object.name)
  const password = parseUserPassword(object.password)
  const isNew = parseUserIsNew(object.isNew)

  return {
    name,
    password,
    isNew
  }
}

export default validateUserData
