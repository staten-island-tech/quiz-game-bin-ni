const startButton = document.getElementById("starting-btn");
const questionContainerElement = document.getElementById("questions");
startButton.addEventListener("click", startGame);

function startGame() {
  console.log("Started");
  startButton.classList.add("hide");
  questionContainerElement.classList.remove("hide");
}

function NextQuestion() {}

function SelectAnswer() {}
