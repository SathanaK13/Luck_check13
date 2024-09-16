let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let rand_num = Math.ceil(Math.random() * 10);
console.log(rand_num);

function checkGuess() {
    let user_num = parseInt(userInput.value);
    if (user_num > rand_num && user_num<=10) {
        gameResult.style.backgroundColor = "blue";
        gameResult.textContent = "Too high try again";
    } else if (user_num < rand_num && user_num<=10) {
        gameResult.style.backgroundColor = "blue";
        gameResult.textContent = "Too low try again";
    } else if (rand_num === user_num) {
        gameResult.style.backgroundColor = "green";
        gameResult.textContent = "Congrats!! You got it!!";
    }
    else{
        gameResult.style.backgroundColor="crimson";
        gameResult.textContent="Please check the input";
        window.alert("enter a number between 1 to 10");
    }
}