// function power(a,b){
//     var a = 4;
//     var b = 3;
//     return(a*a*a);
// }
// alert(power())


// var year = prompt("Enter a year");

// function leapYear(year) {
//     var leap = new Date(year, 1, 29).getDate() === 29;
//     if (leap) {
//         alert(year +  " is a leap year");
//     } else {
//        alert(year + (" is not a leap year"))
//     }
// }

// leapYear(year);

// var a = +prompt("Enter a First Side");
// var b = +prompt("Enter a Second Side");
// var c = +prompt("Enter a Third Side");
// var s = (a + b + c) / 2;
// var area = s * (s - a) * (s - b) * (s - c);
// alert("Area of Triangle is " + area);

// var firstSub = +prompt("Enter first Subjecj Marks");
// var secSub = +prompt("Enter Second Subjecj Marks");
// var thirdSub = +prompt("Enter Third Subjecj Marks");
// function mainFunction(){
    
//     function average(){

//         var total = firstSub + secSub + thirdSub
//         var average = total / 3
//         return average
        
//     }
//     document.write("<h1> The average marks is: " + average() + "</h1>");
    

//     function percentage(){
//         var total = firstSub + secSub + thirdSub
//         var percentage = total / 3
//         return percentage
//     }
//     document.write("<h1> The average Percentage is: " + percentage() + "%" + "</h1>")

    
// }
// mainFunction()


var b = prompt("Find the index of words in character");
function indexOf(){
    var a = "character";
    for(i = 0; i <= a.length; i++){
        if(a[i] === b){
            return i;
            console.log(i)
        }
    };
}
//         }else{
//             return-1;
//         }
// }

// }
//  console.log(indexOf(i\));
