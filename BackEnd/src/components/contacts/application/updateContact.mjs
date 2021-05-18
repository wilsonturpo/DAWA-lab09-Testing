/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoContactsRepository.mjs')} obj.ContactsRepository
 */
export default ({ ContactsRepository }) => {
  return async ({ id, name, number }) => { // parameters
    const newPerson = {
      name: name,
      number: number
    }
    return ContactsRepository.update(id, newPerson)
  }
}
