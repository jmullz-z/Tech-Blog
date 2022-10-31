cont router = require('express').Router();
const { Post, Comment, User } = require('../models/');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [user],
        });
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('hmmm what view should we render?', { posts });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/post/:id', async (req, res) => {
    try {
        const postData = await SomeModel.findByPk({
            incluse:[
                user,
                {
                    model: Comment,
                    include: [User],
                },
            ]
        });
    }
});