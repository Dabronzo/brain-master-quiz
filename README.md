# Brain Master Quiz
Brain Master Quiz has a goal of recreate the feeling of playing the classic pub quizzes, with different thematic stages. The player starts answering questions at the first stage and when all the questions are done will move to the next one, this reats until the last one. The player starts with three lives, every wrong question costs one, the challenge is finish the quiz without running out lives.

The website was developed to be easy to customize the questions. Any person with a basic  knowledge of javascript can add more questions or change the number of questions per stage to make their own customize versions of the game. Brain Master Quiz is totally responsive, can be played on smartphones and tables to bring some fun everywhere you go.   


# 1.0 UX Development
## Responsive Behaviour
The website has responsive behavour for different screen sizes, laptops, tablets and smartphones.

![Am I responsive pic](/docs/responsive.png)

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
- #### 2 Game Area
- #### 3 PLay Again Button
- #### 4 Questions Area
- #### 5 Input Area
- #### 6 Player Status
- #### 7 Multiple Choice Area

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

### 2.1.0 Buttons
All the buttons of the game area have a transparent background and a neon pink border, a pseudo class hover and also cursor change to make it clear that is a button and can be clicked.

![Buttons image](/docs/play_button.png)
* Play button with hover style and How to Play normal display

![Next Button](/docs/next_button.png)
* Next button hover effect

![Play Again](/docs/play_again.png)
* Play Again button hover effect

### 2.1.1 Input Area
As the page is loaded a box will appear on the asking the player to enter with the name to start to play the game or can be directed to the tutorial and later start the game.

![Input area](/docs/input_area.png)

### 2.1.2 Tutorial
Simple paragraph explaining the basics of the game

![tutorial](/docs/tutorial.png)

### 2.1.3 Stage title and question
The stage title holds the name of the stage that the player currently is, also have the same colour od the respective stage icon.
The questions are displayed in white colour to make contrast with the background to provide a good readable text. Some important words are displayed in different colours to highlight it in the question.

![question sample](/docs/question.png)

### 2.1.4 Right Answer
Display a green right check icon image

![right answer](/docs/right_answer.png)

### 2.1.5 Wrong Answer
Display a red wrong check icon image and also a small text with the correct answer

![wrong answer](/docs/wrong_answer.png)

### 2.1.6 Stage Transfer
Display a message to let the player know the current stage is over so when the player is ready will move to the next one, using the **Next** button.

![transfering stage](/docs/stage_transfer.png)

### 2.1.7 Player Status
This area holds the player’s information such as name, the number of lives (displayed as a heart icon) and the current score. The display is updated every time there is a change on lives or score.

![player status](/docs/player_status.png)

### 2.1.8 Running out of Lives
As the game rule the player has three lives on the game start, every wrong question will cost one live, if the player has no live left the game activate the game over and will display a message and ask if the user want to play again.

![gameover](/docs/gameover.png)

### 2.1.9 The Endgame
If the player passes all the stages without loosing all the lives a message appears to congratulate the player and also on the player status can see the final score. The player also has an option to play again if it wanted

![endgame](/docs/endgame.png)

## 2.2 Multiple Choice Area

Every question has four possible answers, they are displayed on the but-tons at the multiple choice area. The buttons have a linear shading on the background and display a pink border when hovered over. This area is hidden when the game is not expecting the player insert a question to avoid been clicked and generate bugs on the game progress.

![multple choice buttons](/docs/answer_buttons.png)

## 2.3 Footer

By the bottom of the website a simple paragraph is displayed as footer featuring information about the developer and a external link for my **GitHub** profile.

![footer](/docs/footer.png)

# 3 Tecnologies Used

- ## HTML
- ## CSS
- ## JavaScript

# 4 Testing Process

## 4.1 During the Development Process
The website was during all the development process to cover all the possible outcomes. Some adjustments needed to be done while this process especially on the input area, to the user enter the player name, to prevent the text to be too big and break the style of the page . The multiple-choice area also is hidden in some parts during the game to prevent the player click when the game is not expecting.

## 4.2 Testing Tools

- ### 4.2.1 Google DevTool Lighthouse
![lighthouse result](/docs/lighthouse.png)

- ### 4.2.2 JS Hint
One warning appeared on the JS hint regarding calling functions within loops, since that is not an error and the website functionality is not affected by it, this issue will be addressed in the future.

![jshint result](/docs/jshint.png)

- ### 4.2.2 W3C Validator for HTML
No issues found, [link to the HTML validation on W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdabronzo.github.io%2Fbrain-master-quiz%2F)

