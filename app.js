//// chapter 21--25 ///// TASK 1 /////////

// var firstName = prompt("Enter first name");
// var lasttName = prompt("Enter last name");
// var fullName = firstName + lasttName;
// alert("your full name is" + " " + fullName)




//// chapter 21--25 ///// TASK 2 /////////

// var x = prompt("enter model number")
// document.write("MY Favorite phone is :" + x)
// var indexNum = x.indexOf();
// document.write("<br>  lenth of string"+ indexNum)



//// chapter 21--25 ///// TASK 3 /////////

// var text = 'Pakistani'
// var indexNum = text.indexOf('n');
// document.write("srtring : Pakistani" + "<br>" + "index  of 'n' is"  +  indexNum);

//// chapter 21--25 ///// TASK 5 /////////

// var x = prompt("enter country name")
// document.write("string is  " + x + "<br>")
// document.write( "Character at index 3 is :" + x.charAt(3))



//// chapter 21--25 ///// TASK 6 /////////

// var firstName = prompt("Enter first name");
// var lasttName = prompt("Enter last name");
// var fullName = firstName + lasttName;
// alert("your full name is" + " " + fullName)

//// chapter 21--25 ///// TASK 7 /////////

// var city = "Hydrabad"
// var newCity = city.replace("Hydrabad" , "'Islamabad'")
// document.write("City : 'Hydrabad'" + "<br>" + "after Replacement" +    " " + newCity)

//// chapter 21--25 ///// TASK 8 /////////

// var message = 'ali and sami are best friend . they play cricket and football together'
// var newMessage = message.replace(/and/g, "&")
// document.write("old message is 'ali and sami are best friend . they play cricket and football together'" + "<br>" + "new message is :" + newMessage)

//// chapter 21--25 ///// TASK 9 /////////

// var num  = prompt("enter your num");
// var string = Number(num)
// document.write( "string to num " + string)

//// chapter 21--25 ///// TASK 10 /////////


// var x = prompt("enter your name")
// var y = x.toLocaleUpperCase()
// document.write(y)

//// chapter 21--25 ///// TASK 11 /////////



// var value = prompt("enter your product");
// var firstchar  = value.slice(0,1)
// firstchar = firstchar.toUpperCase()
// var otherchar = value.slice(1)
// otherchar = otherchar.toLowerCase()
// var value = firstchar + otherchar;
// alert(value)


//// chapter 21--25 ///// TASK 12 /////////

// var x  = prompt('ener tha value')
// var y = x.replace(".", "")
// document.write("Number is " + x + "<br>")
// document.write("The REsult is : " + y)

//// chapter 21--25 ///// TASK 13 /////////

//  var str = prompt("enter your name");
// var arr = ["!", "@", ".",","]

//  var numChars = str.length;
//  for (var i = 0; i < numChars; i++) {
//  if (str.slice(i, i + 2) === [arr] ) {
//  alert("please enter avalid username");

//  }
//  }


//// chapter 21--25 ///// TASK 14 /////////

// var x = prompt("search your items")
// var arr = ["apple pie" , "cookies", "chips" , "patties"]

// for(var i = 0; i<10; i++;)


// var x = prompt("Welcome to ABC Bakery.What do you want to order sir/mam?")

// var cities = ["cookies", "chips" , "patties" ,"apple pie"  ];

// for( var i = 0; i <= cities.length; i++) {
// if (x === cities[i] ){
//     alert(cities[i] +  " " + " = yes mam/sir its available")
//     break;
// }else{
//     alert("it is not available")
//     break
// }
// }




//////// chapter 26-30///// task 1///////

// var a = "3.45214";
// document.write("number :" + a  + "<br>");



// var a = "3.45214";
// var b = Math.round(a);
// document.write("Round off number" + b + "<br>")


// var a = "3.45214";
// var x = Math.floor(a)
// document.write("floor value" + x + "<br>")

// var a = "3.45214";
// var y = Math.ceil(a)
// document.write( " ceil value " +y)

//////// chapter 26-30///// task 2///////


// var a = "-2.673";
// document.write("number :" + a  + "<br>");



