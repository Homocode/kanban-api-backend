import { HttpStatusCode } from '../../utils/enums'
import { BaseError } from './base-error'

export class Error400 extends BaseError {
  constructor(message: string) {
    super('Bad Request', HttpStatusCode.BAD_REQUEST, message, true)
  }
}

export class Error404 extends BaseError {
  constructor(message: string) {
    super('Not Found', HttpStatusCode.NOT_FOUND, message, true)
  }
}

export class Error500 extends BaseError {
  constructor(message: string) {
    super('Internal Server Error', HttpStatusCode.INTERNAL_SERVER, message, true)
  }
}
