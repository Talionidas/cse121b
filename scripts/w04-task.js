/* LESSON 3 - Programming Tasks */
const newImage = document.querySelector('#photo');

/* Profile Object  */
let myProfile = {
    name: "Thierry Stahl",
    photo: 'images/Thierry.jpg',
    favoriteFoods: [
        'Pasta', 
        'Crêpes', 
        'Sushi', 
        'Nuggets', 
        'Tacos', 
        'Steak'

    ],
    hobbies: [
        'Videogames',
        'Stream',
        'Hang out with Friends',
        'Jogging',
        'Watching Japanese Movies and Animes',
        'Teamsports (Volley and Basketball)'
    ],
    placesLived: [],
};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place:'Winterthur',
        length: '4 Years'
    },
    {
        place: 'Menzingen',
        length: '5 Years' 
    },
    {
        place:'St Clément de Rivière',
        length: '2 Years'
    },
    {
        place:'Murles',
        length: '3 Years'
    },
    {
        place:'Magden',
        length: '6 Years'
    },
    {
        place:'Lenzburg',
        length: '2 Years'
    }
);




/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
newImage.src = myProfile.photo;
newImage.alt = myProfile.name;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let listFood = document.createElement('li');
    listFood.textContent = food;
    document.querySelector('#favorite-foods').appendChild(listFood)
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbie => {
    let listHobbie = document.createElement('li');
    listHobbie.textContent = hobbie;
    document.querySelector('#hobbies').appendChild(listHobbie)
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let placeIndt = document.createElement('dt');
    placeIndt.textContent = place.place;
    document.querySelector('#places-lived').appendChild(placeIndt)
    let lengthIndd = document.createElement('dd');
    lengthIndd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(lengthIndd)
})