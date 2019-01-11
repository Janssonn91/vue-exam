const monk = require('monk');
const db = monk('localhost/vue-auth');

module.exports = db;
