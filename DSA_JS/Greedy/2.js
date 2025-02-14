// In a candy store, there are n different types of candies 
// available and the prices of all the N different types of candies are provided to you. You are now provided with an attractive offer.
// For every candy you buy from the store and get K other 
// candies ( all are different types ) for free. Now you
//  have to answer two questions. Firstly, you have to f
// ind what is the minimum amount of money you have to 
// spend to buy all the n different candies. Secondly, 
// you have to find what is the maximum amount of money 
// you have to spend to buy all the n different candies.
// In both the cases you must utilize the offer i.e. you 
// butone candy and get k other candies for free.
let k = 2;
let candy = [5, 3, 2, 1, 4];
let n = candy.length;

// Sort the candies array in ascending order
candy.sort((a, b) => a - b);

let MinA = 0;
let MaxA = 0;

// Calculate the minimum amount
let i = 0; // Pointer for the cheapest candy
let j = n - 1; // Pointer for the most expensive candy
while (i <= j) {
    MinA += candy[i]; // Buy the cheapest candy
    i++; // Move to the next cheapest candy
    j -= k; // Skip k candies (get them for free)
}

// Calculate the maximum amount
i = n-1; //  Pointer for the most expensive candy
j = 0; //  Reset pointer for the cheapest candy
while (i >= j) {
    MaxA += candy[i]; // Buy the most expensive candy
    i--; // Move to the next most expensive candy
    j += k; // Skip k candies (get them for free)
}

console.log([MinA, MaxA]);
