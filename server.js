const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session)

const connectDB = require('./config/db');

dotenv.config({path:'./config/config.env'});

// Passport config
require('./config/passport')(passport)

connectDB();

const app = express();

// Body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

if(process.env.NODE_ENV === 'development'){
	app.use(morgan('dev'));
};

// Sessions
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Routes
app.use('/', require('./routes/api/dashboard'));
app.use('/auth', require('./routes/api/auth'));
app.use('/flashcard', require('./routes/api/flashcard'));

const port = process.env.PORT || 4000;

app.listen(port, () => {
	console.log(`Server running in ${process.env.NODE_ENV} on localhost:${port}`);
});
