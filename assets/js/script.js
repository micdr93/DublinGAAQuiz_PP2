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
let userName ='';
let scores =[];

// Adding functions here

function startQuiz () {
    userName = document.getElementById(username).value.trim();
    if (userName.length === 0) {
        alert("Enter your name to start the quiz");
        return;
    }
    document.getElementById("startScreen");
    document.getElementById("quizContainer");
    displayQuestion();
}
// Adding question functions here

let currentQuestion = quizQuestions[currentQuestionIndex];
document.getElementById("question").textContent = currentQuestion.question;
let answersList = document.getElementById("answers");
answersList = "";
currentQuestion.answers.forEach(answer =>{
let li = document.createElement("li");
let button = document.createElement("button");
button.textContent = answer;
button.onclick = function() { selectAnswer(answer);};
li.appendChild(button);
answersList.appendChild(li);

document.getElementById("submitBtn");

}
)

//Adding answer selection function here

function selectAnswer(selectedAnswer) {
    if (selectedAnswer === quizQuestions[currentQuestionIndex].correctAnswer) 
    {
        quizScore++;
    }


}

