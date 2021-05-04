const startButton = document.getElementById("starting-btn");
const nextButton = document.getElementById("nextnext-btn");
const questionContainerElement = document.getElementById("questions");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-btn");
let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question: "When was the Declaration of Independence signed?",
    answers: [
      { text: "1776", correct: true },
      { text: "1775", correct: false },
      { text: "1777", correct: false },
      { text: "1774", correct: false },
    ],
  },
  {
    question: "Who was the first president of the U.S?",
    answers: [
      { text: "Barack Obama", correct: false },
      { text: "Donald Trump", correct: false },
      { text: "George Washington", correct: true },
      { text: "Abraham Lincoln", correct: false },
    ],
  },
  {
    question: "Who is the current president of the U.S?",
    answers: [
      { text: "George W. Bush", correct: false },
      { text: "Bin Ni", correct: false },
      { text: "Donald Trump", correct: false },
      { text: "Joe Biden", correct: true },
    ],
  },
  {
    question: "What day is Christmas every year?",
    answers: [
      { text: "December 24", correct: false },
      { text: "December 26", correct: false },
      { text: "December 25", correct: true },
      { text: "December 27", correct: false },
    ],
  },
  {
    question: "what is 1 + 1?",
    answers: [
      { text: "2", correct: true },
      { text: "1", correct: false },
      { text: "0", correct: false },
      { text: "11", correct: false },
    ],
  },
  {
    question: "Which of the following hybrids has the name of beefalo",
    answers: [
      { text: "sheep-buffalo", correct: false },
      { text: "cow-bison", correct: true },
      { text: "cow-buffalo", correct: false },
      { text: "bison-sheep", correct: false },
    ],
  },
  {
    question: "Which country has the only flag that isn't rectangle shaped?",
    answers: [
      { text: "Brazil", correct: false },
      { text: "India", correct: false },
      { text: "Nepal", correct: true },
      { text: "Australia", correct: false },
    ],
  },
  {
    question: "How many planets are in our solar system?",
    answers: [
      { text: "9", correct: false },
      { text: "10", correct: false },
      { text: "7", correct: false },
      { text: "8", correct: true },
    ],
  },
  {
    question: "Are ghosts real?",
    answers: [
      { text: "YES!", correct: true },
      { text: "NOO!", correct: true },
      { text: "IDK!", correct: true },
      { text: "PROBABLY", correct: true },
    ],
  },
  {
    question: "What is the largest organ in our body",
    answers: [
      { text: "skin", correct: true },
      { text: "bones", correct: false },
      { text: "heart", correct: false },
      { text: "digestive system", correct: false },
    ],
  },
  {
    question: "What is the pH level of water",
    answers: [
      { text: "8", correct: true },
      { text: "6", correct: false },
      { text: "7", correct: false },
      { text: "99999", correct: false },
    ],
  },
];
