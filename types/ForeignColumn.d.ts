export = ForeignColumn;
declare class ForeignColumn {
    constructor(column: any);
    column: any;
    /**
     * Reference column of another table.
     *
     * @param {String} column
     * @returns {ForeignColumn}
     */
    references(column?: string): ForeignColumn;
    /**
     * Reference table.
     *
     * @param {String} table
     * @returns {ForeignColumn}
     */
    on(table: string): ForeignColumn;
    /**
     * Add onDelete rule.
     *
     * @param {String} rule
     * @returns {ForeignColumn}
     */
    onDelete(rule: string): ForeignColumn;
    /**
     * Add onUpdate rule.
     *
     * @param {String} rule
     * @returns {ForeignColumn}
     */
    onUpdate(rule: string): ForeignColumn;
    /**
     * Get column object.
     *
     * @returns {object}
     */
    make(): object;
}
