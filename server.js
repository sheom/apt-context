if (process.env.NODE_ENV != 'production'){
   // require('dotenv').parse();
}

const express = require('express');
const path = require('path');
const app = express();
const expressLayouts = require('express-ejs-layouts');

const port = process.env.PORT || 3100;

const indexRouter = require('./router/index');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.set('layout', 'layouts/layout');
app.use(expressLayouts);

app.use(express.static('public'))

const mongoose = require('mongoose');
var dbURL = process.env.DATABSE_URL || "mongodb://localhost/context"
mongoose.connect(dbURL, { useNewUrlParser : true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', ()=> console.log('Connected to mongoose'))


app.use('/', indexRouter);



app.listen(port,()=>{
    console.log("App started on port:" +port);
});