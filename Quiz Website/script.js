const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answerContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

const quizQuestions = [
    {
        question: "What si the Capital of France",
        answers: [
            { text: "London", correct: false },
            { text: "Berlin", correct: false },
            { text: "Paris", correct: true },
            { text: "Madrid", correct: false },
        ],
    },

    {
        question: "Which country has the highest life expectancy?",
        answers: [
            { text: "Hong Kong", correct: true },
            { text: "China", correct: false },
            { text: "Germany", correct: false },
            { text: "France", correct: false },
        ],
    },

    {
        question: "Who was the Ancient Greek God of the Sun?",
        answers: [
            { text: "Sun God", correct: false },
            { text: "Moon God", correct: false },
            { text: "Apollo", correct: true },
            { text: "Delta", correct: false },
        ],
    },

    {
        question: "How many faces does a Dodecahedron have?",
        answers: [
            { text: "64", correct: false },
            { text: "24", correct: false },
            { text: "12", correct: true },
            { text: "32", correct: false },
        ],
    },

    {
        question: "How many dots appear on a pair of dice?",
        answers: [
            { text: "34", correct: false },
            { text: "44", correct: false },
            { text: "18", correct: false },
            { text: "42", correct: true },
        ],
    },

    {
        question: "What is the world’s largest retailer?",
        answers: [
            { text: "Tesla", correct: false },
            { text: "Walmart", correct: true },
            { text: "Amazon", correct: false },
            { text: "Alibaba", correct: false },
        ],
    },

    {
        question: "In which country would you find Mount Kilimanjaro?",
        answers: [
            { text: "Tanzania", correct: true },
            { text: "South Africa", correct: false },
            { text: "Cuba", correct: false },
            { text: "Egypt", correct: false },
        ],
    },

    {
        question: "How many colors are used in the South African flag?",
        answers: [
            { text: "5", correct: false },
            { text: "7", correct: false },
            { text: "6", correct: true },
            { text: "8", correct: false },
        ],
    },
]

let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

startButton.addEventListener("click", startQuiz);

function startQuiz() {
    currentQuestionIndex = 0;
    scoreSpan.textContent = 0;

    startScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion();
}

function showQuestion() {
    answersDisabled = false;

    const currentQuestion = quizQuestions[currentQuestionIndex]
    currentQuestionSpan.textContent = currentQuestionIndex + 1;

    const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
    progressBar.style.width = progressPercent + "%";

    questionText.textContent = currentQuestion.question;

    answersContainer.innerHTML = "";

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.textContent = answer.text
        button.classList.add("answer-btn")
    })
}
