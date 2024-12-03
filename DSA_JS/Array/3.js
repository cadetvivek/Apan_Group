// Given an array = [1,2,3,4,5]
// you have to find the second maximum Element
 
// Output = 4;



// let array = [1, 2, 3, 4, 5];
//   // Find the maximum element
//   let max = Math.max(...arr);
//   // Remove the maximum element from the array
//   arr = arr.filter(num => num !== max);
//   // Find the maximum element in the remaining array
//   return Math.max(...arr);

// //const array = [1, 2, 3, 4, 5];
// const secondMax = findSecondMax(array);
// console.log(secondMax); // Output: 4
// ///////////////////////////////////////////////


// Step 1: Find the maximum element
let max = -Infinity;
for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
    }
}

// Step 2: Find the second maximum element
let secondMax = -Infinity;
for (let i = 0; i < array.length; i++) {
    if (array[i] !== max && array[i] > secondMax) {
        secondMax = array[i];
    }
}
console.log(secondMax); // Output: 4
