document.addEventListener("DOMContentLoaded", function(){

    let allStageIcons = document.getElementsByClassName("stage");
    for (let stage of allStageIcons){
        stage.innerHTML = '<i class="fas fa-lock"></i>'
    }

    let buttons = document.getElementsByTagName('button');
    for (let button of buttons){
        button.addEventListener('click', function(){
            if (this.getAttribute('data-type') === 'play'){
                startTheGame();
            } 
        })
    }

})

function startTheGame (){
    let pinkContainer = document.getElementById('enter-data');
    pinkContainer.style.width = "40rem";
    pinkContainer.innerHTML = `
    <p class="animated">Tutorial</p>
    <p class="tutorial animated">There are 4 thematic stages <i class="fas fa-music"></i> <i class="fas fa-film"></i> <i class="fas fa-atlas"></i> <i class="fas fa-skull-crossbones"></i></p>
    <p class="tutorial animated">Each wrong question consumes 1 life</p>
    <p class="tutorial animated">The multiple choices will be displayed bellow</p>
    <P class="tutorial animated">Good Luck!</P>
    <button class="tutorial-btn animated">Next</button>`

}