/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Thierry Stahl'
let currentYear = new Date(). getFullYear();
let profilePicture = 'images/Thierry.jpg'


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');  
const yearElement = document.querySelector('#year');
const imageElement = new Image ();
imageElement.src = profilePicture;

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}<strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.alt = `Profile image of ${fullName}`;

/* Step 5 - Array */

let favoriteFoods = ['Pasta', 'Crêpes', 'Sushi', 'Nuggets', 'Tacos', 'Steak'];
foodElement.innerHTML = favoriteFoods;
let additionalFood = 'Raclette';
favoriteFoods.push(additionalFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;