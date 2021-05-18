/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoContactsRepository.mjs')} obj.ContactsRepository
 */
export default ({ ContactsRepository }) => {
  return async ({ name, number }) => { // parameters
    const newPerson = {
      name: name,
      number: number
    }
    return ContactsRepository.add(newPerson)
  }
}
