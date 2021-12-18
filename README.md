# Brain Master Quiz
Brain Master Quiz has a goal of recreate the feeling of playing the classic pub quizzes, with different thematic stages. The player starts answering questions at the first stage and when all the questions are done will move to the next one, this reats until the last one. The player starts with three lives, every wrong question costs one, the challenge is finish the quiz without running out lives.

The website was developed to be easy to customize the questions. Any person with a basic  knowledge of javascript can add more questions or change the number of questions per stage to make their own customize versions of the game. Brain Master Quiz is totally responsive, can be played on smartphones and tables to bring some fun everywhere you go.   


# 1.0 UX Development
### 1.1 Strategy
Due to the nature of the quiz envolving different themes such as music, movies and geaography attracks persons who like quizzes in general or misses pub-quizzes and due to lockdowns is more difficult to find one near you.

### 1.2 Our Target Audience:
* People who enjoy quiz with different themes.
* Those who like pop culture and general knowledge.
* People who know a bit of JavaScript and wants to use the quiz format to their own questions.


### 2.0 Scope
The game is divided in four stages each one contains questions about their respective stage theme. The player starts in the Music stage, after the questions of this stage are finished the website brings the player to the Movies stage and so on for the following Geography and Final Stage.

### 2.1 User Stories

#### As a Regular Quiz Player
* Start the quiz when I’m ready.
* See a tutorial if wanted to understand the game progress.
* Use a player name or nickname on the game.
* Follow my progress through stages, score and currently lives count.
* Feedback with a right answer if the player’s answer is wrong.
* Play the game again if wanted.

#### As a User of the Quiz as Template
* A simple way to add customized questions without interfering of the main game logic code.




### 3 Structure
Brain Master Quiz has only one page where the user interacts with the website. The questions are displayed on the game area, and the possible answers are displayed on the buttons at the “multiple choice area”. If the current stage is finished the website display an info and waits for the player to click to move to the next one. If the player runs out lives or the game is finished there is an option to play again, by doing the game begins once again.

![structure flow](/docs/structure_flow.jpg)

#### 3.1 Wireframe Skeleton
![wireframe skeleton](/docs/quiz_wireframe_small.png)
#### 3.2 Picture Legend 
- #### 1 Stage Icons
It is responsible to display in what stage the player currelntly is. When the player moves to a next stage the icon of the current stage style change indicating the new stage is now on.
- #### 2 Game Area
Where most of the game interactions are displayed, has a different background than the body.
- #### 3 PLay Again Button
When displayed allows the user to play the game once more
- #### 4 Questions Area
Wher the questions and other informations are displayed
- #### 5 Input Area
Displayed as first when the page is loaded and ask the user to input a name and a button to start to play the game
- #### 6 Player Status
Is displayed when the game starts, holds the player name and current lives. Also holds a "Next" button that allow the player change to the next stage
- #### 7 Multiple Choice Area
Holds the buttons for the multiple choice answers of each question.

### 4 Surface Design and Colours
The website was designed with a minimalist concept with no pictures, just the using icons from Font Awesome and Google fonts.

#### 4.1 Palette of Colours Used:
#### Black (Hex #272727) -------  Grey (Hex #747474) -------- Orange ( Hex #ff652f) ------- Yellow (Hex #ffe400) ------- Green (Hex #14a76c)
![Palette of Colours](/docs/palette.png)

#### 4.2 Secondary Colours User
* For White (Hex #fff).
* Neon like colour (Hex #ff00ff).

# 2 Features

## 2.1 Title and Stage Progress Area
Those features are located in the header area of the website. The logo is a simple link that brings the user to the page at the stage when is loaded, the Stage Progress Area is where all the icons of the four stages of the game are displayed. This Feature work as a navigation through the game, the icons were designed to provide clear feedback about which stage the player currently is and which ones have already passed.

![Quiz Header pic](/docs/header_quiz.png)

At the beginning of the game all the icons are showing a closed lock. When the player starts the game the first icons appear to indicate the stage music have started. The style of an stage icon gets its style changed when is the current stage that the player is on

![Music stage on](/docs/music_on.png) 
* Music stage icon on 

![Movies stage on](/docs/movies_on.png)
* Movies stage icon on 
* The music icon now has the music note displayed but is not glowing anymore

![Geaography stage on](/docs/geography_on.png)
* Geography stage icon on

![Final stage on](/docs/final_on.png)
* Final stage icon on

## 2.1 Game Area
This area is where all the information and the questions are displayed for the user.  Also holds specific buttons: **Play** to start the game, **How to Play** to display a tutorial, **Next** to change stage and **Play Again** to play the game again.

![Game Area](/docs/game_area.png)

### 2.2 Buttons
All the buttons of the game area have a transparent background and a neon pink border, a pseudo class hover and also cursor change to make it clear that is a button and can be clicked.

![Buttons image](/docs/play_button.png)
* Play button with hover style and How to Play normal display

![Next Button](/docs/next_button.png)
* Next button hover effect

![Play Again](/docs/play_again.png)
* Play Again button hover effect

### 2.3 Input Area
As the page is loaded a box will appear on the asking the player to enter with the name to start to play the game or can be directed to the tutorial and later start the game.

![Input area](/docs/input_area.png)

### 2.4 Tutorial
Simple paragraph explaining the basics of the game

![tutorial](/docs/tutorial.png)

### 2.5 Stage title and question
The stage title holds the name of the stage that the player currently is, also have the same colour od the respective stage icon.
The questions are displayed in white colour to make contrast with the background to provide a good readable text. Some important words are displayed in different colours to highlight it in the question.

![question sample](/docs/question.png)

### 2.5 Right Answer
Display a green right check icon image

![right answer](/docs/right_answer.png)

### 2.6 Wrong Answer
Display a red wrong check icon image and also a small text with the correct answer

![wrong answer](/docs/wrong_answer.png)

### 2.7 Stage Transfer
Display a message to let the player know the current stage is over so when the player is ready will move to the next one, using the **Next** button.

![transfering stage](/docs/stage_transfer.png)

### 2.8 Player Status
This area holds the player’s information such as name, the number of lives (displayed as a heart icon) and the current score. The display is updated every time there is a change on lives or score.

![player status](/docs/player_status.png)

### 2.9 Running out of Lives
As the game rule the player has three lives on the game start, every wrong question will cost one live, if the player has no live left the game activate the game over and will display a message and ask if the user want to play again.

![gameover](/docs/gameover.png)

### 2.10 The Endgame
If the player passes all the stages without loosing all the lives a message appears to congratulate the player and also on the player status can see the final score. The player also has an option to play again if it wanted

![endgame](/docs/endgame.png)








## GitHub Pages Link:
[Quizz Game Page](https://dabronzo.github.io/brain-master-quiz/)
