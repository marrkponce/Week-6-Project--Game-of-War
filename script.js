class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}

class Deck {
    constructor() {
        this.cards = [];
    }

    createDeck () {
        const suits = ['clubs (♣) ', 'diamonds (♦) ', 'hearts (♥) ','spades (♠) '];
        const ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        const values = [1,2,3,4,5,6,7,8,9,10,11,12,13];

        for(let sIndex = 0; sIndex < suits.length; sIndex++) {
            for(let rIndex = 0; rIndex < ranks.length; rIndex++) {
                this.cards.push(new Card (suits[sIndex], ranks[rIndex], values[rIndex]));
            }
        }
    }
    
    shuffleDeck() { 
        for(let i = this.cards.length - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1));
            const oldValue = this.cards[newIndex];
            this.cards[newIndex] = this.cards[i];
            this.cards[i] = oldValue;
        }
    }

    dealDeck() {
        // console.log('deck of cards', this.cards);
    

        for(let i = 0; i < 52; i += 2) {
            let deal1 = this.cards.pop();
            player1.playerCards.push(deal1);

            let deal2 = this.cards.pop();
            player2.playerCards.push(deal2);
        }
    }
}


class Player {
    constructor(playerName, playerCards, playerScore) {
        this.playerName = playerName;
        this.playerCards = [];
        this.playerScore = 0;
    }
}

const player1 = new Player ('Mark the Great One');
const player2 = new Player ('Computer');

class Game {
    constructor() {
        this.warPlayers = [];
    }
    
    startGame() {
        this.warPlayers.push(player1);
        this.warPlayers.push(player2);
        deck.createDeck();
        deck.shuffleDeck();
        console.log(deck.cards);
       deck.dealDeck();
       this.gameRounds();
       this.gameScore();
    }

    gameRounds() {
        for (let round = 0; round < 26; round++) {
            let playerCard1 = player1.playerCards.pop();
            // console.log('player', player1);
            let playerCard2 = player2.playerCards.pop();
            console.log(`
            Round ${round + 1}
            ${player1.playerName} has ${playerCard1.rank} of ${playerCard1.suit}.
            ${player2.playerName} has ${playerCard2.rank} of ${playerCard2.suit}
            `);

             if(playerCard1.value > playerCard2.value) {
                player1.playerScore += 1;
                player1.playerScore = 0;
                console.log(`${player1.playerName} is the winner of Round ${round + 1}!`);
            }
            else if(playerCard1.value < playerCard2.value) {
                player1.playerScore = 0;
                player2.playerScore += 1;
                console.log(`${player2.playerName} is the winner of Round ${round + 1}!`);
            }
            else if(playerCard1.value == playerCard2.value) {
                player1.playerScore == 0;
                player2.playerScore == 0;
                console.log(`Round ${round + 1} is a TIE!`);
            }
        }
    }

    gameScore(){
        let finalScore1 = player1.playerScore;
        let finalScore2 = player2.playerScore;
        console.log(`${player1.playerName} final score - ${finalScore1}!
                    ${player2.playerName} final score - ${finalScore2}!`);

            if(player1.playerScore > player2.playerScore) {
                console.log(`${player1.playerName} is the final winner!`);
            }
            else if(player1.playerScore < player2.playerScore) {
                console.log(`
                ${player2.playerName} is the final winner!
                `);
            }
            else {
                console.log(`The game is TIED!`);
            }
    }
}

const deck = new Deck();
console.log(deck.cards);

let newGame = new Game();
newGame.startGame();