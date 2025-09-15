/*jshint esversion: 6 */

// Quiz Questions
const quizQuestions = [
    // FOOTBALL – HISTORY & PLAYERS
    {
      question: "How many All-Ireland Senior Football Championships have Dublin won as of 2023?",
      options: ["30", "31", "29", "28"],
      answer: "30"
    },
    {
      question: "Who captained Dublin to the historic five-in-a-row All-Ireland football titles (2015–2019)?",
      options: ["Stephen Cluxton", "Brian Fenton", "James McCarthy", "Ciarán Kilkenny"],
      answer: "Stephen Cluxton"
    },
    {
      question: "What is Dublin GAA’s home stadium?",
      options: ["Páirc Uí Chaoimh", "Croke Park", "Parnell Park", "O’Moore Park"],
      answer: "Croke Park"
    },
    {
      question: "Which Dublin footballer is known as 'The Blue Panther'?",
      options: ["Dean Rock", "Bernard Brogan", "Paul Flynn", "Diarmuid Connolly"],
      answer: "Diarmuid Connolly"
    },
    {
      question: "Which county is Dublin’s traditional football rival in Leinster?",
      options: ["Kildare", "Meath", "Laois", "Offaly"],
      answer: "Meath"
    },
  
    // HURLING – HISTORY & FACTS
    {
      question: "When did Dublin last win the All-Ireland Senior Hurling Championship?",
      options: ["1938", "1942", "1952", "1961"],
      answer: "1938"
    },
    {
      question: "Which team did Dublin beat to win the 2013 Leinster Senior Hurling Championship?",
      options: ["Kilkenny", "Galway", "Wexford", "Offaly"],
      answer: "Galway"
    },
    {
      question: "Who was Dublin’s top scorer in the 2013 Leinster hurling campaign?",
      options: ["David Treacy", "Paul Ryan", "Danny Sutcliffe", "Liam Rushe"],
      answer: "Paul Ryan"
    },
    {
      question: "Where do Dublin hurlers usually play their home games?",
      options: ["Croke Park", "Parnell Park", "Nowlan Park", "Páirc Tailteann"],
      answer: "Parnell Park"
    },
    {
      question: "Which legendary hurler managed Dublin from 2011–2014, leading them to a Leinster title?",
      options: ["Anthony Daly", "Mattie Kenny", "Micheál Donoghue", "Pat Gilroy"],
      answer: "Anthony Daly"
    },
  
    // MIXED / FUN
    {
      question: "What colour are Dublin’s jerseys traditionally?",
      options: ["Sky Blue", "Royal Blue", "Navy", "Blue and White Hoops"],
      answer: "Sky Blue"
    },
    {
      question: "What is Dublin GAA’s nickname?",
      options: ["The Tribesmen", "The Royals", "The Dubs", "The Banner"],
      answer: "The Dubs"
    },
    {
      question: "Which sponsor’s name famously appeared on Dublin’s jerseys for over 20 years?",
      options: ["Vodafone", "AIG", "Arnotts", "Bank of Ireland"],
      answer: "Arnotts"
    },
    {
      question: "Which Dublin footballer holds the record for most championship appearances?",
      options: ["Stephen Cluxton", "Ciarán Kilkenny", "James McCarthy", "Brian Fenton"],
      answer: "Stephen Cluxton"
    }
  ];
  
  let currentQuestionIndex = 0;
  let quizScore = 0;
  let userName = '';
  
  // Start Quiz
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
  
  // Display Question & Options
  function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
  
    const answersList = document.getElementById("answers");
    answersList.innerHTML = ""; // clear previous answers
  
    currentQuestion.options.forEach(option => {
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.textContent = option;
      button.classList.add("button");
      button.addEventListener("click", () => selectAnswer(option));
      li.appendChild(button);
      answersList.appendChild(li);
    });
  }
  
  // Handle Selected Answer
  function selectAnswer(selectedAnswer) {
    if (selectedAnswer === quizQuestions[currentQuestionIndex].answer) {
      quizScore++;
    }
    submitAnswer();
  }
  
  // Move to Next Question or Show Results
  function submitAnswer() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
      displayQuestion();
    } else {
      showResults();
    }
  }
  
  // Show Results Screen
  function showResults() {
    document.getElementById("quizContainer").style.display = "none";
    document.getElementById("score").style.display = "block";
    document.getElementById("score").textContent =
      `${userName}, your score is: ${quizScore}/${quizQuestions.length}`;
    
    const scoreEntry = { name: userName, score: quizScore };
    let savedScores = JSON.parse(localStorage.getItem("quizScores") || "[]");
    savedScores.push(scoreEntry);
    localStorage.setItem("quizScores", JSON.stringify(savedScores));
    updateScoreboard();
    addRestartButton();
  }
  
  // Update Scoreboard
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
  
  // Add Restart Button
  function addRestartButton() {
    const scoreEntriesDiv = document.getElementById("scoreEntries");
    const restartButton = document.createElement('button');
    restartButton.classList.add("button");
    restartButton.textContent = 'Restart Quiz';
    restartButton.onclick = () => window.location.reload();
    scoreEntriesDiv.appendChild(restartButton);
  }
  