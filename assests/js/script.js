// inner HTML variables
var startingPage = document.querySelector('.starting');
var startBtn = document.querySelector('.startBtn');
var nextBtn = document.querySelector('.nextBtn');
var questions = document.querySelector('.questions');
var endingPage = document.querySelector('.ending');
var showScore = document.querySelector('.score');
var enterName = document.querySelector('.name');
var saveScoreBtn = document.querySelector('.saveScoreBtn');
var question = document.getElementById('question');
var a1 = document.getElementById('a1');
var a2 = document.getElementById('a2');
var a3 = document.getElementById('a3');
var a4 = document.getElementById('a4');
var score = 0;

// other variables
let shuffleQuestions, currentQuestions

// start button function
startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', () => {
    currentQuestions++
    nextQuestions()
});

function startGame() {
    //shuffleQuestions = question.sort(() => Math.random() - .5);
    currentQuestions = 0;
    startBtn.style.display = "none";
    questions.style.display = "block";
    nextQuestion();
}
// next button
function nextQuestion() {
    question.textContent = codeQuestions[currentQuestions].title;
    a1.textContent = codeQuestions[currentQuestions].choices[0];
    a2.textContent = codeQuestions[currentQuestions].choices[1];
    a3.textContent = codeQuestions[currentQuestions].choices[2];
    a4.textContent = codeQuestions[currentQuestions].choices[3];
};

function answerSelection() {
    if(this.textContent === codeQuestions[currentQuestions].answer) {
        score+=10;
        showScore.textContent = score;
        console.log('correct');
    } else {
        console.log('incorrect');
    }
    currentQuestions+=1;
    console.log(currentQuestions, codeQuestions.length)
    if(currentQuestions < codeQuestions.length) {
        nextQuestion();
    } else {
        questions.style.display = "none"
        endGame();
    }
}

// timer and penalize time if there are wrong questions??
function timer() {
// get timer out the class repo
};

// end of game
function endGame() {
    console.log("Game Over")
};

// questions
var codeQuestions = [
    {
        title:"Which method would you use to change an element in an inner HTML file?",
        choices: ['getElementById', 'addEventListener', 'setAttribute', 'getAttribute'],
        answer:"getElementById"
    },
    {
        title:'Which of these are not an addEventListener option?',
        choices: ['click', 'mouseover', 'keyup', 'spacebar'],
        answer: 'spacebar'
    },
    {
        title: 'What does DOM stand for?',
        choices: ['Document Object Model', 'Document Oriented Model', 'Document Of Model', 'Dire Old Man'],
        answer: 'Document Object Model'
    },
    {
        title: 'Which is the right way to use the getElementById?',
        //add answer
        choices: ["document.getElementById('.startBtn')", "document.getElementById('#startBtn')", "document.getElementById('startBtn')"],
        answer: "document.getElementById('#startBtn')"
    },
    {
        title: 'How would you tell JavaScript that you want to round 4.6 to the nearest integer?',
        choices: ['Math.round', 'Math.rnd', 'round', 'Math.floor'],
        answer: 'Math.round'
    },
    {
        title: 'What is the correct way to set the link from an HTML file to Javascript?',
        choices: ['<script>', '<link>', '<href>', '<rel>'],
        answer: '<script>'
    }
]

// event listeners

a1.addEventListener('click', answerSelection);
a2.addEventListener('click', answerSelection);
a3.addEventListener('click', answerSelection);
a4.addEventListener('click', answerSelection);