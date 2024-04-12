// Questions Array
const questions = [
    {
        question: "How long did the war between England and Zanzibar last?",
        answers: [
            { text: "3 hours", correct: false },
            { text: "45 Minutes", correct: true },
            { text: "3 days", correct: false },
            { text: "3 Weeks", correct: false }
        ]
    },
    {
        question: "What was the name of the research ship Charles Darwin traveled with?",
        answers: [
            { text: "The Golden Retriever", correct: false },
            { text: "The Bulldog", correct: false },
            { text: "The Spaniel", correct: false },
            { text: "The Beagle", correct: true }
        ]
    },
    {
        question: "In which year was John F. Kennedy assassinated?",
        answers: [
            { text: "1960", correct: false },
            { text: "1969", correct: false },
            { text: "1961", correct: false },
            { text: "1963", correct: true }
        ]
    },
    {
        question: "Greenland was a colony of which country until 1981?",
        answers: [
            { text: "Denmark", correct: true },
            { text: "Sweden", correct: false },
            { text: "Russia", correct: false },
            { text: "Switzerland", correct: false }
        ]
    },
    {
        question: "How many days in a week were there in ancient Roman times?",
        answers: [
            { text: "8", correct: true },
            { text: "10", correct: false },
            { text: "12", correct: false },
            { text: "5", correct: false }
        ]
    },
    {
        question: "When did the first Space Shuttle go into space?",
        answers: [
            { text: "March 1st, 1983", correct: false },
            { text: "February 31st, 1981", correct: false },
            { text: "May 27th, 1978", correct: false },
            { text: "April 12th, 1981", correct: true }
        ]
    },
    {
        question: "Who was shot outside the Hilton Hotel in Washington on March 30th, 1981?",
        answers: [
            { text: "John Lennon", correct: false },
            { text: "Ronald Reagan", correct: true },
            { text: "Martin Luther King Jr", correct: false },
            { text: "Yitzhak Rabin", correct: false }
        ]
    },

    {
        question: "Where were the first modern Olympics held?",
        answers: [
            { text: "Athens", correct: true },
            { text: "Rome", correct: false },
            { text: "London", correct: false },
            { text: "Moscow", correct: false }
        ]
    },
    {
        question: "Which Russian astronaut was the first man to conduct a spacewalk?",
        answers: [
            { text: "Yuri Gagarin", correct: false },
            { text: "Vladimir Komarov", correct: false },
            { text: "Alexey Leonov", correct: true },
            { text: "Sergei Krikalev", correct: false }
        ]
    },
    {
        question: "What is the modern name for Van Diemen's Land?",
        answers: [
            { text: "Siberia", correct: false },
            { text: "Tasmania", correct: true },
            { text: "Belarus", correct: false },
            { text: "North Korea", correct: false }
        ]
    },
    {
        question: "Roald Amundsen led a successful expedition to what location in 1911?",
        answers: [
            { text: "Death Valley Expedition", correct: false },
            { text: "Mount Everest", correct: false },
            { text: "The South Pole", correct: true },
            { text: "Apollo", correct: false }
        ]
    },
    {
        question: "The ancient city of Rome was built on how many hills?",
        answers: [
            { text: "6", correct: false },
            { text: "7", correct: true },
            { text: "10", correct: false },
            { text: "3", correct: false }
        ]
    },
    {
        question: "Who built the first car in America?",
        answers: [
            { text: "James Bentley", correct: false },
            { text: "Harry Mercedes", correct: false },
            { text: "Henry Ford", correct: true },
            { text: "Ronald Renault", correct: false }
        ]
    },
    {
        question: "Which war took place between 1950 and 1953?",
        answers: [
            { text: "World War 1", correct: false },
            { text: "The Cold War", correct: false },
            { text: "The Korean War", correct: true },
            { text: "American Civil War", correct: false }
        ]
    },
    {
        question: "What is the name of the first human civilization?",
        answers: [
            { text: "Indus River Valley Civilization", correct: false },
            { text: "Ancient Mesoamerica", correct: false },
            { text: "Ancient Egypt", correct: false },
            { text: "Mesopotamia", correct: true }
        ]
    },
    {
        question: "Which team won the first Super Bowl?",
        answers: [
            { text: "GreenBay Packers", correct: true },
            { text: "Philadelphia Eagles", correct: false },
            { text: "Denver Broncos", correct: false },
            { text: "Kansas City Chiefs", correct: false }
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
        question: "How many times has the Mona Lisa been stolen?",
        answers: [
            { text: "1", correct: true },
            { text: "3", correct: false },
            { text: "50", correct: false },
            { text: "12", correct: false }
        ]
    },
    {
        question: "In which year was the Berlin Wall torn down?",
        answers: [
            { text: "1969", correct: false },
            { text: "1993", correct: false },
            { text: "1979", correct: false },
            { text: "1989", correct: true }
        ]
    },
    {
        question: "What is the name of The Beatles' debut album?",
        answers: [
            { text: "Revolver", correct: false },
            { text: "Abbey Road", correct: false },
            { text: "Please Please Me", correct: true },
            { text: "Rubber Soul", correct: false }
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


function enterName() {
    let userName = prompt("Enter your name");
    if (userName === null || userName === "") {
        userName = "Hidden Player";
    }
    return userName;
}



//  Shuffle the questions array using Fisher-Yates algorithm - FIND A GOOGLE CREDIT FOR THIS
function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let temp = questions[i];
        questions[i] = questions[j];
        questions[j] = temp;
    }
}

// Shuffle answer options 

function shuffleAnswers() {
    answersArray = questions[currentQuestionIndex].answers;
    for (let i = answersArray.length -1; i > 0; i--){
        let j = Math.floor(Math.random() * i);
        let temp = answersArray[i];
        answersArray[i] = answersArray[j];
        answersArray[j] = temp;
    }
}

//Function to start the game
function startQuiz() {
    shuffleQuestions();
    score = 0;
    incorrect = 0;
    currentQuestionIndex = 0;
    nextButton.innerHTML = "Next";
    displayQuestion();
}

// Function to display the question and possible answers available for a user to select
function displayQuestion() {
    shuffleAnswers();
    
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

// Reset state function removes next button from display until an answer is clicked

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Reset score function to reset the scores on the top of the game to 0

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

    if (score === questions.length){
        questionElement.innerHTML = `WOW ${enterName()}, what an amazing score! You got ${score} out of ${questions.length}!`;
    } else if (score > incorrect){
        questionElement.innerHTML = `WOW ${enterName()}, great score! You got ${score} out of ${questions.length}!`;
    } else {
        questionElement.innerHTML = `Better luck next time ${enterName()}, You got ${score} out of ${questions.length}!`;
    }

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
}; 

document.addEventListener('DOMContentLoaded', () => {
    if (nextButton){
        nextButton.addEventListener("click", () => {
            if (currentQuestionIndex < questions.length){
                handleNextButton();
            } else {
                resetScore();
                startQuiz();
            }
        });
    }
    startQuiz();
});










