export = schema;
/**
 * Get all columns.
 *
 * @param {Column[]|ForeignColumn[]|Object[]} all
 * @returns {object}
 */
declare function schema(all: Column[] | ForeignColumn[] | any[]): object;
import Column = require("./Column");
import ForeignColumn = require("./ForeignColumn");
