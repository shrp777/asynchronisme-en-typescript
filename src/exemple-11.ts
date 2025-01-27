import fs from "node:fs";

//gestion bloquante

const data = fs.readFileSync("helloworld.md");
console.log(data.toString());
console.log("gestion bloquante"); // exécuté après le console.log ci-desssus

//gestion non-bloquante

fs.readFile("helloworld.md", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
console.log("gestion non-bloquante"); // exécuté avant le console.log ci-dessus

/**
# Hello, World
gestion bloquante

gestion non-bloquante
# Hello, World
 */
