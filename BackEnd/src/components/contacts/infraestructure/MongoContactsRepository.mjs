//  const MongoLib = require('../../../lib/mongo')

import MongoLib from '../../../lib/mongo.mjs'

class MongoContactsRepository { // implement an interface
  constructor () {
    // super()
    this.collection = 'persons'
    this.mongoDB = new MongoLib()
  }

  async add (contact) {
    const _id = await this.mongoDB.create(this.collection, contact)
    return { _id, ...contact }
  }

  async getAll () {
    return this.mongoDB.getAll(this.collection)
  }

  async update (id, user) {
    return this.mongoDB.update(this.collection, id, user)
  }

  async delete (id) {
    return this.mongoDB.delete(this.collection, id)
  }

  async getById (id) {
    //  return await this.mongoDB.get(this.collection, null, { id })
    return await this.mongoDB.get(this.collection, id, null)
  }

  async getDocumentInfo () {
    return await this.mongoDB.getInfo(this.collection)
  }
}

export default MongoContactsRepository
