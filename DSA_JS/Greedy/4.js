//  Given a lock made up of N different circular rings. 
//  Each ring has 0-9 digit printed on it. There is only
//  one particular code which can open the lock. 
//  You can rotate each ring any number of times in 
//  either direction. Given the random sequence R and 
//  the desired sequence D, find the minimum number 
//  of rotations required to open the lock. 

 

// Example 1:

// Input: R = 222, D = 333
// Output: 3
// Explaination: Optimal number of rotations for 
// getting 3 from 2 is 1. There are three 2 to 3 
// transformations. So answer is 1+1+1 = 3.


// My aproach
//  first take first and seocnd last value 
//  after update it using /10
//  after it using Math.min insite Math.abs and 10-Math.abs
//  sum it.
let R = 222, D = 333;

let sum = 0;

while(R){
    let first = R%10
    let second = D%10
    R/=10;
    D/=10;
    sum+= Math.min(Math.abs(first-second),10-Math.abs(first-second))
  
}
console.log(Math.floor(sum))