console.log(`start`);

setTimeout(() => {
  console.log("Callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log(`end`);

/*
start
end
Promise
Callback
*/
