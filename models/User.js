const { Sequelize } = require('sequelize');
const sequelize = require('sequelize')
const sequalizeConnection = require('../config/sequelizeConnection');
const bcrypt = require('bcrypt');

const User = sequalizeConnection.define('usser', {

    id: {
        type: Sequelize.INTEGER,
        primarykey: true,
        autoIncrement:true,
        allowNull: false,
    },

    username: {
        type: Sequelize.toString,
        allowNull: false,
        validate: {
            len:[3],
        }
    },

    password: {
        type: Sequelize.STRING,
        allowNull: false,
        valiadte: {
            len: [5, 60]
        }
    }

}, {
    sequelize: sequalizeConnection,
    timestamps: false,
    freezeTableName: true,
    modelName: 'users',
    underscore: ture
});

User.beforeCreate(async user => {
    console.log('intercepte ata: ', user);
    user.password = await bcrypt.hash(user.passworr, 10);
})

module.exports = User;