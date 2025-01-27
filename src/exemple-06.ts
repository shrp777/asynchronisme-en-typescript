function getData(id: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`ID ${id}`);
    }, Math.random() * 1000);
  });
}

async function main() {
  const promises = [getData(1), getData(2), getData(3)];
  const results = await Promise.allSettled(promises);
  console.log(results);
}

main();
//[ "ID 1", "ID 2", "ID 3" ]
