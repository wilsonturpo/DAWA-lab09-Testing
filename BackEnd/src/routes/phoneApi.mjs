//  const router = require('express').Router()
import express from 'express'

//  const validationHandler = require('../utils/middlewares/validationHandler')
import validationHandler from '../utils/middlewares/validationHandler.mjs'

import {
  createContactSchema,
  getContactSchema,
  updateContactSchema,
  deleteContactSchema,
  getDocumentInfo
} from '../components/contacts/domain/contact.mjs'

import {
  getContacts,
  newContact,
  getContactById,
  updateContacto,
  deleteContact,
  getInfo
} from '../components/contacts/controller.mjs'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hola, esta es la ruta inicial, ingrese a api/persons')
})

router.get(
  '/api/persons',
  validationHandler(getContactSchema),
  getContacts
)

router.get(
  '/info',
  validationHandler(getDocumentInfo),
  getInfo
)

router.get(
  '/api/persons/:id',
  validationHandler(getContactSchema),
  getContactById
)

router.put(
  '/api/persons',
  validationHandler(updateContactSchema),
  updateContacto
)

router.delete(
  '/api/persons/:id',
  validationHandler(deleteContactSchema),
  deleteContact
)

router.post(
  //  hacer las validaciones aqui:
  // validationHandler(authSchema, 'headers')
  '/api/persons',
  validationHandler(createContactSchema),
  newContact
)

export default router
