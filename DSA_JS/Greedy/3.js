// Given, N Mice and N holes are placed in a straight line. 
// Each hole can accommodate only 1 mouse. A mouse can stay 
// at his position, move one step right from x to x + 1, 
// or move one step left from x to x -1. Any of these moves consumes 
// 1 minute. Write a program to assign mice to holes so that the 
// time when the last mouse gets inside a hole is minimized.
// Note: Arrays M and H are the positions of the N mice and holes.

 

// Example 1:

// // Input:
// let N = 3 ,M = [4, -4, 2] ,H = [4, 0, 5];

// Output:
// 4
// Explanation:
// If we assign mouse at 1st index to
// the hole at 1st, mouse at 2nd index
// to the hole at 2nd and the third to
// the hole at third. Then, the maximum
// time taken will be by the 2nd mouse,
// i.e. 4-0 = 4 minutes.

// Input data
let N = 3; // Number of mice and holes
let M = [4, -4, 2]; // Positions of mice
let H = [4, 0, 5]; // Positions of holes

// Step 1: Sort the positions of mice and holes
M.sort((a, b) => a - b); // Sorting mice positions in ascending order
H.sort((a, b) => a - b); // Sorting holes positions in ascending order

let Min = 0; // Variable to store the maximum time needed

// Step 2: Assign each mouse to a hole based on sorted positions
for (let i = 0; i < N; i++) {
    // Calculate the time taken for the ith mouse to reach the ith hole
    let LastTime = Math.abs(M[i] - H[i]);
    // Update Min to store the maximum time taken by any mouse
    Min = Math.max(Min, LastTime);
}

// Step 3: Print the final result
console.log(Min); // Output the minimum time when the last mouse enters a hole
