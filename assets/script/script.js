document.addEventListener("DOMContentLoaded", function(){

    let allStageIcons = document.getElementsByClassName("stage");
    for (let stage of allStageIcons){
        stage.innerHTML = '<i class="fas fa-lock"></i>'
    }

    let startButton = document.getElementById('start');
    startButton.addEventListener('click', function(){
        setCurrentStage('music');

    })
    
        

})





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