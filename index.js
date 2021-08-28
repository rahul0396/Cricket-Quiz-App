const chalk = require('chalk');
var readlineSync = require("readline-sync");


var score = 0;
var userName = readlineSync.question(chalk.blue("what's your name?"));

console.log(chalk.red("welcome ! "+ userName ));


// play function



function play(question,answer,questNum){
  console.log("___________________________________\n");
  var userAnswer = readlineSync.question("Q" + questNum + ") " + question + "\n>");
  if(userAnswer.toUpperCase() === 'E'){
    return 0;
  }

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    score++;
    return true;
  }else{
    return false;
  }
}


var question = [
  {  question:"\nWhich batsman hit three double century? \na.Virat kohli \nb.Dhoni \nc.Rohit Sharma ",
   answer:"c"},

   {question:"\nWhat does LBW stand for? \na.Long Ball Wide\nb.Leg Beyond Width \nc.Leg Before Wicket", 
   answer:"c"},

   {question:"\nHow long do test cricket matches usually go on for? \na. 90 minutes\nb.6 hour \nc.3 to 5 days", 
   answer:"c"},

   {question:"\nWhat do you call a referee in cricket?\na.An umpire \nb A cricketferrr\nc. A cricketum pireferee ", 
   answer:"a"}, 

   {question:"\nWho won the first ever Cricket World Cup in 1975?\na.Australia \nb.West Indies \nc.India", 
   answer:"b"}, 

{question:"\n How many ways are there of getting out? \na.8 \nb.9 \nc.10", 
answer:"c"},

{question:"\nWhat is the largest cricket stadium in the world?\na.Melbourne Cricket Club \nb.Narendra Modi Stadium\nc.Lords ", 
answer:"b"},

{question:"\nHow long is the wicket on a cricket pitch?\na.20 yards \nb.22 yards\nc.24 yards ", 
answer:"b"},


{question:"\nWhat is the nickname of Sachin Tendulkar?\na.The Little Master \nb.The God of Cricket\nc.Master Blaster ", 
answer:"a"},


{question:"\nWho is the first batsman to cross 10,000 runs in tests?\na.Brian Lara \nb.Sunil Gavaskar\nc.Sachin Tendulkar ", 
answer:"b"}



];


for(var i=0; i<question.length; i++){
  var currentQuestion = question[i];
  play(currentQuestion.question, currentQuestion.answer,i+1)
}


// high score

var highScore=9;

if (score>highScore){
  console.log(chalk.green("\nyou have got a high score \n score = "+ score));
}else{
  console.log(chalk.yellow("\nThe  score is",score));
}
