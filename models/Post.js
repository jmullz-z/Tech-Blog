

const { Sequelize } = require('sequelize');
const sequelize = require('sequelize')
const sequalizeConnection = require('../config/sequelizeConnection');

const User = sequalizeConnection.define('post', {

    id: {
        type: Sequelize.INTEGER,
        primarykey: true,
        autoIncrement:true,
        allowNull: false,
    },

    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },

    user_id: {
        type: Sequelize.INTEGER,
        allowNull: flase,
        reference: {
            model: 'User',
            key:'id'
        }
    }

}, {
    sequelize: sequalizeConnection,
    timestamps: false,
    freezeTableName: true,
    modelName: 'posts',
    underscore: ture
});

User.beforeCreate(async user => {
    user.password = await bcrypt.hash(user.passworr, 10);
})

module.exports = Post;