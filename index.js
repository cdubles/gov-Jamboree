$(function () {
});

function submitAnswer(question){
 var questionArray = question.split("");
 var questionName = 'questionSelect'+question
 var answerName = 'answer'+question
 //console.log(questionName)
 var choice = $("select#"+questionName).val();
 console.log(choice)
 //console.log(questionArray);
if(choice == 'wrong'){
  $('div#'+answerName).css('color','red')
}
else{
  $('div#'+answerName).css('color','green')
}
$('div#'+answerName).show()
}

var team1 = 0;
var team2 = 0;
var team3 = 0;
var team4 = 0;
function increase(team){
  if(team == '1'){
    team1 +=100;
    $("p#team1").text('team 1:'+team1)
  }
  else if(team == '2'){
    team2 +=100;
    $("p#team2").text('team 2:'+team2)
  }
  else if(team == '3'){
    team3 +=100;
    $("p#team3").text('team 3:'+team3)
  }
  else if(team == '4'){
    team4 +=100;
    $("p#team4").text('team 4:'+team4)
  }
}

function decrease(team){
  if(team == '1'){
    team1 -=100;
    $("p#team1").text('team 1:'+team1)
  }
  else if(team == '2'){
    team2 -=100;
    $("p#team2").text('team 2:'+team2)
  }
  else if(team == '3'){
    team3 -=100;
    $("p#team3").text('team 3:'+team3)
  }
  else if(team == '4'){
    team4 -=100;
    $("p#team4").text('team 4:'+team4)
  }
}