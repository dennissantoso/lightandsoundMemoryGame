# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Dennis Santoso**

Time spent: **8** hours spent in total

Link to Live Site: https://tungsten-rift-cairnsmore.glitch.me
Link to Code: https://glitch.com/edit/#!/tungsten-rift-cairnsmore

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [X] Buttons use a pitch (frequency) other than the ones in the tutorial
- [X] More than 4 functional game buttons
- [X] Playback speeds up on each turn
- [X] Computer picks a different pattern each time the game is played
- [X] Game button appearance change goes beyond color (e.g. add an image)

The following **additional** features are implemented:

- [x] Added a Copyright at the footer of the page

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

Win Preview
![](https://i.imgur.com/JczmEdI.gif)
Lose Preview
![](https://i.imgur.com/kok1YzV.gif)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

   - I used stackoverflow to help me figured out how random number generator works in javascript
   (https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript).
   - I also use google search for a random soft pastel colors for the theme of the game
   (https://www.google.com/search?q=soft+color+palettes&sxsrf=APq-WBsjs_u8ldwvwdAmWwPp8v-GZAaVNQ:1648073548562&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjQ2LOzoN32AhUdJkQIHZyfB-wQ_AUoAXoECAEQAw&biw=1918&bih=1009&dpr=1).
   - I used codepen to create a diamond shape buttons
   (https://codepen.io/nickelse/pen/YWOxQG).

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   
   - The biggest challenge I encountered is in the last required steps where I have to set up the handling guesses for the game logic. 
   I had trouble finishing it and I overcome it by using the provided code that CodePath has.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
   
   - After completing my submission, I was a bit confused on how we are able to use the sound library with both setInterval and clearInterval without having the need to implement javascript libraries on top of the provided script.js?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   
   - If I had more time, I want to make my project cleaner and easier to understand. 
   As I want to make my project different than the others, I would try to be original with my design. 
   The first thing I would do is to design it first through Figma (make sure the layout works for both Mobile and Desktop) and then implement it. 
   As I don't have a lot of knowledge in web development, I would research javascript libraries such as react.js to give out more animation and personality to the project. 
   I would then implement a scoring system and a timer to make it more fun. 
   I could also implement an endless mode and ranking/leaderboard system to the game so that is more challenging. 
   Lastly, I will put database management such as MongoDB to keep track of players' leaderboards and the number of times people visited my website. 

## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)

## License

    Copyright [Dennis Santoso]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
