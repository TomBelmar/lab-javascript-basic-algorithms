// Iteration 1: Names and Input
const hacker1 = "Caio";
console.log (`The drivers name is ${hacker1}`);

const hacker2 ="Tomás";
console.log(`The navigator name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`);}
else if (hacker2.length > hacker1.length){
    console.log (`The driver has the longest name, it has ${hacker2.length} characters.`);}
else {
    console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`);
}    



// Iteration 3: Loops
// 3.1
let newHacker1 = ``;
for (i = o; i < hacker1.length; i++){
    newHacker1 += `${hacker1 [i]} `;
}

console.log(newHacker1.toUpperCase());

// 3.2
for (i=hacker2.length -1 ; i >=0; i --){
newHacker2 += `${hacker1 [i]} `;
}
console.log (newHacker2);

// 3.3
if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first.");
} 
else if (hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first definitely.");
}
else {
  console.log("Yo, the navigator goes first definitely.");
}
