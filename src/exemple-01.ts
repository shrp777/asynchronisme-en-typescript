const start = Bun.nanoseconds();
console.log(`started at : \t ${start} nano seconds`);

for (let i = 0; i < 1e9; i++) {}
// simule une longue opération

const end = Bun.nanoseconds();
console.log(`ended at : \t ${end} nano seconds`);

console.log(`duration : \t ${end - start} nano seconds`);

/*
started at :     10005958 nano seconds
ended at :       634108541 nano seconds
duration :       624102583 nano seconds
*/
