let currency = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
let ans = [];
let N = 43;

let i = 0;
while (N > 0) {
    let notes = Math.floor(N / currency[i]); // Calculate how many notes/coins of this denomination
    while (notes--) {
        ans.push(currency[i]); // Push this denomination into the answer array
    }
    N %= currency[i]; // Reduce N by the value of coins/notes used
    i++; // Move to the next denomination
}

console.log(ans);
