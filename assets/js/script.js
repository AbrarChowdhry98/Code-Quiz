//Global Variables
console.log('start button pressed');
var body = document.body;
var timeLeft = 60;
var mainEl = document.getElementById('main');
var timeCounter = document.getElementById("time");
var initialsInput = document.querySelector('#initials');
var introText = document.getElementById("intro-text");
var msgDiv = document.querySelector('#msg');
var startEl = document.querySelector("btn");
var userInitialsSpan = document.querySelector('#user-initials');
var timerEl = document.getElementById('countdown');
var startBtn = document.getElementById('start');
var stringButton = document.querySelector('#string');


// Timer that counts down from 5
function countdown() {
  var timeLeft = 5;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function() {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
      
    }
  }, 1000);
}

var question1 = []

// We start the game with a score of 0.
var score = 0;

// Loop over every question object
for (var i = 0; i < question1.length; i++) {
  // Display current question to user and ask OK/Cancel
  var answer = confirm(questions[i].q);

  // Compare answers
  if (
    (answer === true && question1[i].a === 'true') ||
    (answer === false && question1[i].a === 'false')
  ) {
    // Increase score
    score++;
    // Alert the user
    alert('Correct!');
  } else {
    alert('Wrong!');
  }
}

function renderLastRegistered() {
  // Retrieve the last email and password from localStorage using `getItem()`
  var email = localStorage.getItem('email');
  
  // If they are null, return early from this function
  if (email === null) {
    return;
  }

  // Set the text of the 'userEmailSpan' and 'userPasswordSpan' to the corresponding values from localStorage
  userEmailSpan.textContent = email;
}

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute('class', type);
}


var initials = document.querySelector('#initials').value;

if (initials === '') {
  displayMessage('error', 'Email cannot be blank');
} else {
  displayMessage('success', 'Registered successfully');

  // The Save task Function to local storage
var saveInitials = function() {
  localStorage.setItem("initials", JSON.stringify(initials));
};

  // Save initials to localStorage using `setItem()`
  localStorage.setItem('initials', initials);

  saveInitials();

  // remove all tasks
$("#remove-initials").on("click", function() {
  for (var key in tasks) {
    tasks[key].length = 0;
    $("#list-" + key).empty();
  }
  saveInitials();
});

  renderLastRegistered();

}


startBtn.onclick = countdown;

console.log('start button pressed');



//startBtn.addEventListener('click', countdown);
//start.addEventListener('click', startQuiz);