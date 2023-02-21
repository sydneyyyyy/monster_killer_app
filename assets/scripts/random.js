const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
    console.log('Game is starting...');
}



// Can store a function within an object (method). 
// const person = {
//     greet: function greet() {
//         console.log('Hello there!');
//     }
// }

// person.greet();

// console.log(typeof startGame);// returns function
// console.dir(startGame); // returns properties of the startGame function




startGameBtn.addEventListener('click', startGame);