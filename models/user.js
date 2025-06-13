const express = require('express');
const { applyTimestamps } = require('../../../short-url/models/url');
const { default: mongoose } = require('mongoose');

const Schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
    
},{timestamps:true});

const User = new mongoose.model('users',Schema);

module.exports=User;