const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');
const sequalizeConnection = require('../config/connection');

const Comment = sequalizeConnection.define('post', {

    id: {
        type: Sequelize.INTEGER,
        primarykey: true,
        autoIncrement:true,
        allowNull: false,
    },

    title: {
        type: Sequelize.toString,
        allowNull: false
    },

    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },

    post_id: {
        type: Sequelize.INTEGER,
        allowNull: flase,
        reference: {
            model: 'Post',
            key:'id'
        }
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
    timestamps: true,
    freezeTableName: true,
    modelName: 'comments',
    underscore: ture
});

User.beforeCreate(async user => {
    comment.password = await bcrypt.hash(user.passworr, 10);
})

module.exports = Comment;