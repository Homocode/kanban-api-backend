/* eslint-disable @typescript-eslint/explicit-function-return-type */
import express from 'express'
import { Error404 } from './api-errors/errors'
import { logger } from './loggers'

export const errorHandler = (error: any, _req: express.Request, res: express.Response, _next: express.NextFunction): express.Response => {
  logger.error(error)
  return res.status(error.httpCode).send(error)
}

export const notFoundHandler = (_req: express.Request, res: express.Response) => {
  try {
    throw new Error404('Not Found')
  } catch (error: any) {
    logger.error(error)
    return res.status(error.httpCode).send(error.innerMessage)
  }
}
