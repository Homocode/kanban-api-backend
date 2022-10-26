/* eslint-disable @typescript-eslint/explicit-function-return-type */
import express from 'express'
import { Error404 } from '../api-errors/errors'

export const errorHandler = (error: any, _req: express.Request, res: express.Response, _next: express.NextFunction): express.Response => {
  console.log(error)
  return res.status(error.httpCode).send(error)
}

export const notFoundHandler = (_req: express.Request, res: express.Response) => {
  try {
    throw new Error404('Not Found')
  } catch (error: any) {
    return res.status(error.httpCode).send(error)
  }
}
