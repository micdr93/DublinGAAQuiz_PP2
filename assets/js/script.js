//Adding quiz Questions here

let quizQuestions = [
   { 
    question: "Whos is the current Dublin Senior Football manager?",
    answers: ["Jim Gavin", "Paul Caffrey", "Dessie Farrel", "Pat Gilroy"],
    correctAnswer: "Dessie Farrel"
},
   { 
    question: "How many Allstar Awards does Brian Fenton have?",
    answers: ["Seven", "Five", "Four", "Six"],
    correctAnswer: "Six"
    },

    {   
        question: "Who scored the winning point in the All-Ireland Final versus Kerry?",
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

function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
    const answersList = document.getElementById("answers");
    answersList.innerHTML = "";
    currentQuestion.answers.forEach(answer => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = answer;
        button.onclick = function() { selectAnswer(answer); };
        li.appendChild(button);
        answersList.appendChild(li);
    });
    document.getElementById("submitBtn").style.display = "block";
}

function selectAnswer(selectedAnswer) {
    if (selectedAnswer === quizQuestions[currentQuestionIndex].correctAnswer) {
        quizScore++;
    }
}

function submitAnswer() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById("quizContainer").style.display = "none";
    document.getElementById("score").style.display = "block";
    document.getElementById("score").textContent = `Hello ${userName}, your score is: ${quizScore}/${quizQuestions.length}`;
    const scoreEntry = `${userName}: ${quizScore}/${quizQuestions.length}`;
    scores.push(scoreEntry);
    updateScoreboard();
}

function updateScoreboard() {
    const scoreEntriesDiv = document.getElementById("scoreEntries");
    scoreEntriesDiv.innerHTML = "";
    scores.forEach(score => {
        const div = document.createElement("div");
        div.textContent = score;
        scoreEntriesDiv.appendChild(div);
    });
}