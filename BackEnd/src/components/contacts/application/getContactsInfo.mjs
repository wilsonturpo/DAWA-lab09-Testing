/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoContactsRepository.mjs')} obj.ContactsRepository
 */
export default ({ ContactsRepository }) => {
  return async () => {
    return ContactsRepository.getDocumentInfo()
  }
}