- ### 4.2.3 W3C CSS Validator
No issues found, [link to the CSS validation on W3C](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fdabronzo.github.io%2Fbrain-master-quiz%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

- ### 4.2.4 Color Contrast Validator
No issues found, [link to the validator](https://color.a11y.com/Contrast/)

# 5 Known Bugs
During the development test all the major bugs and issues were addressed and solved, however I think the transition of the text in some parts of the game could have a better tweak to smooth it. The decision of not addressing this was taken due to the nature of the project with its deadlines and mine time available, when the game was tested by some people around my social circle they didn’t notice or didn’t mention this bug. However this could be addressed in the future.

# 6 Customizing The Questions
This part is to understand how to customize the questions of the game, more can be added an also the number of questions per stage can be changed as well.

- ## 6.1 Changing The Questions
All the game questions are objects, stored in a function called “getQuestionsByType”. This function is called on the game logic to return an array of questions with a specific type according to the game stages (music, movies, geography and final). The question objects have the following attributes: 
- ### Question -> String with the question itself.
- ### Type -> String with the stage that the question belong (music, movies, geography and final).
- ### Answers -> Array of Strings with four possible answers for that question.
- ### Right Answer -> String with the correct answer for that question.
So, the new question needs to follow the same format as this example:

{question: "what instrument did <span class='black'>Paul Mccartney</span> play on The Beatles?", type: "music", answers: ["bass", "keyboard", "drums", "banjo"], rightAnswer: "bass" },

- ## 6.2 Number of questions per Stage
The game logic identifies how many questions the stage has, so if you want the game have six questions per stage for instance, make sure that you have six questions of each type on the getQuestionsByType function.

# 7 Development Overview
- ## The Set Up
When the idea to make a quiz online came to me for the first time, I came up with two personal and yet fundamental rules that I should not break. The first rule would be making a technical decision in not using any global variables, the game logic would be entirely structured in functions. For the second rule would create a game where someone could easily change the questions, adding more, increasing the number of questions per stage, with minimal or none change at the main game logic.
- ## The Problem
Not using global variables proved to be a challenging task for my existing knowledge of the JavaScript language. My original idea was making one function that asks for arguments as player name, lives, score, and the stage. The function would display the questions for the stage, get the right answer, check the lives, and return the updated information to call the next stage function.
However, the event listeners were generating a critic bug, after the first stage every time the player would click in a button to answer the question, the listener would activate two clicks, this would mess up the game logic where two listener functions were being activated at the same time. I’ve tried to remove the event listeners for the buttons when the stage is over but also the code didn’t expect as I Imagined, only one of the buttons had the listener removed.
- ## The Fix
To address the problem, I needed first to understand why that was happening. After some online search I cam across an article that explained how the listeners function work regarding the scope of event listeners and the JavaScript language. Apparently, the listener is an async function that happens in a different scope that the main code. Is only activated when some event happens. If you create one event for different buttons is impossible to remove for all the buttons because they “exist” in this different scope and just when **one** of the buttons is clicked would interact with the script scope.
When I figured this out, I knew that my original idea for the game would not work so I rebuild the entire logic as it is right now. This new version has the main game function (StartGame) that takes as argument the name that the player entered. This function is responsible for the logic of the game and call the other functions to do the different game task. The change of stage now is conducted by auxiliar functions called by the main function.
- ## The Lesson
I guess the big lesson here is how important is for a developer to troubleshoot problems during the development. Can be really frustrating when your perfect idea does not work because reasons that you don’t know, only with debugging and troubleshooting is possible to overcome this feeling and make your idea works.

# 8 Future of Developments
My main idea for something that can be done on the future is implement the game as a app for pub quizzes, where can be used in quizzes organized by some social event, so the players could enter in the game and play with their phones. The game will make all the players answers, do the calcula-tions, and will send the live result to the host. Can be used instead of printing papers for the question and allow a more interactive experience for pub quizzes.

# 9 Credit
All the code in all files HTML, CSS and JavaScript were made by me. However I've used a few external libraries/tools that will be dislcaimed bellow:
- ## [fontawesome.com](https://fontawesome.com/) -> for all the icons.
- ## [Google Fonts](https://fonts.google.com/) -> for the webiste font style.
- ## [Code Institute](https://codeinstitute.net/) -> for the dockerfile, and the student support.
## 9.1 To address the problems during the development:
- ## [Google Search](https://www.google.com/) -> Good old technik.
- ## [Stack Overflow](https://stackoverflow.com/) -> I've read several post about the listeners and events on JS.
- ## [W3Schools.com](https://www.w3schools.com/) -> Essential for quick consults.

# 10 Acknowledgments
**Special thanks to:**
- My mentor **Brian O'Hare** for the help and guidance.
- My partner for the support and taking some houseduties while I was working on this project
- My mother and stepfather for all the support and believe in me always.

















## GitHub Pages Link:
[Quizz Game Page](https://dabronzo.github.io/brain-master-quiz/)
