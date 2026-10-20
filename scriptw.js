// ==========================================
// 1. Exam Score (if / else if / else)
// ==========================================
console.log("Exam Score");
let score = 92; // Try also: 70, 40, 120

if (score < 0 || score > 100) {
    console.log("Invalid score");
} else if (score >= 85) {
    console.log("Excellent");
} else if (score >= 75) {
    console.log("Very Good");
} else if (score >= 65) {
    console.log("Good");
} else if (score >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}


// ==========================================
// 2. Vending Machine (switch)
// ==========================================
console.log(" Vending Machine");
let drinkCode = 3; // Try also: 1, 99

switch (drinkCode) {
    case 1:
        console.log("Your order: Coffee - Price: 15 EGP");
        break;
    case 2:
        console.log("Your order: Tea - Price: 10 EGP");
        break;
    case 3:
        console.log("Your order: Orange Juice - Price: 20 EGP");
        break;
    case 4:
        console.log("Your order: Water - Price: 5 EGP");
        break;
    default:
        console.log("Choice not available");
        break;
}


// ==========================================
// 3. Running Program (for)
// ==========================================
console.log("Running Program ");
let distance = 1000;
let total = 0;

for (let day = 1; day <= 7; day++) {
    let dayMessage = `Day ${day}: ${distance} meters`;
    
    if (distance >= 3000) {
        dayMessage += " (Hard day)";
    }
    
    console.log(dayMessage);
    total += distance;
    distance += 500;
}

console.log(`Total Distance: ${total} meters`);


// ==========================================
// 4. Piggy Bank (while)
// ==========================================
console.log("Piggy Bank");
let price = 1000;
let savings = 0;
let weeks = 0;

while (savings < price) {
    weeks++;
    savings += 150;
    console.log(`Week ${weeks}: You have ${savings} EGP`);
}

console.log(`Reached the goal after ${weeks} weeks, and you have ${savings} EGP`);


// ==========================================
// 5. ATM Machine (do...while + switch + if)
// ==========================================
console.log(" ATM Machine ");
const correctPin = "1234";
let balance = 2000;
let pinAttempts = ["1111", "2580", "1234"];
let operation = "withdraw"; // "balance" | "withdraw" | "deposit"
let amount = 500;

let attemptIndex = 0;
let isPinCorrect = false;

// Part One: PIN Verification
do {
    let currentPin = pinAttempts[attemptIndex];
    attemptIndex++;

    if (currentPin === correctPin) {
        isPinCorrect = true;
        console.log("Welcome");
        break;
    } else {
        let remainingAttempts = pinAttempts.length - attemptIndex;
        console.log(`Wrong PIN, you have ${remainingAttempts} attempts remaining`);
    }
} while (attemptIndex < pinAttempts.length);

// Part Two & Three: Card Blocking or Executing Operations
if (!isPinCorrect) {
    console.log("Card has been blocked");
} else {
    switch (operation) {
        case "balance":
            console.log(`Your balance: ${balance} EGP`);
            break;
            
        case "withdraw":
            if (amount > balance) {
                console.log("Insufficient balance");
            } else {
                balance -= amount;
                console.log(`Successfully withdrawn ${amount} EGP, your current balance: ${balance} EGP`);
            }
            break;
            
        case "deposit":
            balance += amount;
            console.log(`Successfully deposited ${amount} EGP, your current balance: ${balance} EGP`);
            break;
            
        default:
            console.log("Unknown operation");
            break;
    }
}