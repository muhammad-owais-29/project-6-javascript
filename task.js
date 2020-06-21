
// chapter # 21 - 25

// Task # 01


// var firstName = prompt("Please Enter Your First Name!" +" ");
// var lastName = prompt("Please Enter Your Last Name!");
// var fullName = firstName + lastName;
// alert(fullName );

// Task # 02

// var favoriteMobile = prompt("Please Enter Your Favorite Mobile Model !");
// var length = favoriteMobile.length;
// document.write("My Favorite Phone Is :"+" " +favoriteMobile+"<br>"+"Length of string"+length);


// Task # 03


// let index = "pakistan";
// let indexOfLetter = index.indexOf('n');
// document.write("String :"+" "+"<br>"+"Index of ' n ' :"+" "+indexOfLetter);


// Task # 04


// var last = "Hello World";
// var lastIndex = last.lastIndexOf('l');
// document.write("String : Hello World"+" "+"<br>"+"Last index of 'l' :"+" "+lastIndex);


// Task # 05


// let index = "pakistan";
// let indexOfLetter = index.indexOf('i');
// document.write("String :"+" "+"<br>"+"Index of ' i ' :"+" "+indexOfLetter);

// Task # 06

// var firstName = prompt("Please Enter Your First Name!" );
// var lastName = prompt("Please Enter Your Last Name!" );
// var concat = firstName.concat(lastName);
// alert(concat );

// Task # 07

// var text = "Hyderabad";
// var indexNum = text.indexOf("Hyderabad");
// var firstText = text.slice(0,indexNum);
// var replacingText = "Islam";
// var thirdText = text.slice(indexNum+5);
// document.write("City : "+text+'<br>'+"After replacement:"+" "+firstText+replacingText+thirdText);

// Task # 08


// var occurrence1 = "Ali and Sami are best friends. They play cricket and football together.";         
// var occurrence2 = occurrence1.replace(/and/g,"&");               
// document.write(occurrence2);


// Task # 09

// var parse = "472";
// var con = parseInt("472");
// document.write(" Value :"+con+"<br>");
// document.write("Type: "+typeof con);

// Task # 10

// var conLetter = prompt("Please Enter Your Input!");
// var cap = conLetter.toUpperCase();
// document.write("User Input :"+" "+conLetter+"<br>"+"Upper Case :"+" "+cap);


// Task # 11

// var city = prompt("Please Enter Your Input"); 
// var firstchar = city.slice(0,1);                    
// firstchar = firstchar.toUpperCase();                
// var secondchar = city.slice(1);                      
// secondchar = secondchar.toLowerCase();                
// var toall = firstchar + secondchar;                    
// document.write("User Input :"+" " +city+ "<br>"+"Title Case :"+" "+toall); 

// Task # 12

// var num = 35.36;
// var number = num.toString();
// var split = number.split('.').join("");
// document.write("Number: "+num+" "+"<br>"+"Result :"+" "+split);

// Task # 13



// var name = prompt("Please enter your name.");
  

//   if (name == null || name == "") {
//     alert("You must enter your name into the prompt box!");
    
//   } else if (!/^[a-zA-Z]+$/.test(name)) {
 
//     alert("Please only enter letters");
    
    
//   } else {
//     alert("Your username is valid");
//   }

 








// Task # 14

// let bakery = ["Cake","apple pie","cookie","chips","patties"];
// var wants = prompt("Welcome To ABC Bakery. What do you Want to Order sir/ma'am");

// if(wants == "cake" || wants == "apple pie" || wants == "cookie" || wants == "chips" || wants == "patties"){
//    alert(wants+" is available")
// }
// else{
//    alert("We are sorry, It's not available");
// }

// Task # 15

// var str = ("University Of Karachi" );
// var array = str.split("");
// for(var i = 0 ; i<str.length; i++){
// document.write(array[i]+"<br>")
// }




// Task # 16

//  var program = prompt ("Please Enter Your Input")
//  var input = prompt("Enter password");
//  var maxchar = 6;
//  if (isNaN(parseInt(input[0])) && input.length >= maxchar ) {
//    alert("password is valid");
//  }
 
//  else {
//    alert("Password is incorrect!");
//  }


// Task # 17

// var txt = "The quick brown fox jumps over the lazy dog";

// document.write("Text : The quick brown fox jumps over the lazy dog "+"<br>"+"There are "+""+txt.match(/the/gi).length+" "+"of word 'the'");


// Task # 18

