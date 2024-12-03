// Print the prime Number
// input = [1,2,3,4,5]
// output = [2,3,5]


// const array = [1, 2, 3, 4, 5];
// // Helper function to check if a number is prime
// const isPrime = (num) => {
//   if (num <= 1) return false; // Numbers <= 1 are not prime
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false; // If divisible, not prime
//   }
//   return true; // Prime if no divisors found
// };
// // Use filter to get prime numbers
// const primeNumbers = array.filter(isPrime);
// console.log(primeNumbers); // Output: [2, 3, 5]


//2
// how can check 5 is prime number or not

// function abc(n){
//   let isPrime = true;
//   if(n>1){      
//       for(let i=2;i<n;i++){  // we are start 2 because 1 se every element alway divide
//           if(n%i==0){        // we can use also Math.sqrt(n)
//               isPrime = false
//               break;  // stop the loop if n divide any other number apart from itself
//           }
//       }if(isPrime == true){
//           console.log("Prime")
//       }else{
//           console.log("Not Prime") // isPrime is false go else part 
//       }
//   }
  
//   }
//   abc(5)



  //////////////////////////////////////////////
//   find prime number using factor
//   here we try to find two factor
let n = 5;
let factor = 0;
for(let i=1;i<=n;i++){
    if(n%i==0){
        factor++
    }
}
if(factor==2){
    console.log("Prime")
}else{
    console.log("Not Prime")
}
