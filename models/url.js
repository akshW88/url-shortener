const express = require('express');
const { applyTimestamps } = require('../../../short-url/models/url');
const { default: mongoose } = require('mongoose');

const Schema = new mongoose.Schema({
    actualUrl:{
        type:String,
        required:true,
    },
    shortid:{
        type:String,
        required:true,
    },
    
},{timestamps:true});

const URL = mongoose.model('urls',Schema);

module.exports=URL;