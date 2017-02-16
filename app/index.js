import 'whatwg-fetch';
import data from './data';

//Select elements to be filled and store as variables
//Set text or attributes of elements to fill elements


const photoPic = document.querySelector('.banner__pic');
photoPic.src = data.results[0].picture.large;

const profileName = document.querySelector('.profile__name');
profileName.innerText = `${data.results[0].name.first} ${data.results[0].name.last}`;

const profileEmail = document.querySelector('.profile__email');
profileEmail.innerText = data.results[0].email;

const profilePhone = document.querySelector('.profile__phone');
profilePhone.innerText = data.results[0].phone;

const profileLocal = document.querySelector('.profile__local');
profileLocal.innerText = `${data.results[0].location.city} ${data.results[0].location.state}`;
