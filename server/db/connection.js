const monk = require('monk');
const db = monk('localhost/vue-exam');

module.exports = db;
