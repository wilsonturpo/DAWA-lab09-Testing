/*
const MongoContactsRepository = require('./infraestructure/MongoContactsRepository')
const getAllContacts = require('./application/getAllContacts')
const createContact = require('./application/createContact')
const getContact = require('./application/getContact')
const updateContact = require('./application/updateContact')
const deleteById = require('./application/deleteContact')
const getContactsInfo = require('./application/getContactsInfo')
*/
import MongoContactsRepository from './infraestructure/MongoContactsRepository.mjs'
import getAllContacts from './application/getAllContacts.mjs'
import createContact from './application/createContact.mjs'
import getContact from './application/getContact.mjs'
import updateContact from './application/updateContact.mjs'
import deleteById from './application/deleteContact.mjs'
import getContactsInfo from './application/getContactsInfo.mjs'

const ContactsRepository = new MongoContactsRepository()

/**
 * @param {import('express').Request} _
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const getContacts = async (_, res, next) => {
  try {
    const query = getAllContacts({ ContactsRepository })
    const contacts = await query()
    res.status(200).json({
      data: contacts,
      message: 'Contacts listed'
    })
  } catch (e) {
    next(e)
  }
}

const newContact = async (req, res, next) => {
  try {
    const query = createContact({ ContactsRepository })
    const contact = await query(req.body)
    res.status(201).json({
      data: contact,
      message: 'Contact created'
    })
  } catch (e) {
    next(e)
  }
}

const getContactById = async (req, res, next) => {
  try {
    const query = getContact({ ContactsRepository })
    const contact = await query(req.params)
    res.status(200).json({
      data: contact,
      message: 'Contact listed'
    })
  } catch (e) {
    next(e)
  }
}

const updateContacto = async (req, res, next) => {
  try {
    const query = updateContact({ ContactsRepository })
    const contact = await query(req.body)
    res.status(201).json({
      data: contact,
      message: 'Contact updated'
    })
  } catch (e) {
    next(e)
  }
}

const deleteContact = async (req, res, next) => {
  try {
    const query = deleteById({ ContactsRepository })
    const contact = await query(req.params)
    res.status(200).json({
      data: contact,
      message: 'Contact deleted'
    })
  } catch (e) {
    next(e)
  }
}

const getInfo = async (_, res, next) => {
  try {
    const query = getContactsInfo({ ContactsRepository })
    const info = await query()
    res.status(200).json({
      data: info,
      message: 'Info showed'
    })
  } catch (e) {
    next(e)
  }
}

export {
  getContacts,
  newContact,
  getContactById,
  updateContacto,
  deleteContact,
  getInfo
}

/*
    // Validar existencia de nombre y número
    if (name === undefined || number === undefined) {
      return res.status(400).json({
        error: 'Debe ingresar el nombre y número del contacto'
      })
    }

    // Validar existencia del nombre del usuario
    const resultado = persons.find(persona => persona.name === name)
    if (resultado) {
      return res.status(400).json({
        error: `El nombre ${name} ya está registrado`
      })
    }

  const getContactById = async (req, res, next) => {
  try {
    const query = getContact({ ContactsRepository })
    const contact = await query(req.body)
    console.log('ID:', req.params.id)
    res.status(200).json({
      data: contact,
      message: 'Contacts listed'
    })
  } catch (e) {
    next(e)
  }
}
*/
