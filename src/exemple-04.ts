function getData(random: number): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (random === 1) resolve("OK");
      if (random === 0) reject("KO");
    }, 1000);
  });
}

const random = Math.random() > 0.5 ? 1 : 0;

getData(random)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Erreur :", error);
  });
