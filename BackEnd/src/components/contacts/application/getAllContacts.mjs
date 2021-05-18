/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoContactsRepository.mjs')} obj.ContactsRepository
 */
export default ({ ContactsRepository }) => {
  return async () => { // parameters
    return ContactsRepository.getAll()
  }
}
