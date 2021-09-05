const Column = require('./Column')
const columns = require('./columns')
const ForeignColumn = require('./ForeignColumn')

/**
 * Get all columns.
 *
 * @param {Column[]|ForeignColumn[]|Object[]} all
 * @returns {object}
 */
const schema = (all) => columns(all)

module.exports = schema
