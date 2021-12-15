# Brain Master Quiz
The website is a quiz game where questions are displayed on the game area and the player need to choose an answer. The player has three lives and each worng answer consumes one of it. Brain Master Quiz is divided in four thematic stages: muisc, movies, geography and the final stage, each one contains three questions related with stage's theme. The last stage however brings more challenging questions about general knowledge.

The website was developed to be easy to customize the questions. Any person with a basic  knowledge of javascript can add more questions or change the number of questions per stage to make their own customize versions of the game. Brain Master Quiz is totally responsive, can be played on smartphones and tables to bring some fun everywhere you go.   


## UX Development
### Strategy
Brain Master Quiz was inspired on the classic pub quizzes, with different thematic stages. The stages (Music, Movies, Geograhy and Final) themes were chosen for been popular in these types of quizzes. The final stage does not have a specific theme but it's questions are more diffult. The game code was developed to be easy to change the questions of the game, just need to follow the same format.
### Scope
The essential features for this project consist, display the questions following the order, check if the player answer are right or wrong, move through stages, display and update player status such lives and name, possibility to play again when finished or game over, easy changeble database of questions to customization.
### Structure
Brain Master Quiz has only one page when the user interacts with the website the questions are displayed on the game area. When the current stage is finished the website display an info and waits for the player to click to move to the next one. If the player runs out lives or the game is finished there is an option to play again, by doing the game begins once again.

![structure flow](/docs/structure_flow.jpg)

### Skeleton
![wireframe skeleton](/docs/quiz_wireframe_small.png)
- ### 1 Stage Icons
Responsible to display in what stage the player currelntly is. When the player moves to a next stage the icon of the current stage style change indicating the new stage is now on.
- ### 2 Game Area
Where most of the game interactions are displayed, has a different background than the body.
- ### 3 PLay Again Button
When displayed allows the user to play the game once more
- ### 4 Questions Area
Wher the questions and other informations are displayed
- ### 5 Input Area
Displayed as first when the page is loaded and ask the user to input a name and a button to start to play the game
- ### 6 Player Status
Is displayed when the game starts, holds the player name and current lives. Also holds a "Next" button that allow the player change to the next stage
- ### 7 Multiple Choice Area
Holds the buttons for the multiple choice answers of each question.

### Surface
To keep it simple and easy to load the website was designed using minimalist concept. The icons are taken from __Font Awesome__  and was used the following palette of colours (#14a76c, #ff652f, #ffe400, #14a76c, #E26188, #252525, #747474 and #ff00ff). Most of the colour are related to the stage icons and type, each one display a different color. The website use the font family  Poppins, sans-serif, all the questions are diplayed in white and some crucial words are displayed in red to highlight it. 



   


## GitHub Pages Link:
[Quizz Game Page](https://dabronzo.github.io/briain-quizz-game/)