// var lastchar = prompt("Please Enter Your Text");
// var string = lastchar.charAt(lastchar.length-1);
// document.write("user input : "+" "+lastchar+"<br>"+"Last character of input :"+" "+string)

// chapter 21 - 25 ha been completed 


// chapter 26 - 30

// Task # 01


// var positive = +prompt("Please Enter Your Number");
// var cont = positive.toFixed(0);
// document.write("round off :"+" "+cont +"<br>")
// var counting = Math.floor(positive);
// document.write("floor value :"+" "+counting +"<br>")
// var ceil = Math.ceil(positive);
// document.write("ceil value :"+" "+ceil);
 

// Task # 02


//  var negative = +prompt("Please Enter Your Number");
//  var cont = negative.toFixed(0);
//  document.write("round off :"+" "+cont +"<br>")
//  var counting = Math.floor(negative);
//  document.write("floor value :"+" "+counting +"<br>")
//  var ceil = Math.ceil(negative);
//  document.write("ceil value :"+" "+ceil);


// Task # 03

// var rollDice = +prompt("Roll Dice");
// var dice ;


// dice = Math.ceil(Math.random()*6);
// document.write("random dice value :"+" "+dice+"<br>")

// document.write("---ஜ۩۞۩ஜ---completed---ஜ۩۞۩ஜ---");

// Task # 04

// var userhead = prompt ("please enter your head user name")
// var usertail = prompt ("please enter your tail user name")

// var random = Math.random() *2
// var floor = Math.floor(random);

// if(floor===0){
//     alert(' head ' +" "+ userhead + ' won the toss ')
// }else {
//     alert(' tail ' +" "+ usertail + ' won the toss ')
// }

// Task # 05


// var numberrandom = Math.floor(Math.random() * 100);
// document.write("random number between 1 and 100 :"+" "+numberrandom);

// Task # 06

// var absolute = +prompt("Please Enter Your Value");
// var x = Math.abs(absolute);
// document.write("The absolute value of"+" "+absolute+" "+"is"+" "+x)


// Task # 07

// var weight = +prompt("Please Enter Your Weight");
// document.write(weight+" "+" Kg");

// Task # 08

//    var guess = +prompt("Please Enter Your Guess Number Between 1 and 10")
//    var answer = 4;
//    for( i=0; i<10;i++){
//        if(answer==guess){
//            alert(" Congratulation!")
//            break;
               
//          }
       
//        else{
//           guess= alert ("try again")
//           break;
//        }
//        }

//      Chapter 26-30 has been ended


//       Chapter 31-35


// Task # 01


// var date = new Date();
// document.write(date);

// Task # 02

// var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var d = new Date();
// var monthName=months[d.getMonth()]; 
// document.write("Current Month : "+" "+monthName)


// Task # 03

// var  days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] ;
// var c = new Date();
// var day=days[c.getDay()]; 
// document.write("Today is : "+" "+day)

// Task # 04


// var dt = new Date();
// var h = dt.getHours(),
//   m = dt.getMinutes();
// var time;
// if (h == 12) {
//   time = h + ":" + m + " PM";
// } else {
// //   time = h > 12 ? h - 12 + ":" + m + " PM" : h + ":" + m + " AM";
// time=h = h > 12 ? h-12 +'PM' : h +'AM';
// }

// console.log("CURRENT TIME IS" +time);



// var now = new Date();
// var hours = now.getHours();
// var minutes = now.getMinutes();
// var ampm = hours >= 12 ? 'pm' : 'am';
// hours = hours % 12;
// hours = hours ? hours : 12;
// minutes = minutes < 10 ? '0' + minutes : minutes;
// var timewithampm = hours + ':' + minutes + ' ' + ampm;
// console.log(timewithampm)





// var dt = new Date();
//     var h =  dt.getHours(), m = dt.getMinutes();
//     var _time = (h > 12) ? (h-12 + ':' + m +' PM') : (h + ':' + m +' AM');
//     console.log(_time);


// Task # 05


// var laterDate = new Date();
// laterDate.setFullYear(2020,11,31)
// document.write(laterDate)

// Task 06





// var db = new Date(prompt("Please Enter Your Birth Age"));
// var dbmili = db.getTime();
// var today = new Date();
// var currentmili = today.getTime()
// var compare = currentmili - dbmili;
// var accurate = Math.floor(compare/(1000*60*60*24*30*12))
// document.write(accurate);


// Task # 07

// var today = new Date();
// if(today.getDay() == 6 || today.getDay() == 0) {
// alert('Weekend!');
// }else {
//     alert("it's not a funday")
// }

