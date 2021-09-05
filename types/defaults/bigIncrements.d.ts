export = bigIncrements;
/**
 * Add auto incrementing big integer.
 *
 * @param {string} name
 * @returns {Column}
 */
declare function bigIncrements(name: string): Column;
import Column = require("../Column");
