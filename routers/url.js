const express = require('express');
const router = express.Router();
const { nanoid } = require('nanoid');
const URL=require('../models/url');
router.post('/',async(req,res)=>{
    const shortid=nanoid(7);
    const actualUrl=req.body.url;
    await URL.create({
        actualUrl:actualUrl,
        shortid:shortid,    
        visitHistory:[]
    });
    res.render('home',{message:null, shortid });
});

router.get('/:shortid',async(req,res)=>{
    const shortid=req.params.shortid;
   const entry=await URL.findOne({shortid});
   if(!entry){
    res.redirect('/');
   }
   await entry.updateOne({$push:{visitHistory:Date.now()}});
    res.redirect(entry.actualUrl);
});


module.exports=router;
