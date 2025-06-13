require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const staticrouter=require('./routers/staticRouter')
const router = require('./routers/url')
const userrouter = require('./routers/user');
const cookieParser = require('cookie-parser');
const { checkforAuthentication } = require('./service/auth');
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
const port = 8000;
app.use(express.urlencoded({extended:false})); 
app.use(cookieParser());
app.use(checkforAuthentication);

app.use('/', staticrouter);
app.use('/url', router);
app.use('/user', userrouter);


mongoose.connect('mongodb://127.0.0.1:27017/short-url-project').then(()=>console.log("mongodb connected"));

app.listen(port,()=>console.log('server started'));



