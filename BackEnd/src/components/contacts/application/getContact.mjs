/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoContactsRepository.mjs')} obj.ContactsRepository
 */
export default ({ ContactsRepository }) => {
  return async ({ id }) => {
    if (!id) throw new Error('User does not exist')
    return ContactsRepository.getById(id)
  }
}
