const startGameBtn = document.getElementById('start-game-btn');
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER}, or ${SCISSORS}?`, '').toUpperCase();
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
        alert(`Invalid Choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
        return;
    }
    return selection;
}

const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => 
    // Ternary Expression
    cChoice === pChoice 
        ? RESULT_DRAW 
        : (cChoice === ROCK && pChoice === PAPER) || 
            (cChoice === PAPER && pChoice === SCISSORS) || 
            (cChoice === SCISSORS && pChoice === ROCK) 
        ? RESULT_PLAYER_WINS 
        : RESULT_COMPUTER_WINS;


startGameBtn.addEventListener('click', () => {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log("Game is starting...");
    const playerSelection = getPlayerChoice();
    const computerChoice = getComputerChoice();
    let winner;
    if (playerSelection) {
        winner = getWinner(computerChoice, playerSelection);
    } else {
        winner = getWinner(computerChoice);
    }
    let message = `You picked ${playerSelection || DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore you `;
    if (winner === RESULT_DRAW) {
        message = message + 'had a draw.';
    } else if (winner === RESULT_PLAYER_WINS) {
        message = message + 'won.';
    } else {
        message = message + 'lost.';
    }
    alert(message);
    gameIsRunning = false;
});

// NOT GAME RELATED -> better to use than arguments.
const combine = (resultHandler, operation, ...numbers) => {
    const validateNumber = (number) => {
        return isNaN(number) ? 0 : number;
    };
    let sum = 0;
    for (const num of numbers) {
        if (operation === 'SUM') {
            sum += validateNumber(num);
        } else {
            sum -= validateNumber(sum);
        }
        
    }
    resultHandler(sum);
}

const showResult = (messageText, result) => {
    alert(messageText + ' ' + result);
}

combine(showResult.bind(this, 'The result after adding all numbers is:'), 'ADD', 1, 4, 'shfe', 53, 39, 10);
combine(showResult.bind(this, 'The result after adding all numbers is:'), 'ADD', 1, 2, 3);
combine(showResult.bind(this, 'The result after subtracting all numbers is:'), 'SUBTRACT', 1, 10, 20, 15);



