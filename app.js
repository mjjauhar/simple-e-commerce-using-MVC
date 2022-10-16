// mongoDB connection 
const db = require('./config/connection');
db.connect((err)=>{
    if(err) console.log('connection error'+err);
    else console.log('Database connected to port http://localhost:27017/');
});

const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path')

const loginRoute = require('./routes/login');
const homepageRoute = require('./routes/home');
const adminRoute = require('./routes/admin');
const signupRoute = require('./routes/signup');

app.use(express.urlencoded({ extended: false }));
 
app.use(express.static(path.resolve(__dirname, 'public')));


app.set('view engine', 'hbs');

//login/sign-up
app.use('/', loginRoute);
app.use('/', homepageRoute);
app.use('/', adminRoute);
app.use('/', signupRoute);

app.listen(3005, () => {
    console.log('Server running on port http://localhost:3005/');
});