// Task # 08

// var today = new Date();
// document.write(today);
// if(today <= 15){
//     alert("First Fifteen Days Of The Month")
//  }
//  else if(today >=16){
//      alert("Last Fifteen Days Of The Month")
//  }

// Task # 09

// var date0 = new Date(2015, 5, 18); // 18 Jun 2015
// var date1 = new Date(2020, 5, 18); // 18 jun 2020

// var numberOfDays = Math.ceil((date1 - date0) / 8.64e7);
// alert(numberOfDays);

// Task # 10

// var prevTime = new Date(2020,0,1,0,0);  
// var thisTime = new Date();              
// var diff = thisTime.getTime() - prevTime.getTime();   
// var get = diff / (1000*60*60*24);
// document.write(get); 

// Task # 11

// var c = new Date();
// var d = new Date();

// d.setHours(d.getHours() - 1);
// document.write("Current date:" +" "+c +"<br>"+"1 hour ago, it was "+" "+d)


// Task # 12


// var d = new Date();

// document.write('Today is: ' + d.toLocaleString());

// d.setDate(d.getDate() - 36500);

// document.write('<br>100 years ago was: ' + d.toLocaleString());


// chapter 31-34 has been ended

// chapter 35 - 38

// Taask # 01

// var newdate = new Date()
// function date(){

// }
// document.write(newdate);

// Task # 02


// var firstname = prompt("Please Enter Your First Name ");
// var lastname = prompt("Please Enter Your Last Name");
// var all = firstname+" "+lastname
// function userName(){

//  alert(all)
// }
// userName();


// Task # 03


// var firstnumber = +prompt("Please Enter Your First Number ");
// var secondnumber = +prompt("Please Enter Your Second Number");
// var all = firstnumber+secondnumber
// function number(){

//  alert(all)
// }
// number();


// Task # 04

// var val1 = prompt("Please Enter Your First Number !");
// var sign = prompt("Please Enter Your Desire Operator!");
// var val2 = prompt("Please Enter Your Second Number !");
// function number(){
//     if(sign === '+'){
//              alert((+val1)+(+val2))
//          }else if(sign === '-'){
//             alert(val1-val2)
//         }else if(sign === '*'){
//             alert(val1*val2)
//         }else if(sign === '/'){
//             alert(val1/val2)
//         }
//         else if(sign === '%'){
//             alert(val1/val2*100 +"%")
//         }
 
// }
// number();


// Task # 05

// var f = [];
// function factorial (n) {
//   if (n == 0 || n == 1)
//     return 1;
//   if (f[n] > 0)
//     return f[n];
//   return f[n] = factorial(n-1) * n;
// } 
// document.write(factorial(4));

// Task # 06

// var val1 = +prompt("Please Enter Your First Number !");
// var val2 = +prompt("Please Enter Your Second Number !");
// function number(){
//     var i;
    
//     for(i = val1; i < val2; i++){
//      document.write(i+"<br>")  } 
// }
// number();


// Task # 07


// function pythagorean(firstsideA, secondsideB){
//     return Math.sqrt(Math.pow(firstsideA, 2) + Math.pow(secondsideB, 2));
//   }
  
//   document.write(pythagorean(3, 4));


// Task # 08


// function areaRectangle(a, b) {
//     document.write("The area of rectangle is :"+" "+a * b+"<br>");
    
// }
 
// areaRectangle(2.5, 3.14);
  

// Task # 09

// var a = prompt ("Please enter your name")
// function palindrome(){
//  var check ="";
//  for (var i = a.length -1 ; i>=0; i--){

//      check += a[i]
//  }
//  if (a===check){
//      alert(a + " " + "is a palindrome word")
//  }
// }
// palindrome();

// Task # 10


// function upper(){
// var city = prompt("please entery your city name"); 
// var firstchar = city.slice(0,1);                    
// firstchar = firstchar.toUpperCase();                
// var secondchar = city.slice(1);                       
// secondchar = secondchar.toLowerCase();                
// var toall = firstchar + secondchar;                
// document.write(toall)
// }
// upper();

// Task # 11

// function longest(str) {
//   var words = str.split(' ');
//   var longest = ''; // changed

//   for (var i = 0; i < words.length; i++) {
//     if (words[i].length > longest.length) { // changed
//       longest = words[i]; // changed
//     }
//   }
//   return longest;
// }
// document.write(longest("Web Development Tutorial"));


// Task # 13



// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// document.write(char_count("JSResourceS", 'o'));

// Chapter 35 - 38 has been ended