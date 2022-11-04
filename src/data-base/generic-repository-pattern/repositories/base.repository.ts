/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { FilterQuery, Model, UpdateQuery } from 'mongoose'
import { Error500 } from '../../../error-handling/api-errors/errors'
import { ICrud } from '../interfaces'
import { ObjectIdType } from '../../../types'

const mongooseError = (error: any) => {
  return `Mongoose ${error.name}`
}

export abstract class BaseRepository<T> implements ICrud<T> {
  constructor(public readonly model: Model<T>) {
    this.model = model
  }

  async create(item: T): Promise<T> {
    try {
      const result = await this.model.create(item)
      return result
    } catch (e: any) {
      throw new Error500(mongooseError(e))
    }
  }

  async updateOneCard(filter: FilterQuery<T>, update: UpdateQuery<T>): Promise<T | any> {
    try {
      const result = await this.model.updateOne(filter, update)
      return result
    } catch (e: any) {
      throw new Error500(mongooseError(e))
    }
  }

  async deleteOne(id: ObjectIdType): Promise<T | null> {
    try {
      const result = await this.model.findByIdAndDelete(id)
      return result
    } catch (e: any) {
      throw new Error500(mongooseError(e))
    }
  }

  async find(filters: FilterQuery<T>): Promise<T[]> {
    try {
      const result = await this.model.find(filters)
      return result
    } catch (e: any) {
      throw new Error500(mongooseError(e))
    }
  }
}
