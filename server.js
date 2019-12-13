const express = require('express');
const mongoose = require('mongoose');
//when needed
// const passport = require('passport');


const app = express();

// DB config
const db = require('./config/keys').MongoURI;

// Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Bodyparser
app.use(express.urlencoded({ extended: true }));

// Passport middleware when needed
// app.use(passport.initialize());
// app.use(passport.session());

// middleware so public folder can be used :)
app.use(express.static('public'));

// Routes
require('./routes/html-routes.js')(app);
app.use('/blogs', require('./routes/blogs.js'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
