const express = require('express');
const User = require('../models/user');
const { SetUser } = require('../service/auth');
const router = express.Router();

router.post('/signUp', async (req, res) => {
    const { name, email, password } = req.body;
    const entry = await User.findOne({ email });

    if (entry != null) {
        return res.render('signUp', { message: "Email id already registered" });
    }
    if(!name || !email || !password){
        return res.render('signUp',{message:"Fill out all fields"});
    }
    await User.create({ name, email, password });  
    return res.render('login',{message:"Sign Up sucessful. Log in to proceed"});
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const entry = await User.findOne({ email, password });

    if (!entry) {
        return res.render('login', { message: "Incorrect email/password" });
    }
    const token = SetUser(email);
    res.cookie('token',token)
    return res.redirect('/');
});

module.exports = router;
