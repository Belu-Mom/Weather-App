var express = require('express');
var router = express.Router();
var nodeFetch = require('node-fetch');
const axios = require('axios'); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/submit', function(req, res) {
  const city= req.query.city;
  const url_api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f91f5d3240c35610e4540d56ef298526`;

axios.get(url_api)
.then(function(response){
  res.render('index',{data:response.data})
})
.catch(function(error){
  res.send(error)
})
});

module.exports = router;
