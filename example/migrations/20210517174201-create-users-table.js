'use strict';

const {
    id,
    string,
    timestamp,
    timestamps,
    schema
} = require("../../src");

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
    dbm = options.dbmigrate;
    type = dbm.dataType;
    seed = seedLink;
};

exports.up = function (db) {
    return db.createTable('users', schema([
        id(),
        string('name'),
        string('email').unique(),
        string('password'),
        timestamp('email_verified_at').nullable(),
        timestamps(),
    ]));
};

exports.down = function (db) {
    return db.dropTable('users');
};

exports._meta = {
    "version": 1
};
