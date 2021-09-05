export = columns;
/**
 * Get all columns.
 *
 * @param {Column[]|ForeignColumn[]|Object[]} all
 * @returns {object} results
 */
declare function columns(all: Column[] | ForeignColumn[] | any[], results?: {}): object;
import Column = require("./Column");
import ForeignColumn = require("./ForeignColumn");
