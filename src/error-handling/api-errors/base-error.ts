import { HttpStatusCode } from '../../utils/enums'

// BaseError extends Error adding aditional information (name, httpcode, isOperational)
export class BaseError extends Error {
  public readonly name: string
  public readonly httpCode: HttpStatusCode
  public readonly isOperational: boolean

  constructor (name: string, httpCode: HttpStatusCode, message: string, isOperational: boolean) {
    super(message) // Passing the parameter message of the Error object to the constructor of Error
    this.name = name
    this.httpCode = httpCode
    this.isOperational = isOperational
    this.message = message
    Error.captureStackTrace(this)
  }
}
