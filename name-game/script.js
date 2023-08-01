let players = [];
let round = 1;
let letter = "";

function startGame() {
  const numPlayersInput = document.getElementById("numPlayers");
  const numPlayers = parseInt(numPlayersInput.value);

  if (numPlayers < 1) {
    alert("Please enter a valid number of players.");
    return;
  }

  numPlayersInput.disabled = true;
  document.querySelector("button").disabled = true;
  document.getElementById("gameSection").style.display = "block";

  createPlayerFields(numPlayers);
  generateLetter();
}

function createPlayerFields(numPlayers) {
  const playerSection = document.getElementById("playerSection");

  for (let i = 0; i < numPlayers; i++) {
    const playerDiv = document.createElement("div");
    const playerName = document.createElement("input");

    playerName.type = "text";
    playerName.placeholder = "Player " + (i + 1) + " name";
    playerDiv.appendChild(playerName);

    playerSection.appendChild(playerDiv);

    players.push({
      name: "",
      words: []
    });
  }
}

function generateLetter() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  letter = letters.charAt(Math.floor(Math.random() * letters.length));
  document.getElementById("letter").textContent = letter;
}

function submitWords() {
  const playerInputs = document.querySelectorAll("#playerSection input");
  const words = [];

  playerInputs.forEach((input, index) => {
    const playerName = input.value.trim();

    if (playerName === "") {
      alert("Please enter a name for Player " + (index + 1));
      return;
    }

    const wordInput = input.nextSibling;
    const word = wordInput.value.trim();

    if (word === "") {
      alert("Please enter a word for Player " + (index + 1));
      return;
    }

    if (!word.toLowerCase().startsWith(letter.toLowerCase())) {
      alert("Word must start with the letter " + letter);
      return;
    }

    words.push(word.toLowerCase());

    players[index].name = playerName;
    players[index].words.push(word.toLowerCase());

    // Clear input fields
    input.value = "";
    wordInput.value = "";
  });

  const uniqueWords = [...new Set(words)];
  const scores = {};

  uniqueWords.forEach(word => {
    scores[word] = 10;

    players.forEach(player => {
      if (player.words.filter(w => w === word).length > 1) {
        scores[word] += 5;
      }
    });
  });

  displayScores(scores);
  round++;
  generateLetter();
}

function displayScores(scores) {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "<h3>Round " + round + " Scores:</h3>";

  Object.entries(scores).forEach(([word, score]) => {
    const scoreText = document.createElement("p");
    scoreText.textContent = word + ": " + score + " points";
    outputDiv.appendChild(scoreText);
  });
}
