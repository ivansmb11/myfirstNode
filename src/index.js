const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

// initializations
const app = express();

// settings
app.set('port',process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaulLayout: 'main',
    layoutsDir:  path.join(app.get('views'), 'layouts'),
    partialsSir : path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Global variables
app.use((req, res, next) => {
    next();
});

// Routes
app.use(require('./routes/index'));
app.use(require('./routes/authentication'));
app.use('/links',require('./routes/links'));

//TODO: 30:11

// Public

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});