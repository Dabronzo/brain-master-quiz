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
    let textArea = document.getElementById('enter-data');
    let allStageIcons = document.getElementsByClassName("stage")
    let gameArea = document.querySelector('.game-area');
    let name = playerName;
    let buttons = document.getElementsByClassName('info-answer-box');
    let currStage = "music";
    gameArea.style.height = '35vh';

    updateStageIcons(currStage);

    let lifes = 3;
    console.log(lifes, "before");
    let counter = 0;
    let questList = getQuestionByType(currStage);
    textArea.style.transition = 'all 0.5s';

    udpatePlayeStats();

    //Main game loops
    displayQuestons(questList, counter);
    for(let button of buttons){
        button.addEventListener('click', function(){
            if (this.getAttribute('data-type') === questList[counter].rightAnswer){
                gotItRight();
                //updateCounter(updateQuest, updateStage);
            } else {
                gotItWrong();
                //updateCounter(updateQuest, updateStage);
            }
        })
    }

    //Game functions

    function gotItRight(){
        document.querySelector('.multiple-choice').classList.add('hidden');
        textArea.innerHTML = `<span id="right-check"><i class="far fa-check-circle"></i></span>`;
        textArea.style.width = '6em';
        setTimeout(function(){
            updateCounter(updateQuest, updateStage);
        }, 1000);
    }

    function gotItWrong(){
        lifes --;
        updateLifes();
        document.querySelector('.multiple-choice').classList.add('hidden');
        textArea.innerHTML = `<span id="wrong-check"><i class="far fa-times-circle"></i></span>`;
        textArea.style.width = '6em';
         setTimeout(function(){
            updateCounter(updateQuest, updateStage);
        }, 1000);


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
            updateStageIcons(currStage);
            questList = getQuestionByType(currStage);
        } else if ( currStage === "movies"){
            currStage = "geography";
            updateStageIcons(currStage);
            questList = getQuestionByType(currStage);
        } else  if (currStage === "geography"){
            currStage = "final";
            updateStageIcons(currStage);
            questList = getQuestionByType(currStage);
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

function updateStageIcons (stage){
    let stageTitle = document.getElementById('stage-name');
    let musicIcon = document.querySelector('.music');
    let moviesIcon = document.querySelector('.movie');
    let geographyIcon = document.querySelector('.geo');
    let finalIcon = document.querySelector('.final');

    console.log(stage);
    stageTitle.innerHTML = `${stage}`;
    stageTitle.style.textTransform = 'uppercase';
    

    if (stage === 'music'){
        stageTitle.style.color = '#ff652f';
        stageTitle.style.textShadow = '0 0 0.8em #ff652f, 0 0 0.1em #252525';
        musicIcon.innerHTML = '<i class="fas fa-music"></i>';
        musicIcon.style.color = '#252525';
        musicIcon.style.backgroundColor = '#ff652f';
        musicIcon.style.boxShadow = '0 0 0.7em #ff652f';
    } else if (stage == 'movies'){
        musicIcon.style.color = '#ff652f';
        musicIcon.style.backgroundColor = '#252525';
        musicIcon.style.boxShadow = 'none';
        stageTitle.style.color = '#ffe400';
        stageTitle.style.textShadow = '0 0 0.8em #ffe400, 0 0 0.1em #fff';
        moviesIcon.innerHTML = '<i class="fas fa-film"></i>';
        moviesIcon.style.color = '#252525';
        moviesIcon.style.backgroundColor = '#ffe400';
        moviesIcon.style.boxShadow = '0 0 0.7em #ffe400';
    } else if( stage === 'geography'){
        moviesIcon.style.color = '#ffe400';
        moviesIcon.style.backgroundColor = '#252525';
        moviesIcon.style.boxShadow = 'none';
        geographyIcon.innerHTML = '<i class="fas fa-atlas"></i>';
        geographyIcon.style.color = '#252525';
        geographyIcon.style.backgroundColor = '#14a76c';
        geographyIcon.style.boxShadow = '0 0 0.7em #14a76c';
        stageTitle.style.color = '#14a76c';
        stageTitle.style.textShadow = '0 0 0.8em #14a76c, 0 0 0.1em #252525';
    } else if( stage === 'final'){
        geographyIcon.style.color = '#14a76c';
        geographyIcon.style.backgroundColor = '#252525';
        geographyIcon.style.boxShadow = 'none';
        finalIcon.innerHTML = '<i class="fas fa-flag-checkered"></i>';
        finalIcon.style.color = '#252525';
        finalIcon.style.backgroundColor = '#E26188';
        finalIcon.style.boxShadow = '0 0 0.7em #E26188';
        stageTitle.style.color = '#E26188';
        stageTitle.style.textShadow = '0 0 0.8em #E26188, 0 0 0.1em #252525';

    }

}

function displayQuestons(questions, indx){
    document.querySelector('.multiple-choice').classList.remove('hidden');
    let questArea = document.getElementById('enter-data');
    let btnAnswers = document.getElementsByClassName('info-answer-box');
    questArea.style.width = '50em';
    questArea.style.animation = 'displayAni 1.1s ease-in forwards';
    questArea.innerHTML = `<p id="quest-para">${questions[indx].question}</p>`;

    let questParagraph = document.getElementById("quest-para");
    questParagraph.style.animation = "displayAni 1s ease-in forwards";
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
        {question: "How many oscars did the movie <strong>Titanic</strong> win", type: "movies", answers: ["21 Oscars", "11 Oscars", "14 Oscars", "9 Oscars"], rightAnswer: "c"},
        {question: "Where were The Lord of the Rings movies filmed?", type: "movies", answers: ["Ireland", "Iceland", "New Zealand", "Australia"], rightAnswer: "b"},
        {question: "what is the <strong>second</strong> rule of fight club", type: "movies", answers: ["don't talk about the fight club", "don't punch on the balls", "if is your 1st night you fight", "every fight is to death" ], rightAnswer: "d"},
        {question: "What is the capital of Australia", type: "geography", answers: ["Sydney", "Viena", "Melbourne", "Canberra"], rightAnswer: "a"},
        {question: "What river runs through Baghdad?", type: "geography", answers: ["Niko", "Tigris", "Jordam", "Euphrates"], rightAnswer: "c"},
        {question: "In what country can you visit Machu Picchu?", type: "geography", answers: ["Chile", "Argentina", "Brazil", "Peru"], rightAnswer: "a"},
        {question: "What is Joe Biden's middle name?", type: "final", answers: ["Steven", "Murray", "Robinette", "Williams"], rightAnswer: "b"},
        {question: "How many letter tiles are there in a game of Scrabble?", type: "final", answers: ["100 tiles", "50 tiles", "150 tiles", "200 tiles"], rightAnswer: "d"},
        {question: "What is the spiciest chilli in the world?", type: "final", answers: ["Thai Pepper", "Naga Jolokia", "Komodo Dragon", "Carolina Reaper"], rightAnswer: "a"}
    ];

    for (let question of allQuestions){
        if (question.type === type){
            questionArray.push(question)
        }
    }
    return questionArray; 
}

function displayTutorial(){
    let playerName = document.getElementById('player-name').value;
    let tutoArea = document.getElementById('enter-data');
    let stageName = document.getElementById('stage-name');
    tutoArea.style.width = '50em';
    tutoArea.style.transition = 'none';
    tutoArea.innerHTML = `<p id="quest-para">The Quizz is divided in 4 stages <i class="fas fa-music"></i>, <i class="fas fa-film"></i>, <i class="fas fa-atlas"></i> and <i class="fas fa-skull-crossbones"></i></p>
                          <p id="quest-para">Each one has 3 questions of multiple choice</p>
                          <p id="quest-para">You start with 3 <i class="fas fa-heart"></i>, each wrong question you loose one</p>
                          <p id="quest-para">press the button below with your answer</p>
                          <p id="quest-para">Good Luck!</p>
                          <button id="next" data-type="next-btn" class="tutorial-btn hidden">Next</button>`;
    let nextbtn = document.getElementById('next');
    nextbtn.classList.remove('hidden');
    stageName.style.visibility = 'visible';
    stageName.innerHTML = "tutorial";
    stageName.style.color = '#fff';
    nextbtn.addEventListener('click', function(){
       theGame(playerName);
    })
}

