const User = require('../../../models/user')
const utils = require('../../../middleware/utils')

/**
 * Gets profile from database by id
 * @param {string} id - user id
 */
const getProfileFromDB = (id) => {
  return new Promise((resolve, reject) => {
    User.findById(id, '-_id -updatedAt -createdAt', (err, user) => {
      utils.itemNotFound(err, user, reject, 'NOT_FOUND')
      resolve(user)
    })
  })
}

module.exports = { getProfileFromDB }
