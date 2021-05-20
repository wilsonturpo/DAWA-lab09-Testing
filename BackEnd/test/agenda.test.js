import { response } from 'express'
import supertest from 'supertest'
import app from '../src/index'
import getAllContacts from '../src/components/contacts/application/getAllContacts'

const api = supertest(app)
supertest('Phone agend are returned as json', async() =>{
  await api
    .get('/api/persons')
    .expect(200)
  expect('Content-Type', /application\/json/)
})

supertest('return are a persons', async() =>{
  const response = await api.get('/api/persons')
  expect(response.body)
})

supertest('the first person is ', async () => {
  const response = await api.get('/api/persons')
  const contents = response.body.map(person => person.content)
  expect(contents).toContain('Arto Hellas')
})

supertest('a valid person can be added', async () => {
  const newPerson = {
    name: 'Proximamente async/await',
    number: '99999999'
  }

  await api
    .post('/api/persons')
    .send(newPerson)
    .expect(200)
    .expect('Content-Type', /application\/json/)

  const response = await api.get('/api/persons')

  const contents = response.body.map(person => person.content)

  expect(contents).toContain(newPerson.content)
})

supertest('person without content is not added', async () => {
  const newPerson = {}

  await api
    .post('/api/persons')
    .send(newPerson)
    .expect(400)
    .expect('Content-Type', /application\/json/)

  const response = await api.get('/api/persons')

  expect(response.body).toHaveLength(response.length)
})

supertest('a person can be deleted', async() => {
  const { response } = await getAllContacts()
  const { body:persons } = response
  const personToDelete = person[0]

  await api
    .delete('/api/persons/${personToDelete.id}')
    .expect(204)
  const { contents } = await getAllContacts()
  expect(contents).not.toContain(personToDelete.content)
})

supertest('a person that do not exist can not be deleted', async() => {
  await api
    .delete('/api/persons/123456789')
    .expect(400)
  const { contents } = await getAllContacts()
  expect(contents.body).toHaveLength(getAllContacts.length)
})