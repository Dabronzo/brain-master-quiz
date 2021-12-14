document.addEventListener("DOMContentLoaded", function(){

    let startB = document.getElementById("start");
    startB.addEventListener('click', function(){
        console.log('starting the game');
        startGame();
        
    });

        

});

/**
 * Main function where the game runs
 */
function startGame(){
    document.getElementById('player-status').classList.remove('hidden');
    document.querySelector('.game-area').style.height = '40vh';
    var lives = 3;
    var counter = 0;
    var currentStage = document.querySelector('.selected');
    var allButtons = document.getElementsByClassName('info-answer-box');
    var questionsList = getQuestionByType(currentStage.getAttribute('data-type'));
    var stageTitles = document.getElementById('stage-name');
    var stageIcon = document.querySelector('.music');
    var nextButton = document.getElementById('next');
    var playerName = document.getElementById('player-name').value;
    var playAgain = document.getElementById('play-again');

    //initial setup for the music stage style
    stageIcon.classList.add('music-on');
    stageIcon.innerHTML = '<i class="fas fa-music"></i>';
    stageTitles.style.visibility = 'visible';
    stageTitles.classList.add('music-title');
    stageTitles.innerHTML = currentStage.getAttribute('data-type');
    //set the  initial player stats for the game
    document.getElementById('player').textContent = playerName;
    updatePlayerLives(lives);

    //display the first question of music stage
    displayQuestion(questionsList, counter);

    //Listeners
    //restore the game stage when clicked
    playAgain.addEventListener('click', function(){
        counter = 0;
        questionsList = getQuestionByType('music');
        lives = 3;
        restetIcons();
        currentStage = document.querySelector('.music');
        currentStage.classList.add('selected');
        updatePlayerLives(lives);
        updateStageIcons();
        playAgain.classList.add('hidden');
        stageTitles.style.visibility = 'visible';
        displayQuestion(questionsList, counter);
    })

    //button to change states
    nextButton.addEventListener('click', function() {
        counter = 0;
        questionsList = updateStageQuestions();
        updateStageIcons();
        displayQuestion(questionsList, counter)
    })
    // multiple choice buttons
    for(let button of allButtons){
        button.addEventListener('click', function(){
            let playerAnswer = false;
            counter ++;
            if(button.innerHTML === questionsList[counter - 1].rightAnswer){
                console.log('Got it Right');
                playerAnswer = true;
                questionTransfer(counter, playerAnswer, questionsList, lives);

            } else{
                lives --;
                updatePlayerLives(lives);
                questionTransfer(counter, playerAnswer, questionsList, lives);
            }
        })
    }
}

/**
 * Restore the stage icons to initial and remove the classes selected
 * and for style of the title stages
 */
function restetIcons(){
    let allStageIcons = document.getElementsByClassName("stage");
    for (let stage of allStageIcons){
        stage.innerHTML = '<i class="fas fa-lock"></i>';
    }
    var title = document.getElementById('stage-name');
    for (let stage of allStageIcons){
        if(stage.classList.contains('selected')){
            let stageType = stage.getAttribute('data-type');
            console.log(stageType);
            stage.classList.remove(`${stageType}-on`);
            stage.classList.remove('selected');
            title.classList.remove(`${stageType}-title`);
        }
    }

    
}

/**
 * called when the player runs out lives
 * display a screen when you arre dead and a button to play again
 */
function displayDead(){
    document.querySelector('.multiple-choice').classList.add('hidden');
    document.getElementById('player-status').classList.add('hidden');
    document.getElementById('stage-name').style.visibility = 'hidden';
    document.getElementById('play-again').classList.remove('hidden');
    var textArea = document.getElementById('enter-data');
    textArea.innerHTML = "<p id='quest-para'>Sorry You've Lost the Game</p>";

}

/**
 * take the number of lives of the player and display on the game area
 * @param {the number of lives of the player} lives 
 */
