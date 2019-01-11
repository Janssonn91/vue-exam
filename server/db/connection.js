const monk = require('monk');
const db = monk('localhost/webshop');

module.exports = db;
