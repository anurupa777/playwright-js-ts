//full pyramid
let rows = 5;
 //let pattern = ""; wrong 

for (let i = 1; i <= rows; i++) {
    let pattern = "";

    // Print spaces
    for (let j = 1; j <= rows - i; j++) {
        pattern += " ";
    }

    // Print stars
    for (let k = 1; k <= (2 * i - 1); k++) {
        pattern += "*";
    }

   console.log(pattern);
}

