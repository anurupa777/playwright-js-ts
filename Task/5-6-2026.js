//Pallindrome & Anagram

// function isPalindrome(str){
//     return str === str.split('').reverse().join('');
// }

// console.log(isPalindrome("level"));


function isAnagram(str1, str2) {

    let s1 = str1.toLowerCase().split('').sort().join('');
    let s2 = str2.toLowerCase().split('').sort().join('');

    return s1 === s2;
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("heart", "earth"));   // true
console.log(isAnagram("hello", "world"));   // false



