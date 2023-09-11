var questionData = [
    {
        question: "What is the Full Form Of HTML",
        options: [
            "HyperText Makeup Language",
            "HyperText Markup Language",
            "HyperText Markup Lame",
            "HyperTate Markup Language",
        ],
        answer: "HyperText Markup Language",
    },
    {
        question: "What does CSS stands for?",
        answer: "Cascading Style Sheet",
        options: [
            "Common Style Sheet",
            "Colorful Style Sheet",
            "Computer Style Sheet",
            "Cascading Style Sheet",
        ],
    },
    {
        question: "What does PHP stands for?",
        answer: "Hypertext Preprocessor",
        options: [
            "Hypertext Preprocessor",
            "Hypertext Programming",
            "Hypertext Preprogramming",
            "Hometext Preprocessor",
        ],
    },
    {
        question: "What does SQL stands for?",
        answer: "Structured Query Language",
        options: [
            "Stylish Question Language",
            "Stylesheet Query Language",
            "Statement Question Language",
            "Structured Query Language",
        ],
    },
    {
        question: "What year was JavaScript launched?",
        answer: "1995",
        options: ["1996", "1995", "1994", "None of the Above"],
    },
];

var questionCount = document.getElementById("questionCount");
var question = document.getElementById("question");
var options = document.getElementById("options");

var questionIndex = 0;
var score = 0;

function renderQuestion() {
    if (questionIndex < questionData.length) {
        var currentQuestion = questionData[questionIndex];
        question.innerHTML = currentQuestion.question;
        questionCount.innerHTML = `Current Question: ${questionIndex + 1}/${questionData.length}`;
        options.innerHTML = "";
        
        currentQuestion.options.forEach(function (option) {
            options.innerHTML += `
                <button class="option" onclick="checkAnswer('${option}', '${currentQuestion.answer}')">
                    ${option}
                </button>`;
        });
    } else {
        console.log("END ...");
        showScore();
    }
}

function nextQuestion() {
    questionIndex++;
    renderQuestion();
}

function checkAnswer(userAnswer, correctAnswer) {
    if (userAnswer === correctAnswer) {
        score++;
    }
    nextQuestion();
}

function showScore() {
    question.innerHTML = "Quiz Completed!";
    options.innerHTML = `Your Score: ${score}/${questionData.length}`;
}

renderQuestion();