// var a = "-2.673";
// var b = Math.round(a);
// document.write("Round off number" + b + "<br>")


// var a = "-2.673";
// var x = Math.floor(a)
// document.write("floor value" + x + "<br>")

// var a = "-2.673";
// var y = Math.ceil(a)
// document.write( " ceil value " +y)

//////// chapter 26-30///// task 4///////

// var x = Math.random() * 6;
// var y = Math.ceil(x);
// alert("Random dice value" +" " + y);
// document.write("Random dice value" +" " + y);

//////// chapter 26-30///// task 5///////

// var toss = Math.random() * 2;
// var floor = Math.floor(toss)
// if (floor === 1){
//     alert( "'1'" + " " +  "random coin value :"+ " "  + "head" )
// }
// else {
//     alert("'2'" + " " +  "random coin value : " +" " + "tails" )
// }


//////// chapter 26-30///// task 8///////

// var x = +prompt("enter the number between 1-10")
//     if (x === 7){
//         alert("Congratulate ")
//     }else{
//         alert("Try again")
//     }




//////// chapter 31-35///// task 1///////

// var a = new Date();
// document.write(a)

//////// chapter 31-35///// task 2///////

// var a = new Date();
// var currentMonth = a.getMonth()
// document.write( "CurrentMonth is :" + currentMonth) 


//////// chapter 31-35///// task 3///////

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// document.write("Today is = " + " " + nameOfToday)

//////// chapter 31-35///// task 4///////


// var dayNames = ["Its Fun Day", "Mon", "Tue", "Wed", "Thu", "Fri", "Its Fun day"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// document.write("Today is = " + " " + nameOfToday)

//////// chapter 31-35///// task 5///////



// var x = new Date();
// var dayOfMonth = x.getDate();
// alert(dayOfMonth)

//////// chapter 31-35///// task 6///////


// var x = new Date()
// document.write( "Current Date " + " " + x  + "<br>")
// var y = x.getTime()
// document.write("Elapsed miliseconds since 1 jan 1970 :" + " " + y + "<br>" )
// var z = (y/1000*60);
// document.write("Elapsed seconds since 1 jan 1970" + z)


//////// chapter 31-35///// task 13///////

// var dob = new Date (prompt("Enter your Date of Birth"))
// var dobmili = dob.getTime();
// var today = new Date();
// var todaymili = today.getTime()
// var diff = todaymili- dobmili;
// var accuage = Math.floor(diff/1000*60*60*24*365)
// document.write(accuage)
// var v = Math.ceil(accuage)
// alert("Your age is " + v)
// document.write("Your age is " + v)


//////// chapter 35-38///// task 1///////

// var x = new Date()
// document.write(x)

//////// chapter 35-38///// task 2///////

// var x = prompt("Enter First Nmae")
// var y = prompt("Enter Last Nmae")
// var z = x + y ;
// document.write("your full name is "  +  z)


//////// chapter 35-38///// task 3///////



//////// chapter 35-38///// task 4///////

// var val1 = prompt("enter frst value")
// var sign = prompt("enter your opreter")
// var val2 = prompt("enter second value")
// document.write(val1+sign+val2)

// if( sign === "+"){
//   alert((+val1)+(+val2))
// }else if (sign === "-"){
//   alert(val1-val2)
// }else if (sign === "*"){
//   alert(val1*val2)
// }else if (sign === "/"){
//   alert(val1/val2)
// }else if (sign === "%"){
//   alert(val1/val2*100 + "%")
// }



//////// chapter 35-38///// task 10///////

// var word = prompt("enter your word");
// var checked = "";
// for(var i = word.length - 1; i >= 0; i--){
//   checked += word[i]
// }

// if ( word === checked){
//     console.log( word + " is a palindrome word")
// }


//////// chapter 35-38///// task 11///////


// var value = prompt("enter your product");
// var firstchar  = value.slice(0,1)
// firstchar = firstchar.toUpperCase()
// var otherchar = value.slice(1)
// otherchar = otherchar.toLowerCase()
// var value = firstchar + otherchar;
// document.write(value)



/////////////////END////////////////////
