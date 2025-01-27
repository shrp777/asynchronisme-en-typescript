function getData(random: number): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (random === 1) resolve("OK");
      if (random === 0) reject("KO");
    }, 1000);
  });
}

async function main() {
  try {
    const random = Math.random() > 0.5 ? 1 : 0;
    const data = await getData(random);
    console.log(data);
  } catch (error) {
    console.error("Erreur :", error);
  }
}

main();
