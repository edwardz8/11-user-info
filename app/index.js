import 'whatwg-fetch';
import data from './data';

//Select elements to be filled and store as variables
//Set text or attributes of elements to fill elements


const photoPic = document.querySelector('.banner__pic');
photoPic.src = data.results[0].picture.large;

const profileName = document.querySelector('.profile__name');
profileName.innerText = `${data.results[0].name.first} ${data.results[0].name.last}`;

//const profileName = document.querySelector('.');
