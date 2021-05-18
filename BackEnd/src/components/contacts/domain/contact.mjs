//  const Joi = require('joi')
import Joi from 'joi'

/*
const userId = Joi.string().regex(/^[0-9a-fA-F]{24}$/)

const userIdSchema = Joi.object({
  id: userId.required()
})
*/

const createContactSchema = Joi.object({
  name: Joi.string().required(),
  number: Joi.string().required()
})

const getContactSchema = Joi.object({
  //  id: Joi.string()
})

const updateContactSchema = Joi.object({
  id: Joi.string(),
  name: Joi.string(),
  number: Joi.string()
})

const deleteContactSchema = Joi.object({
  //  id: Joi.string()
})

const getDocumentInfo = Joi.object({
  //  id: Joi.string()
})

export {
  createContactSchema,
  getContactSchema,
  updateContactSchema,
  deleteContactSchema,
  getDocumentInfo
}
