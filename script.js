console.log("Hello and Welcome to the game 🌎");
// global constants
const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

// for random numbers
const random1 = Math.floor(Math.random() * 6) + 1
const random2 = Math.floor(Math.random() * 6) + 1
const random3 = Math.floor(Math.random() * 6) + 1
const random4 = Math.floor(Math.random() * 6) + 1
const random5 = Math.floor(Math.random() * 6) + 1
const random6 = Math.floor(Math.random() * 6) + 1
const random7 = Math.floor(Math.random() * 6) + 1

var pattern = [random1, random2, random3, random4, random5, random6, random7];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.2;  //must be between 0.0 and 1.0
var guessCounter = 0;


function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}

function stopGame(){
    gamePlaying = false;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

// ----------------------------------------------------------------------------------------
// GAME LOGIC
function guess(btn){
  console.log("button guessed: " + btn);
  // if not running
  if(!gamePlaying){
    return;
  }
  if(btn == pattern[guessCounter]){ // if user guessed = Correct, check below
    if(progress == guessCounter){ // to check if the game is over or not
      if(progress == pattern.length - 1){ // when it hits the end, all button was guessed correctly
        // Game ends, player have won
        winGame();
      }
      else{ // there are more to guess
        // game is not over yet, keep going
        progress++; // increment the round because its not over
        playClueSequence(); // give more clues
      }
    }
    else{ // game is not over, keep guessing
      // checking the user's next guess
      guessCounter++;
    }
  }
  else{ // user guessed wrong
    // Game ends, player lost
    loseGame();
  }
}
// ----------------------------------------------------------------------------------------

////////////////////////////////////////////////////////////////////////
// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 552.1,
  6: 633.5
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)