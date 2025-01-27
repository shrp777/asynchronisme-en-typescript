const api = `https://jsonplaceholder.typicode.com`;
const userId = 1;

// try {
//   //pas de dépendance logique entre les 2 requêtes
//   //(la réponse 1 pourrait être obtenue avant ou après la réponse 2)
//   const response1 = await fetch(api + "/users/" + userId);
//   const user = await response1.json();

//   const response2 = await fetch(api + "/users/" + userId + "/albums");
//   const albums = await response2.json();

//   //ici, la réponse 1 et la réponse 2 doivent être obtenues
//   const userAlbums = { ...user, albums: albums };

//   console.log(userAlbums);
// } catch (error) {
//   console.error(`Error while fetching user or albums`, error);
// }

try {
  //pas de dépendance logique entre les 2 requêtes
  //(la réponse 1 pourrait être obtenue avant ou après la réponse 2)
  const reponse1 = fetch(api + "/users/" + userId).then((response) =>
    response.json()
  );

  const reponse2 = fetch(api + "/users/" + userId + "/albums").then(
    (response) => response.json()
  );

  Promise.all([reponse1, reponse2])
    .then((responses) => {
      const [user, albums] = responses;
      const userAlbums = { ...user, albums: albums };
      console.log(userAlbums);
    })
    .catch((err) => console.error(err));
} catch (error) {
  console.error(`Error while fetching user or albums`, error);
}
