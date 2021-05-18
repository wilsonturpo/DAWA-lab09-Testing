import mongoDriver from 'mongodb'

//  const { MongoClient, ObjectId } = require('mongodb')
//  const { config } = require('../config')

import { config } from '../config.mjs'

const { MongoClient, ObjectId } = mongoDriver

const MONGO_URI = config.mongo.uri
const MONGO_DB = config.mongo.db

class MongoLib {
  constructor () {
    this.client = new MongoClient(MONGO_URI, {
      useUnifiedTopology: true
    })
    this.dbName = MONGO_DB
  }

  /**
   * @return {Promise<import('mongodb').Db>} database
   */
  async connect () {
    if (!MongoLib.connection) {
      MongoLib.connection = new Promise((resolve, reject) => {
        console.log('executing promise')
        this.client.connect(err => {
          if (err) {
            return reject(err)
          }
          console.log('Connected succesfully to mongo')
          resolve(this.client.db(this.dbName))
        })
      })
    }

    return MongoLib.connection
  }

  async getAll (collection, query) {
    const db = await this.connect()
    //  console.log("TOTAL: ", await db.collection(collection).countDocuments())
    return db.collection(collection).find(query).toArray()
  }

  async get (collection, id, query = null) {
    const db = await this.connect()
    query = query || { _id: ObjectId(id) }
    return db.collection(collection).findOne(query)
  }

  async create (collection, data) {
    const db = await this.connect()

    //  Verificamos que no ingresen usuarios con los mismos datos
    const user = await this.get(collection, null, data)
    if (user) {
      throw new Error('EL usuario ya existe!')
    } else {
      const result = await db.collection(collection).insertOne(data)
      return result.insertedId
    }
  }

  async update (collection, id, data) {
    const db = await this.connect()
    const result = db.collection(collection).updateOne({ _id: ObjectId(id) }, { $set: data }, { upsert: true })
    return result.upsertedId || id
  }

  async delete (collection, id) {
    const db = await this.connect()
    await db.collection(collection).deleteOne({ _id: ObjectId(id) })
    return id
  }

  async getInfo (collection) {
    const db = await this.connect()
    const total = await db.collection(collection).countDocuments()
    const datetime = new Date()
    const result = `Phoneboook has info for  ${total} people ${datetime}`
    return result
  }
}

export default MongoLib

/*
    if (!MongoLib.connection) {
      MongoLib.connection = (async () => {
        await this.client.connect()
        console.log('connected succesfully to mongo')
        return this.client.db(this.dbName)
      })() // return a promise execution to all dependent wait one time
    }
*/
