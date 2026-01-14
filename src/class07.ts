//let things:(number|string)[]=[120, 240, "test"];
let things:[number, string, boolean]=[120, "test", true];
things.push("hello", 360, true);

things[2]=false;

console.log(things);
console.log(things[2]);