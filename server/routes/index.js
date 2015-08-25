var express = require('express');
var router = express.Router();
// var util = require('../../client/js/main.js');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next){
  var numChunks = req.body.chunk;
  var totalPeople = req.body.people;
  var array = [];
  for (var i=1; i<=totalPeople; i++){
    array.push(i);
  }
  var chunks = chunk(shuffle(array),numChunks);
  console.log(chunks);
  res.render('results', {chunks: chunks});
});

function shuffle(array){
  var temp = array.slice();
  var shuffledArray = [];
  while(temp.length>0){
    var index = Math.floor(Math.random()*temp.length);
    shuffledArray.push(temp.splice(index,1)[0]);
  }
  return shuffledArray;
}

function chunk(array, numChunks){
  var temp = array.slice();
  var chunkArray = [];

  // primes chunkArray
  for(var i=0;i<numChunks;i++)
    chunkArray[i] = [];

  while(temp.length>0){
    for(var i=0;i<numChunks;i++){
      if(temp.length===0){
        return chunkArray;
      }
      chunkArray[i].push(temp.pop());
    }
  }
}

module.exports = router;
