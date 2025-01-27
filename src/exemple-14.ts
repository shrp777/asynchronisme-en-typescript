const jsonPlaceholderAPI = `https://jsonplaceholder.typicode.com`;
const meteoAPI = `https://api.open-meteo.com/v1/forecast`;
const userId = 1;

try {
  //dépendance logique entre les 2 requêtes
  //il est nécessaire de disposer de la réponse 1
  //pour obtenir la réponse 2
  const response1 = await fetch(jsonPlaceholderAPI + "/users/" + userId);
  const user = await response1.json();

  const latitude = user.address.geo.lat; //-37.3159
  const longitude = user.address.geo.lng; //81.1496

  const response2 = await fetch(
    meteoAPI +
      "?latitude=" +
      latitude +
      "&longitude=" +
      longitude +
      "&current=temperature_2m"
  );

  const meteo = await response2.json();
  const currentMeteo =
    meteo.current.temperature_2m + meteo.current_units.temperature_2m;
  console.log(currentMeteo); //16.9°C
} catch (error) {
  console.error(`Error while fetching user or meteo`, error);
}
