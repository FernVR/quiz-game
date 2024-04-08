// Questions Array
const questions = [
    {
        question: "What country has the highest life expectancy?",
        answers: [
            { text: "Sweden", correct: false },
            { text: "Hong Kong", correct: true },
            { text: "USA", correct: false },
            { text: "Portugal", correct: false }
        ]
    },
    {
        question: "Who was the Ancient Greek God of the Sun?",
        answers: [
            { text: "Dionysus", correct: false },
            { text: "Ares", correct: false },
            { text: "Zeus", correct: false },
            { text: "Apollo", correct: true }
        ]
    },
    {
        question: "What country drinks the most coffee?",
        answers: [
            { text: "France", correct: false },
            { text: "Italy", correct: false },
            { text: "Brazil", correct: false },
            { text: "Finland", correct: true }
        ]
    },
    {
        question: "What is the smallest country in the world?",
        answers: [
            { text: "Vatican City", correct: true },
            { text: "Bhutan", correct: false },
            { text: "Nepal", correct: false },
            { text: "Sri Lanka", correct: false }
        ]
    },
    {
        question: "Simone Biles is famous for her skill in what sport?",
        answers: [
            { text: "Gymnastics", correct: true },
            { text: "Football", correct: false },
            { text: "Tennis", correct: false },
            { text: "Rowing", correct: false }
        ]
    },
    {
        question: "In what country was Elon Musk born?",
        answers: [
            { text: "Denmark", correct: false },
            { text: "USA", correct: false },
            { text: "Germany", correct: false },
            { text: "South Africa", correct: true }
        ]
    },
    {
        question: "How many minutes are in a full week?",
        answers: [
            { text: "5,065", correct: false },
            { text: "10,080", correct: true },
            { text: "25,120", correct: false },
            { text: "100,000", correct: false }
        ]
    },

    {
        question: "What is the largest desert in the world?",
        answers: [
            { text: "Antartica", correct: true },
            { text: "Gobi", correct: false },
            { text: "Sahara", correct: false },
            { text: "Kalahari", correct: false }
        ]
    },
    {
        question: "Aureolin is a shade of what color?",
        answers: [
            { text: "Pink", correct: false },
            { text: "Gold", correct: false },
            { text: "Yellow", correct: true },
            { text: "Green", correct: false }
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Europe", correct: false },
            { text: "Africa", correct: false }
        ]
    },
    {
        question: "How many ghosts chase Pac-Man at the start of each game?",
        answers: [
            { text: "5", correct: false },
            { text: "2", correct: false },
            { text: "4", correct: true },
            { text: "3", correct: false }
        ]
    },
    {
        question: "What is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "Which planet has the most moons?",
        answers: [
            { text: "Jupiter", correct: false },
            { text: "Venus", correct: false },
            { text: "Saturn", correct: true },
            { text: "Uranus", correct: false }
        ]
    },
    {
        question: "In what African country would you find Mount Kilimanjaro?",
        answers: [
            { text: "Kenya", correct: false },
            { text: "Zambia", correct: false },
            { text: "Tanzania", correct: true },
            { text: "Ghana", correct: false }
        ]
    },
    {
        question: "How many bones do we have in an ear?",
        answers: [
            { text: "5", correct: false },
            { text: "2", correct: false },
            { text: "4", correct: false },
            { text: "3", correct: true }
        ]
    },
    {
        question: "Compared to their body weight, what animal is the strongest?",
        answers: [
            { text: "Dung Beetle", correct: true },
            { text: "Cow", correct: false },
            { text: "Ant", correct: false },
            { text: "Elephant", correct: false }
        ]
    },

    {
        question: "Where did sushi originate?",
        answers: [
            { text: "Singapore", correct: false },
            { text: "USA", correct: false },
            { text: "China", correct: true },
            { text: "Japan", correct: false }
        ]
    },
    {
        question: "Pink Ladies and Granny Smiths are types of what fruit?",
        answers: [
            { text: "Apples", correct: true },
            { text: "Bananas", correct: false },
            { text: "Oranges", correct: false },
            { text: "Strawberries", correct: false }
        ]
    },
    {
        question: "Scuttle stars in which Disney movie?",
        answers: [
            { text: "Snow White", correct: false },
            { text: "Sleeping Beauty", correct: false },
            { text: "Tangled", correct: false },
            { text: "The Little Mermaid", correct: true }
        ]
    },
    {
        question: "Cacio & Pepe is a staple of what Italian city's cuisine?",
        answers: [
            { text: "Milan", correct: false },
            { text: "Venice", correct: false },
            { text: "Rome", correct: true },
            { text: "Florence", correct: false }
        ]
    },
];

// Selected HTML elements in the DOM
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scores = document.getElementsByClassName("scores-area");
const startBtn = document.getElementById("start-btn");
const rulesBtn = document.getElementById("rules");
const rulesList = document.getElementById("rules-list");

// Variables
let currentQuestionIndex = 0;
let score = 0;
let incorrect = 0;



//  Shuffle the questions array using Fisher-Yates algorithm - FIND A GOOGLE CREDIT FOR THIS
function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let temp = questions[i];
        questions[i] = questions[j];
        questions[j] = temp;
    }
}

// Shuffle answer options - How do i fix?? 

function shuffleAnswers() {
    for (let i = answers.text.length -1; 1 > 0; i--){
        let j = Math.floor(math.random() * i);
        let temp = answers.text[i];
        answers.text[i] = answers.text[j];
        answers.text[j] = temp;
    }
}

// Display rules function will show the list of rules when rules button is clicked - How do i do??? (this doesn't work)
function displayRules() {
    rulesBtn.addEventListener("click", () => {
        rulesList.style.display = "block"  
    })
}

//Function to start the game
function startQuiz() {
    shuffleQuestions();
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    displayQuestion();
}

// Function to display the question and possible answers available for a user to select
function displayQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

// Functions to increment correct and incorrect scores to display in container on top of the game page
function incrementScore() {
    score++;
    document.getElementById("score").textContent = score;
}

function incrementIncorrect() {
    incorrect++;
    document.getElementById("incorrect").textContent = incorrect;
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// This doesn't work either- not sure at all how to fix it as I've tried a few different options and none seem to work

function resetScore() {
    score = 0;
    document.getElementById("score").textContent = 0;

    incorrect = 0;
    document.getElementById("incorrect").textContent = incorrect;

    currentQuestionIndex = 0;
}

/**  Function to select answer and check if answer is correct or incorrect, answers will have a class name 
     of "correct" or "incorrect" to change colours in css doc and prevent a user from selecting
*/

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        incrementScore();
    } else {
        selectedBtn.classList.add("incorrect");
        incrementIncorrect();
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

// end of game displays final score

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

/* next button will be displayed so long as there are questions in the array that require an answer
   showScore function dispays score at the end of game */
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        resetScore();
        startQuiz();
    }
});

// Fix this somehow? doesn't run the quiz when added event listener?
startQuiz();
