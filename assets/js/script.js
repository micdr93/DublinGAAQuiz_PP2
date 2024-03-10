/*jshint esversion: 6 */

//Adding quiz Questions here

const quizQuestions = [
   { 
    question: "Who is the current Dublin Senior Football manager?",
    answers: ["Jim Gavin", "Paul Caffrey", "Dessie Farrell", "Pat Gilroy"],
    correctAnswer: "Dessie Farrell"
    },
   { 
    question: "How many Allstar Awards does Brian Fenton have?",
    answers: ["Seven", "Five", "Four", "Six"],
    correctAnswer: "Six"
    },

    {   
        question: "Who scored the winning point in the All-Ireland Final versus Kerry in 2011?",
        answers: ["Bernard Brogan", "Kevin McManaman", "Stephen Cluxton", "Alan Brogan"],
        correctAnswer: "Stephen Cluxton"
    },
    {   
        question: "How many Senior All-Ireland Football titles have Dublin won in total?",
        answers: ["Twenty-seven", "Thirty-one", "Twenty-nine", "Thirty-three"],
        correctAnswer: "Thirty-one"
    },
    {
        question: "How many players on the Senior football panel play for their local club Raheny?",
        answers: ["Two", "Four", "Three", "Five"],
        correctAnswer: "Three"
    },
    {   
        question: "How many All-Ireland Football titles did Diarmuid Connolly win?",
        answers: ["Three", "One", "Four", "Two"],
        correctAnswer: "Two"
    },
];

let currentQuestionIndex = 0;
let quizScore = 0;
let userName = '';
const scores = [];

//Adding startQuiz function
function startQuiz() {
    userName = document.getElementById("username").value.trim();
    if (userName.length === 0) {
        alert("Please enter your name to start the quiz.");
        return;
    }
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("quizContainer").style.display = "block";
    displayQuestion();
}
//Adding displayQuestion function here
function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
    const answersList = document.getElementById("answers");
   //Clears all list itemes before showing the next one
    while (answersList.firstChild) {
    
        answersList.removeChild(answersList.firstChild);
    }
    currentQuestion.answers.forEach(answer => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = answer;
        button.addEventListener("click", function() { selectAnswer(answer); });
        li.appendChild(button);
        answersList.appendChild(li);
    });
 
}
//Adding Select Answer function
function selectAnswer(selectedAnswer) {
    if (selectedAnswer === quizQuestions[currentQuestionIndex].correctAnswer) {
        console.log("Correct!");
        quizScore++;
    } else {
        console.log("Incorrect!");
    }
    submitAnswer();
}
//Adding submitAnswer function
function submitAnswer() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        displayQuestion();
    } else {
        showResults();
    }}
// Adding showResults function
function showResults() {
    document.getElementById("quizContainer").style.display = "none";
    document.getElementById("score").style.display = "block";
    document.getElementById("score").textContent = ` ${userName}, your score is: ${quizScore}/${quizQuestions.length}`;
    const scoreEntry = { name: userName, score: quizScore };
    let savedScores = JSON.parse(localStorage.getItem("quizScores") || "[]");
    savedScores.push(scoreEntry);
    localStorage.setItem("quizScores", JSON.stringify(savedScores));
    updateScoreboard();
    addRestartButton();
}
// Adding updateScoreboard function here:
function updateScoreboard() {
    let scores = JSON.parse(localStorage.getItem("quizScores") || "[]");
    scores.sort((a, b) => b.score - a.score);
    const scoreEntriesDiv = document.getElementById("scoreEntries");
    scoreEntriesDiv.innerHTML = ""; 
    const heading = document.createElement('h3');
    heading.classList.add("heading"); 
    heading.textContent = 'High Scores';
    scoreEntriesDiv.appendChild(heading);
    scores.forEach((scoreEntry, index) => {
        const div = document.createElement("div");
        div.classList.add("username");
        div.textContent = `${index + 1}. ${scoreEntry.name}: ${scoreEntry.score}/${quizQuestions.length}`;
        scoreEntriesDiv.appendChild(div);
    });
}

function addRestartButton() {
const scoreEntriesDiv = document.getElementById("scoreEntries");
const restartButton = document.createElement('button');
restartButton.classList.add("restart-button"); 
restartButton.textContent = 'Restart';
restartButton.onclick = function (){
    window.location.reload();
};
scoreEntriesDiv.appendChild(restartButton);
}