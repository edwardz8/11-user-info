import 'whatwg-fetch';
import data from './data';

//Select elements to be filled and store as variables
//Set text or attributes of elements to fill elements

debugger;
const photoPic = document.querySelector('.banner__pic');
photoPic.src = data.results[0].picture.large;
