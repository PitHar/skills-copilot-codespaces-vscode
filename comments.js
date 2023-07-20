//Create web server
const express = require('express');
const app = express();

//Create a server
const server = app.listen(3000, listening);
function listening(){
  console.log('listening...');
}

//Make a folder public
app.use(express.static('public'));

//Path to get data from the client
app.get('/add/:num1/:num2', addNums);

function addNums(request, response){
  const data = request.params;
  const num1 = Number(data.num1);
  const num2 = Number(data.num2);
  const sum = num1+num2;
  const reply = {
    msg: sum
  }
//  response.send(reply);
}

//Path to get data from the client
app.get('/mult/:num1/:num2', multNums);

function multNums(request, response){
  const data = request.params;
  const num1 = Number(data.num1);
  const num2 = Number(data.num2);
  const mult = num1*num2;
  const reply = {
    msg: mult
  }
  response.send(reply);
}

//Path to get data from the client
app.get('/sub/:num1/:num2', subNums);

function subNums(request, response){
  const data = request.params;
  const num1 = Number(data.num1);
  const num2 = Number(data.num2);
  const sub = num1-num2;
  const reply = {
    msg: sub
  }
  response.send(reply);
}

//Path to get data from the client
app.get('/div/:num1/:num2', divNums);

function divNums(request, response){
  const data = request.params;
  const num1 = Number(data.num1);
  const num2 = Number(data.num2);
  const div = num1/num2;
  const reply = {
    msg: div
  }
  response.send(reply);
}

Path to get data from the client
app.get('/pow/:num1/:num2', powNums);

function powNums(request, response){
  const data = request.params;
  const num1 = Number(data.num1);
  const num2 = Number(data.num2);
  const pow = Math.pow(num1,num2);
  const reply = {
    msg: pow
  }
  response.send(reply);
}