const fetch = require('node-fetch');

async function verifiedFetch(url) {
  if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
    return fetch(url)
      .then((r) => r.json())
      .then((r) => (r.value));
  }
  throw new Error('endpoint não existe');
}

async function sendJokeToFriend(name) {
  try {
    const message = await verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
      .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    console.log(message);
  } catch (err) {
    console.log(err);
  }
}

sendJokeToFriend("Anna");