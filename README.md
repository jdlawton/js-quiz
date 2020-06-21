# js-quiz

Web API Challenge 4: An interactive JavaScript quiz written in JavaScript

For this challenge, I wrote a quiz using JavaScript. Launching the index.html page will present the user with the instructions, a start button, and a timer of 60 seconds. When the quiz is started, the timer will begin counting down while the user is presented a series of 10 multiple choice questions. Clicking on any of the answers will advance to the next question. If the answer selected was incorrect, the user will be docked 10 seconds and a "wrong" message is displayed. Choosing the correct answer results in no time penalty and a "correct" message being displayed

The quiz continues until either the timer reaches 0 or all of the questions have been asked. Either way, once the quiz is over, the final score will be displayed and the user will be asked to enter their initials. When their initials are submitted, their score is saved to localStorage and the high scores page is displayed. The high scores page will display all of the stored scores in decending order, or it will display an empty message if there are no scores to display. From this page, the user can either return to the beginning of the quiz, or clear the saved high scores.

Link to deployed application:
https://jdlawton.github.io/js-quiz/

![Project Screenshot1](/quiz1.png?raw=true)
![Project Screenshot2](/quiz2.png?raw=true)
![Project Screenshot3](/quiz3.png?raw=true)
![Project Screenshot4](/quiz4.png?raw=true)
