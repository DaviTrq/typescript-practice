let data={
    name:"An",
    age:28,
    status:"Active",
    hello:()=>{console.log("Hello")},
    info:(p:string)=>{console.log(p)},
}

data.name="Anna";

console.log(typeof(data));
console.log(data.name);

data.hello();
data.info("Welcome!");