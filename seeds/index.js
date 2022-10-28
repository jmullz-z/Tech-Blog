

const databaseConnection = require('.../config/sequelizeConnection')
const {
    User,
    Post,
    Comment,
} = require('../models');
const users = [

{
    username: 'Willie',
    passowrd: 'Willieluvsdogz1'
},

{
    username: 'Carly',
    passowrd: 'Carlyluvsdogz12'
},

{
    username: 'Charlotte',
    passowrd: 'Charluvsdogz123'
}

]

const Posts = [
    {
    title: 'why are dogs awesome',
    content: 'they luv humans',
    user_id: 2
    },

    {
        title: 'why do cats rule',
        content: 'they snuggle humans',
        user_id: 1
    },

    {
    title: 'why do brids run the kingdom',
    content: 'they talk to everyone in the kingdom',
    user_id: 3
    }
]

const comments = [
    {
        content: 'these aniamals are crazy',
        user_id: 3
    }

    {
        content: 'actually, cats drool',
        user_id: 1
    }
]

{async ( =>  )}