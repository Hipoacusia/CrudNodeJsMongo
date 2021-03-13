const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

// Connection to DB
mongoose.connect('mongodb://localhost/crud-mongo')
  .then(db => console.log('Db connect'))
  .catch(err => console.log(err));

// Import Routes
const indexRoutes = require('./routes/index');

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

// Midelwares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/',indexRoutes);

// Starting The Server
app.listen(app.get('port'), () =>{
  console.log(`Server on port ${app.get('port')}`);
});
