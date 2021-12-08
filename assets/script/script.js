document.addEventListener("DOMContentLoaded", function(){
    

    let allStageIcons = document.getElementsByClassName("stage");
    for (let stage of allStageIcons){
        stage.innerHTML = '<i class="fas fa-lock"></i>'
    }
    let currentStage = "music";

    let startB = document.getElementById("start");
    startB.addEventListener('click', function(){
        console.log('starting the game');
        displayTutorial();
        
    })
    
        

})

function theGame(playerName){
    document.getElementById('next').style.visibility = 'hidden';
    let name = playerName;
    let buttons = document.getElementsByClassName('info-answer-box');
    let currStage = "music";
    let stageName = document.getElementById('stage-name');
    stageName.innerHTML = currStage;
    let allStageIcons = document.getElementsByClassName("stage")
    for (let stage of allStageIcons){
        if (stage.getAttribute('data-type') === "musicStage"){
            stage.innerHTML = `<i class="fas fa-music"></i>`;
            stage.style.color = '#252525';
            stage.style.backgroundColor = '#ff652f';
        }
    }
    let lifes = 3;
    console.log(lifes, "before");
    let counter = 0;
    let questList = getQuestionByType(currStage);


    udpatePlayeStats();
    displayQuestons(questList, counter);
    for(let button of buttons){
        button.style.visibility = 'visible';
        button.addEventListener('click', function(){
            if (this.getAttribute('data-type') === questList[counter].rightAnswer){
                console.log("got it right");
                updateCounter(updateQuest, updateStage);
            } else {
                lifes --;
                console.log(lifes, "after");
                updateLifes();
                updateCounter(updateQuest, updateStage);
            }
        })
    }

    function updateCounter(callBack, callBackStage){
        counter ++;
        if (counter >= 3){
            callBackStage()
        } else{
            callBack()
        }

    }

    function updateQuest(){
        displayQuestons(questList, counter);
    }

    function updateStage(){
        counter = 0;
        console.log('here the stage is updated');
        if(currStage === "music"){
            currStage = "movies";
            questList = getQuestionByType(currStage);
        } else{
            console.log('end');
        }
        displayQuestons(questList, counter);
    }

    function updateLifes(){
        document.getElementById('lifes').innerHTML = "";
        for (i=0; i < lifes;i++){
            document.getElementById('lifes').innerHTML += `<i class="fas fa-heart"></i>`;
        }
        checkAlive();
    }

    function checkAlive(){
        if (lifes === 0){
            alert('You are Dead');
        }
    }

    function udpatePlayeStats(player){
        document.getElementById('player').innerHTML = player;
        document.getElementById("player-status").classList.remove('hidden');
        document.getElementById('player').innerHTML = name;
        updateLifes();
    }

    



}

function displayQuestons(questions, indx){
    let questArea = document.getElementById('enter-data');
    questArea.style.animation = `tutorial 0.2s ease-in forwards`;
    let btnAnswers = document.getElementsByClassName('info-answer-box');
    questArea.innerHTML = `<p>${questions[indx].question}</p>`;
    for(let i=0;i < btnAnswers.length; i++){
        btnAnswers[i].innerHTML = `<h4>${questions[indx].answers[i]}</h4>`;
    }

}


function getQuestionByType (type){
    let questionArray = [];
    const allQuestions =[
        {question: "what instrument did <strong>Paul Mccartney</strong> play on The Beatles?", type: "music", answers: ["bass", "keyboard", "drums", "banjo"], rightAnswer: "d" },
        {question: "Which one of the following musicians used to be a <strong>teacher?</strong>", type: "music", answers: ["Michel Jackson", "Dave Grohl", "Sting", "Eminen"], rightAnswer: "b"},
        {question: "Which country the band <strong>AC/DC</strong> is from?", type: "music", answers: ["USA", "England", "South Africa", "Australia"], rightAnswer: "a"},
        {question: "How many oscars did the movie <strong>Titanic</strong> win", type: "movies", answers: ["21", "11", "14", "9"], rightAnswer: "c"},
        {question: "Where were The Lord of the Rings movies filmed?", type: "movies", answers: ["Ireland", "Iceland", "New Zealand", "Australia"], rightAnswer: "b"},
        {question: "what is the <strong>second</strong> rule of fight club", type: "movies", answers: ["don't talk about the fight club", "don't punch on the balls", "if is your 1st night you fight", "every fight is to death" ], rightAnswer: "a"}
    ];

    for (let question of allQuestions){
        if (question.type === type){
            questionArray.push(question)
        }
    }
    return questionArray; 
}

function displayTutorial(){
    let nextbtn = document.getElementById('next');
    nextbtn.classList.remove('hidden');
    let playerName = document.getElementById('player-name').value;
    let tutoArea = document.getElementById('enter-data');
    let stageName = document.getElementById('stage-name');
    tutoArea.style.width = '90%';
    tutoArea.innerHTML = `<p>The Quizz is divided in 4 stages <i class="fas fa-music"></i>, <i class="fas fa-film"></i>, <i class="fas fa-atlas"></i> and <i class="fas fa-skull-crossbones"></i></p>
                          <p>Each one has 3 questions of multiple choice</p>
                          <p>You start with 3 <i class="fas fa-heart"></i>, each wrong question you loose one</p>
                          <p>press the button below with your answer</p>
                          <p>Good Luck!</p>`;
    stageName.style.visibility = 'visible';
    stageName.innerHTML = "tutorial";
    nextbtn.addEventListener('click', function(){
       theGame(playerName);
    })
    

    


}

