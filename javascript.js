let firstCard = randomNumbers();
let secondCard = randomNumbers();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;

let message = "";

let messageEl = document.querySelector("#message-el");
let cardsEl = document.querySelector("#cards-el");
let sumEl = document.querySelector("#sum-el");

function startGame() {
  renderGame();
}

function randomNumbers() {
  let rn = Math.floor(Math.random() * 10);
  return rn;
}

function renderGame() {
  cardsEl.textContent = `Cards: `; // this line reset the previous data
  //   cardsEl.textContent = `Cards: ${firstCard}, ${secondCard}`;

  for (let i = 0; i < cards.length; i++) {
    // cardsEl.textContent += cards[i] + " ";
    cardsEl.textContent += ` ${cards[i]} `;
  }

  //   cardsEl.textContent = "Cards: ";
  //   for (let i = 0; i < cards.length; i++) {
  //     cardsEl.textContent += cards[i] + " ";
  //   }

  sumEl.textContent = `Sum: ${sum}`;

  if (sum <= 20) {
    message = "do you need new card ?";
  } else if (sum === 21) {
    message = "you've got blackjack";
  } else {
    message = "you're out of the game";
  }
  messageEl.textContent = message;
}

function newCard() {
  let getNewCard = randomNumbers();
  cards.push(getNewCard);
  sum += getNewCard;
  renderGame();
}
