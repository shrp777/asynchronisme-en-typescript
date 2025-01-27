const api = `https://jsonplaceholder.typicode.com`;
const userId = 1;

//pas de dépendance logique entre les 2 requêtes
//(la réponse 1 pourrait être obtenue avant ou après la réponse 2)
const response1 = fetch(api + "/users/" + userId).then((data) => data.json());

const response2 = fetch(api + "/users/" + userId + "/albums").then((data) =>
  data.json()
);

const promises = [response1, response2];

Promise.all(promises)
  .then((responses) => {
    const [user, albums] = responses;
    const userAlbums = { ...user, albums: albums };
    console.log(userAlbums);
  })
  .catch((err) => console.error(`Error while fetching user or albums`, err));
