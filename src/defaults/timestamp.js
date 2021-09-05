const Column = require('../Column')

/**
 * Create a timestamp column.
 *
 * @param {string} name
 * @returns {Column}
 */
const timestamp = (name) => {
	const column = new Column(name, 'timestamp')

    return column
}

module.exports = timestamp
