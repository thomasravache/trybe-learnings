// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const showJoke = (joke) => {
  const h2 = document.querySelector('#jokeContainer');
  h2.innerHTML = joke;
};

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' } 
  }; // Esse objeto define o tipo de request e o formato de resposta

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => showJoke(data.joke));
};

window.onload = () => fetchJoke();