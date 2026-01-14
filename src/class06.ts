let numbers:number[]=[40,60,80];
//let numeros:(number|string)[]=[40,60,80, "100"];

numbers.push(100);
numbers.unshift(20);
numbers.pop();
numbers.shift();

console.log(numbers);

let numbers_ro:ReadonlyArray<number>=[100,200,300];

console.log(numbers_ro);