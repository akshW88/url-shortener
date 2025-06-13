    const express = require('express');
    const router = express.Router();

    router.get('/', (req,res)=>{
        if(req.cookies?.token==null){
            return res.render('login',{message:"Not logged in. Log in to proceed."})
        }
        res.render('home',{message:null,shortid:null});
    })

    router.get('/login', (req,res)=>{
        if(req.cookies?.token!=null){
        return res.render('home', { shortid: null, message: "Already signed in" });
        }
       return  res.render('login',{message:null});
    })

    router.get('/signUp', (req,res)=>{
        if(req.cookies?.token!=null){
        return res.render('home', { shortid: null, message: "Already signed in" });
        }
        return res.render('signUp',{message:null});
    })

    router.post('/logout', (req, res) => {
    res.clearCookie('token');
    return res.redirect('/login');
});

    module.exports=router;