const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
let sequelize;

if (process.env.JAWSDB_URL) {
   Sequelize(process.env.JAWSDB_URL);
} else {
   Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });
}

module.exports = sequelize;