function updatePlayerLives(lives){
    if(document.getElementById('player-status').classList.contains('hidden')){
        document.getElementById('player-status').classList.remove('hidden');
    }
    document.getElementById('lifes').innerHTML = "";
    for (let i=0; i < lives;i++){
        document.getElementById('lifes').innerHTML += `<i class="fas fa-heart"></i>`;
    }
}

/**
 * Handle the transfer to the next stage show the Next button and
 * check if the game have reached the end
 */
function stageTransfer() {
    document.getElementById('player-status').classList.remove('hidden');
    var currentStage = document.querySelector('.selected');
    var textArea = document.getElementById('enter-data');
    console.log(currentStage.getAttribute('data-type'));
    textArea.style.width = '50em';
    if (currentStage.getAttribute('data-type') !== "final"){
        document.getElementById('next').classList.remove('hidden');
        textArea.innerHTML = "<p id='quest-para'>Congratulations! Get ready for the Next Stage</p>";
        

    } else {
        textArea.innerHTML = "<p id='quest-para'>Congratulations! You've completed the Game</p>";
        document.getElementById('play-again').classList.remove('hidden');
        document.getElementById('stage-name').style.visibility = 'hidden';
    }
}

/**
 * When called takes the element selected and place as the stage to load
 * update the icons and title for the stage
 */
function updateStageIcons(){
    var stageToLoad = document.querySelector('.selected');
    var title = document.getElementById('stage-name');
    if(stageToLoad.getAttribute('data-type') === 'music'){
        document.querySelector('.music').classList.add('music-on');
        stageToLoad.innerHTML = '<i class="fas fa-music"></i>';
        title.classList.add('music-title');
        title.innerHTML = 'music';
    } else if (stageToLoad.getAttribute('data-type') === 'movies'){
        document.querySelector('.music').classList.remove('music-on');
        stageToLoad.classList.add('movies-on');
        stageToLoad.innerHTML = '<i class="fas fa-film"></i>';
        title.classList.remove('music-title');
        title.classList.add('movies-title');
        title.innerHTML = 'movies';
    } else if (stageToLoad.getAttribute('data-type') === "geography"){
        document.querySelector('.movies').classList.remove('movies-on');
        stageToLoad.classList.add('geography-on');
        stageToLoad.innerHTML = '<i class="fas fa-atlas"></i>';
        title.classList.remove('movies-title');
        title.classList.add('geography-title');
        title.innerHTML = 'geography';
    } else if(stageToLoad.getAttribute('data-type') === "final"){
        document.querySelector('.geography').classList.remove('geography-on');
        stageToLoad.classList.add('final-on');
        stageToLoad.innerHTML = '<i class="fas fa-flag-checkered"></i>';
        title.classList.remove('geography-title');
        title.classList.add('final-title');
        title.innerHTML = 'final';
    }
      

}

/**
 * Update the class "selected" of the stages and update the questions list
 * of the main game
 * @returns array with the questions of the next stage
 */
function updateStageQuestions(){
    var allStages = document.getElementsByClassName('stage');
    var currStage = document.querySelector('.selected');
    var nextStage;
    currStage.classList.remove('selected');
    if((currStage !== allStages[allStages.length - 1])){
        for(let i=0; i<allStages.length; i++){
            if (allStages[i] === currStage){
                nextStage = allStages[i + 1];
                nextStage.classList.add('selected');
                let nextQuestions = getQuestionByType(nextStage.getAttribute('data-type'));
                return nextQuestions;
            }
            
        }
    }
}

/**
 * Display the section between the questions and set a time out to call the next question
 * @param {the current counter} counter 
 * @param {the buttom pressed for the player} playerAnswer 
 * @param {list of the questions} questionsList 
 */
function questionTransfer(counter, playerAnswer, questionsList, lives){
    document.querySelector('.multiple-choice').classList.add('hidden');
    var textArea = document.getElementById('enter-data');
    document.getElementById('player-status').classList.add('hidden');
    if (playerAnswer){
        textArea.style.width = '6em';
        textArea.innerHTML = `<span id="right-check"><i class="far fa-check-circle"></i></span>`;
    } else{
        textArea.innerHTML = `<span id="wrong-check"><i class="far fa-times-circle"></i></span><br><p id="quest-para">The right answer is <span class="red">${questionsList[counter - 1].rightAnswer}</span></p>`;
    }

    setTimeout(function(){
      if(lives !== 0){
        if(counter === questionsList.length){
            stageTransfer();
        } else{
            displayQuestion(questionsList, counter);
        }
      } else{
          displayDead();
      }
    }, 2000);

}

