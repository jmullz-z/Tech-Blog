const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utls/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelizeConnection = require('./config/sequelizeConnection');
const { Console } = require('console');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const models = require('./models');
const sequelize = require('./config/connection');

const sess = {
    secret: 'Suoer secret secret',
    cookie: {},
    resave: false,
    saveUnititialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app,engine('handlebars', hbs.engine);
app,set('view engine', 'handlebars');

app.use(express.json());
app,use(express.urlencoded({ extended: flase }));
app.use(express.static(path.join(_dirname, 'public')));

// app,use(require('./controllers/'));

sequelize.sync({force: true}).then(() => {
    app.listen(PORT, () => console.log("Now Listening"))
})


