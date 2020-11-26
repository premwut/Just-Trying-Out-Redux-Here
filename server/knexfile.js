const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        port: '3307',
        user: 'root',
        pasword: 'zaWarudo',
        database: 'knex_demo'
    }
});

module.exports = knex;