const items = [1, 2, 3, 4, 5];

function processItem(item: number): Promise<number> {
  return new Promise((resolve, reject) => {
    const randomDuration = Math.random() * 1000;

    setTimeout(() => {
      console.log(`Processing item ${item}`);
      resolve(item);
    }, randomDuration);
  });
}

async function processItems(): Promise<void> {
  for (const item of items) {
    await processItem(item);
  }
}

processItems();
console.log("All items sent for processing");

/*
All items sent for processing
Processing item 3
Processing item 4
Processing item 5
Processing item 1
Processing item 2
*/
