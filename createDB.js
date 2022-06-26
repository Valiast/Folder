
var async = require("async")
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/all')
var Hero = require("./models/hero").Hero
var data = require('./data.js').data;



function open(callback){
    mongoose.connection.on("open",callback)
}

function dropDatabase(callback){
    var db = mongoose.connection.db
    db.dropDatabase(callback)
}

function createHeroes(callback){
    async.each(data, function(heroData, callback){
    var hero = new mongoose.models.Hero(heroData);
    hero.save(callback);
    },
    callback);
    };
    

function close(callback){
    mongoose.disconnect(callback)
}

function requireModels(callback){
    require("./models/hero").Hero
    async.each(Object.keys(mongoose.models),function(modelName){
    mongoose.models[modelName].ensureIndex(callback)
    },
    callback
    )
    }
    

async.series([
    open,
    dropDatabase,
    createHeroes,
    close
],
function(err,result){
    if(err) throw err
    console.log("ok")
})