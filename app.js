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


// var distance = prompt("Enter distance two cities");
// function kmInMetres(){
//     document.write("<h1> The " + distance + " KM is equal to " + distance * 1000 + " metres.</h1>");
// }
// kmInMetres();
// function kmInfeet(){
//     document.write("<h1> The " + distance + " KM is equal to " + distance * 3280 + " feets.</h1>");
// }
// kmInfeet();
// function kmInInches(){
//     document.write("<h1> The " + distance + " KM is equal to " + distance * 39370 + " Inches.</h1>");
// }
// kmInInches();
// function kmInCentiMetres(){
//     document.write("<h1> The " + distance + " KM is equal to " + distance * 100000 + " Centimetres.</h1>");
// }
// kmInCentiMetres();

// var str = prompt("Enter a paragraph");
// var k = 0;
//     var spl=str.match(/.{0,2}/g);
//     for(var i=0;i<spl.length;i++)
//     {
//         if(spl[i]=='aa'||spl[i]=='ea'||spl[i]=='ia'||spl[i]=='oa'||
//         spl[i]=='ua'||spl[i]=='ae'||spl[i]=='ee'||spl[i]=='ie'||
//         spl[i]=='oe'||spl[i]=='ue'||spl[i]=='ai'||spl[i]=='ei'||
//         spl[i]=='ii'||spl[i]=='oi'||spl[i]=='ui'||spl[i]=='ao'||
//         spl[i]=='eo'||spl[i]=='io'||spl[i]=='oo'||spl[i]=='uo'||
//         spl[i]=='au'||spl[i]=='eu'||spl[i]=='iu'||spl[i]=='ou'||
//         spl[i]=='uu')
//         {
//             k++;     
//         }
//     }
//     alert(k + 1)
    
// function salaryCalculation(a,b){
//         document.write("<h1> The overtime of " + a + " hours is " + a*b + "</h1>");
    
//     }
//     salaryCalculation(40,12);
    

// var userInput = prompt("Enter the string to count two vowels in succetion : ");
// var answer = deleteVowelsS(userInput);
// alert("The vowels in succetion are " + answer +" times");
// function deleteVowelsS(str)
// {
//     var k=0;
//     var spl=str.match(/.{0,2}/g);
//     for(var i=0;i<spl.length;i++)
//     {
//         if(spl[i]=='aa'||spl[i]=='ea'||spl[i]=='ia'||spl[i]=='oa'||
//         spl[i]=='ua'||spl[i]=='ae'||spl[i]=='ee'||spl[i]=='ie'||
//         spl[i]=='oe'||spl[i]=='ue'||spl[i]=='ai'||spl[i]=='ei'||
//         spl[i]=='ii'||spl[i]=='oi'||spl[i]=='ui'||spl[i]=='ao'||
//         spl[i]=='eo'||spl[i]=='io'||spl[i]=='oo'||spl[i]=='uo'||
//         spl[i]=='au'||spl[i]=='eu'||spl[i]=='iu'||spl[i]=='ou'||
//         spl[i]=='uu')
//         {
//             k++;     
//         }
//     }
//     return k + 1;
    
// } 

// 
 

////////////////////////////////////////////Question 10 not complete//////////////////////////////////////////



// var hundred=0
// var fifty=0
// var ten = 0
// var input = +prompt("Enter Withdraw amount!!")

// for (var i = input; i=>100 ; i=input){
    
//         input=i-100;
//         hundred = ++hundred
    
    
    
// }

// for (var i = input; i=>50 ; i=input){
    
//     input=i-50;
//     fifty = ++fifty



// }

// for (var i = input; i=>10 ; i=input){
    
//     input=i-10;
//     ten = ++ten



// }
// console.log(hundred)
// console.log(fifty)
// console.log(ten)
// alert("you have to return " + hundred+" hundred notes " +fifty+" fifty notes and "+ten+" ten notes")
