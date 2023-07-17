//Question bank
var questionBank= [
    {
        question : 'Once upon a time there was a princess who wanted to marry a bright young man who was good at logic she organized one event and  a large number of aspiring young men came to the court. The princess placed three boxes in front of them. One was made of gold, another of silver, and the third of iron  Each box had an inscription on top. The one on the golden box said, "The ring is in this box." The one on the silver box said, "The ring is not in this box."Lastly, the one on the iron box declared, "The ring is not in the golden box?" The princess announced that only one of the boxes contained the ring And only one of the statements on the boxes was true.So,which box contains the ring ?',
        option : ['Golden Box','Silver box','iron box','cannot be determined'],
        answer : 'iron box'
    },
    {
        question : 'In a glass of water we dropped one ice cube but the ice cube has one silver ring frozen inside of it in middle. Now when the ice cube melts and due to diamond(carbon) having more density than water so the ring fell on the surface of the glass, what happened to the water level in the glass',
        option : ['Rise Up','Go down','Remains the same','cannot be determined'],
        answer : 'Go down'
    },
    {
        question :'A student asks his teacher: How old are your three daughters? The teacher says the product of their ages is 36. The student says this is not enough information. The teacher says if you add them up you get my house number.  The student says this is still not enough information.So the teacher says the eldest one plays the piano',
        option : ['3,3,4','1,6,6','1,4,9','2,2,9'],
        answer : '2,2,9'
    },
    {
        question : 'In a house 1st floor 3 bulbs are attached And the switch of all these 3 bulbs are attached on the ground floor so while switching on or off we cannot see which switch is for what bulb At one time we can switch as many times as u want. But then after that only walking upstairs we can able to figure out which bulb is on or off. Now minimum how many times u have to go upstairs to figure out which bulb is connected with which switch ?',
        option : ['2','1','4','5'],
        answer : '1'
    },
    
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();
