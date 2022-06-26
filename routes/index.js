var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


  /* Страница Рика Граймс */
  router.get('/rick', function(req, res, next) {
    res.render('hero', 
    {
      title: "Рик Граймс",
      picture: "/images/rick.jpg",
      desc: "Главный герой. Бывший офицер полиции из департамента шерифа Округа Кинг."
    });
  });
    /* Страница Шейна Уолш */
    router.get('/shein', function(req, res, next) {
    res.render('hero', 
    {
      title: "Шейн Уолш",
      picture: "images/shein.jpg",
      desc: "Лучший друг Рика Граймса со времён высшей школы, а позднее напарник в полиции Округа Кинг."
    })
    });
    /* Страница Дерила Диксона */
    router.get('/derial', function(req, res, next) {
      res.render('hero', 
      {
        title: "Дерил Диксон",
        picture: "/images/derial.jpg",
        desc: "Младший брат Мёрла. Являясь отличным охотником и следопытом, имеет навыки выживания, Дэрил играет важную роль в группе."
      })
    });
    /* Страница Карла Граймс  */
    router.get('/karl', function(req, res, next) {
      res.render('hero', 
      {
        title: "Карл Граймс",
        picture: "/images/karl.jpg",
        desc: "Один из главных персонажей . Сын Рика и Лори Граймс."
      })
    });
    /* Страница Мэгги Грин */
    router.get('/maggy', function(req, res, next) {
      res.render('hero', 
      {
        title: "Мэгги Грин",
        picture: "/images/maggy.jpg",
        desc: "Старшая дочь Хершела Грина. Вместе с отцом и другими родственниками ей удалось пережить начало зомби-апокалипсиса на ферме отца."
      })
    });