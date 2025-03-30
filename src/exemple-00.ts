function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    const isGreaterThanZero = Math.random() > 0.5;

    setTimeout(() => {
      if (isGreaterThanZero) {
        resolve("Hello, World!");
      } else {
        reject("Oh noooo!");
      }
    }, 1000);
  });
}

async function main() {
  // Appel de la fonction asynchrone fetchData avec la syntaxe async / await + try / catch / finally
  try {
    const data = await fetchData();
    console.log("Succès :", data);
  } catch (error) {
    console.error("Erreur :", error);
  } finally {
    console.log("Opération terminée (succès ou erreur).");
  }

  // Appel de la fonction asynchrone fetchData avec la syntaxe Promise + then / catch / finally
  fetchData()
    .then((data) => {
      console.log("Success : ", data);
    })
    .catch((error) => {
      console.error("Error : ", error);
    })
    .finally(() => {
      console.log("End.");
    });
}

main();
