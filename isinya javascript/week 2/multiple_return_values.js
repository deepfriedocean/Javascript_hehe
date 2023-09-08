// const dateString = "2023-08-31 (Tue)";
// const regex = /(\d{4})-(\d{2})-(\d{2}) \((\w{3})\)/;

// const result = regex.exec(dateString);

// if (result) {
//     const [fullMatch, year, month, day, dayOfWeek] = result;
//     console.log("Full match:", fullMatch);  // "2023-08-31 (Tue)"
//     console.log("Year:", year);             // "2023"
//     console.log("Month:", month);           // "08"
//     console.log("Day:", day);               // "31"
//     console.log("Day of Week:", dayOfWeek); // "Tue"
// } else {
//     console.log("No match found");
// }


// console.log(result)


var matchObj = 

/^(\d{4})-(\d{2})-(\d{2})$/
.exec ('2002-08-27');

var year = matchObj[1];
var month = matchObj[2];
var day = matchObj[3];

console.log("contoh exec cara 1= ",year)

let [, year2, month2, day2] = 

/^(\d{4})-(\d{2})-(\d{2})$/
.exec ('2002-08-27');


console.log("contoh exec cara 2= ",year2)
