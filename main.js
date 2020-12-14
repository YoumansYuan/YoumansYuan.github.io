
function greeting(){
var x = prompt("hello, what's your gender?");
  if(x == "male"){
    alert("hello sir, welcome");
  }
  else if(x == "female"){
    alert("hello lady, welcome!");
  }
  else{
    alert("please indicate your gender by male or female");
      }
}


function date(){
var x = new Date();
  alert("Today is "+x+" Greetings!");
}


var a = Math.floor(Math.random()*10);
  document.getElementById('number').innerHTML= a;
  var b = prompt("what is your guess between 0 - 10?");
  if(a<b){
    document.getElementById('result').innerHTML = "your guess is too big";
  }else if(a>b){
    document.getElementById('result').innerHTML = "your guess is too small";
  }else{
    document.getElementById('result').innerHTML = "that is right guess";
  }
