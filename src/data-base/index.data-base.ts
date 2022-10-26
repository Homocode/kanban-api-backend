import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const { connect } = mongoose

const DB_USERNAME: string = process.env.DB_USERNAME as string
const DB_PASSWORD: string = process.env.DB_PASSWORD as string

const connectionString = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.kdebkjh.mongodb.net/kanban-db?retryWrites=true&w=majority`

export const dbConnect = (): any => {
  connect(connectionString)
    .then(() => console.log('DB connected!'))
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    .catch((e: any) => console.log(`Error connecting to the data base: ${e.message}`))
}
