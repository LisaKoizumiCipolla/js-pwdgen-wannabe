alert(prompt('\t Welcome to the more-random-generator!\t \n \t Click on the button to start! alert \t'));

const userName = (prompt('Insert your name'));

const userSurname = (prompt('Insert your surname'));

const userFavouriteColour = prompt('Insert your favourite colour');

const userNumber = parseInt(prompt('Insert a number'));

const computerGenNumber = Math.floor(Math.random() * (99-1));

const randomNumber = Math.floor(userNumber + computerGenNumber);

let userPassword = userName + userSurname + userFavouriteColour + randomNumber;

document.getElementById('your-password').innerHTML = userPassword

console.log(userPassword);