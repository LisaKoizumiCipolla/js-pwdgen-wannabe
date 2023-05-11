
const userName = (prompt('Insert your name'));

const userSurname = (prompt('Insert your surname'));

const userFavouriteColour = (prompt('Insert your favourite colour'));

const randomNumber = Math.floor(Math.random() * (99-1));

let userPassword = userName + userSurname + userFavouriteColour + randomNumber;

document.getElementById('your-password').innerHTML = userPassword

console.log(userPassword);