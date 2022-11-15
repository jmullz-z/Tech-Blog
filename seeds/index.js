

const databaseConnection = require('.../config/sequelizeConnection')
const {
    User,
    Post,
    Comment,
} = require('../models');
const users = [

{
    username: 'Dingo',
    passowrd: 'Dingothedingus'
},

{
    username: 'Bonkers',
    passowrd: 'BonkersandPeaches'
},

{
    username: 'Fiona',
    passowrd: 'Fionathehorse'
}

]

const Posts = [
    {
    title: 'what is feathery and flightless and can kill man and lion aklike',
    content: 'the ostrich',
    user_id: 2
    },

    {
        title: 'what large animal that you would not expect weighs less then the tounge of a blue whale',
        content: 'elephants',
        user_id: 1
    },

    {
    title: 'which fish are all born male and only change sex to become a dominant female',
    content: 'the clownfish',
    user_id: 3
    }
]

const comments = [
    {
        content: 'fun fact',
        user_id: 3
    },

    {
        content: 'animals are amazing',
        user_id: 1
    }
]

const plantSeeds = async () => {

    await users.bulkCreate(users, {individualHooks: true});
    await Post.bulkCreate(posts);
    await comments.bulkCreate(comments);
}

plantSeeds();
