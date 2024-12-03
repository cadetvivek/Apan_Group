// we have to find leap years
// in range 2000 till 2025;

// What is a leap year? To be a leap year, 
// the year number must be divisible by four - 
// except for end- of-century years, 
// which must be divisible by 400. This means 
// that the year 2000 was a leap year, although 1900 was not. 
// 2024, 2028, 2032 and 2036 are all leap years.

let n = 1900;
let m = 1925;

for(let i = n;i<=m;i++){
    if((i%4==0)&&(i%100!==0 || i%400==0)){
        console.log(i)
    }
}