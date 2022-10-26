/* eslint-disable @typescript-eslint/method-signature-style */
import { FilterQuery, UpdateQuery } from 'mongoose'
import { ObjectIdType } from '../../types'

export interface ICrud<T> {
  create(item: T): Promise<T>
  updateOneCard(filters: FilterQuery<T>, update: UpdateQuery<T>): Promise<T>
  deleteOne(id: ObjectIdType): Promise<T | null>
  find(filters: FilterQuery<T>): Promise<T[]>
}