/**
 * Display the questions
 * @param {List of the questions} listQuestions 
 * @param {current coutner for the questions displayed} indx 
 */
function displayQuestion(listQuestions, indx){
    document.querySelector('.multiple-choice').classList.remove('hidden');
    var nextBtn = document.getElementById('next');
    var questArea = document.getElementById('enter-data');
    var btnAnswers = document.getElementsByClassName('info-answer-box');
    if(!nextBtn.classList.contains("hidden")){
        nextBtn.classList.add('hidden');
    }
    questArea.style.width = '50em';
    questArea.style.animation = 'displayAni 1.1s ease-in forwards';
    questArea.innerHTML = `<p id="quest-para">${listQuestions[indx].question}</p>`;

    var questParagraph = document.getElementById("quest-para");
    questParagraph.style.animation = "displayAni 1s ease-in forwards";
    for(let i=0;i < btnAnswers.length; i++){
        btnAnswers[i].innerHTML = `${listQuestions[indx].answers[i]}`;
    }
    if(document.getElementById('player-status').classList.contains('hidden')){
        document.getElementById('player-status').classList.remove('hidden');
    }
}

function getQuestionByType (type){
    var questionArray = [];
    const allQuestions =[
        {question: "what instrument did <strong>Paul Mccartney</strong> play on The Beatles?", type: "music", answers: ["bass", "keyboard", "drums", "banjo"], rightAnswer: "bass" },
        {question: "Which one of the following musicians used to be a <strong>teacher?</strong>", type: "music", answers: ["Michel Jackson", "Dave Grohl", "Sting", "Eminen"], rightAnswer: "Sting"},
        {question: "Which country the band <strong>AC/DC</strong> is from?", type: "music", answers: ["USA", "England", "South Africa", "Australia"], rightAnswer: "Australia"},
        {question: "How many oscars did the movie <strong>Titanic</strong> win", type: "movies", answers: ["21 Oscars", "11 Oscars", "14 Oscars", "9 Oscars"], rightAnswer: "11 Oscars"},
        {question: "Where were The Lord of the Rings movies filmed?", type: "movies", answers: ["Ireland", "Iceland", "New Zealand", "Australia"], rightAnswer: "New Zealand"},
        {question: "what is the <strong>second</strong> rule of fight club", type: "movies", answers: ["don't talk about the fight club", "don't punch on the balls", "if is your 1st night you fight", "every fight is to death" ], rightAnswer: "don't talk about the fight club"},
        {question: "What is the capital of Australia", type: "geography", answers: ["Sydney", "Viena", "Melbourne", "Canberra"], rightAnswer: "Canberra"},
        {question: "What river runs through Baghdad?", type: "geography", answers: ["Niko", "Tigris", "Jordam", "Euphrates"], rightAnswer: "Tigris"},
        {question: "In what country can you visit Machu Picchu?", type: "geography", answers: ["Chile", "Argentina", "Brazil", "Peru"], rightAnswer: "Peru"},
        {question: "What is Joe Biden's middle name?", type: "final", answers: ["Steven", "Murray", "Robinette", "Williams"], rightAnswer: "Robinette"},
        {question: "How many letter tiles are there in a game of Scrabble?", type: "final", answers: ["100 tiles", "50 tiles", "150 tiles", "200 tiles"], rightAnswer: "100 tiles"},
        {question: "What is the spiciest chilli in the world?", type: "final", answers: ["Thai Pepper", "Naga Jolokia", "Komodo Dragon", "Carolina Reaper"], rightAnswer: "Carolina Reaper"}
    ];

    for (let question of allQuestions){
        if (question.type === type){
            questionArray.push(question);
        }
    }
    return questionArray; 
}
