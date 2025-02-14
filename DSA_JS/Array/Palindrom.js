// Description
// You are given a integer num
// You need to print Yes if that integer is a palindrome or else print No.
// A palindrome is a word, number, phrase, or other sequence of characters that reads the same backward as forward, such asmadamorracecar.
// Input Description
// Input Format
// First line contains num, a integer.
// Constraints
// 1 <= num <= 1000000
// Output Description
// Print Yes or No depending upon the integer.
// input = 1221
// ouput = Yes

function isPalindrome(n) {
    let str = n.toString();
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr ? "Yes" : "No";
}

// Testing the function
console.log(isPalindrome(12321)); // Yes
console.log(isPalindrome(1234));  // No




// Using an alternative method without string conversion
function detectPalindrome(num) {
    // Write code here
    let reverse = 0;
    let original = num;
    
    while (num > 0) {
        let last = num % 10; // Extract last digit
        reverse = reverse * 10 + last; // Build reversed number
        num = Math.floor(num / 10); // Remove last digit from num
    }
    
    console.log(original === reverse ? 'Yes' : 'No');
}

// Testing the function with dry run
console.log(detectPalindrome(12321)); // Yes
console.log(detectPalindrome(1234));  // No
