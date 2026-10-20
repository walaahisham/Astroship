let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20



const user1 = { name: "Sara" };
const user2 = user1;

user2.name = "Mona";

console.log(user1.name); // Mona