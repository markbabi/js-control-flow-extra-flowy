console.log("Feel the JavaScript Luke.. let it flow through you");

/*
 * Conditional Statements
 * ===========================
 */

// if statements with no else
//---------------------------
let amIHappy = true;
let iKnowIt = true;

if (amIHappy === true) {
  console.log("clap my hands");
  console.log("stamp my feet");
}

if (amIHappy === true && iKnowIt === true) {
  console.log("im happy and i know it");
}

// if..else statements
//---------------------------
let sweater = {
  price: 20,
  onSale: true,
};

if (sweater.onSale === true) {
  console.log("here is your $" + sweater.price + " give me my sweater!");
  console.log("Have a good day!");
} else {
  console.log(
    "that is not reasonable, I shall not give you my hard earned money"
  );
}

// nested if..else
//---------------------------

if (sweater.onSale === true) {
  if (sweater.price < 30) {
    console.log("i'll take the sweater please");
  } else {
    console.log("its on sale but its still to expensive for moi");
  }
} else {
  console.log("Let me know when it's on sale please");
}

// if..else if..else statements
//---------------------------
let hour = 10;
let action = "code";

if (hour < 12) {
  action = "drink coffee and code";
} else if (hour < 17) {
  action = "be a little tired but keep coding";
} else if (hour < 20) {
  action = "go for walk and then keep coding";
} else {
  action = "cry a bunch and keep going";
}

console.log(action);

/*
 * Loops
 * ===========================
 */

// for loops
//---------------------------
// // for (initialization; condition; afterthought)
for (let i = 0; i < 100; i++) {
  console.log(i);
}

// for loop to iterate(loop) through an array
// -----------------------------------------
let pets = ["Lily", "Meli", "Peter", "Oslo"];
console.log(pets.length);

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

// for loop search for product
//-------------------------------------------
let products = ["toothbrush", "backpack", "taco", "pencil"];
let tacoFound = false;

for (let i = 0; i < products.length; i++) {
  if (products[i] === "taco") {
    tacoFound = true;
    break; // break will immediately exit the for loop (it will stop looping)
  }
}
console.log("tacoFound: ", tacoFound);

// while loops
//-------------------------------------------
let response = prompt("What is the password?");

while (response !== "perogies") {
  response = prompt("Wrong, try again?");
}

console.log("do stuff");
console.log("do more stuff");
