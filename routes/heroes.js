var express = require('express');
var router = express.Router();
var Hero = require("../models/hero").Hero  



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маошрутов, начинающихся с heroes');
});

router.get('/:nick', function(req, res, next) {
    Hero.findOne({nick:req.params.nick}, function(err,hero){
    if(err) return next(err)
    if(!hero) return next(new Error("Нет такого героя в этой книжке"))
    res.render('hero', {
    title: hero.title,
    picture: hero.avatar,
    desc: hero.desc
    })
    })
    })
    

module.exports = router;
