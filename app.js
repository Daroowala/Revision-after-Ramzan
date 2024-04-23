//Ch1,2,3,4 Alert
// alert("Hello World");
// var a = 5;
// var b = 10;
// var c = a + b;
// alert(c)


// var a = 5;
// var b = 10;
// var c = a + b;
// console.log(c)


// var x = 5;
// var y = "Rehan";
// var z = y + x;
// document.write(z);


// var x = "Rafique";
// var y = "Rehan";
// var z = y + x;
// document.write(z);


// var f = 20;
// var g = "24";
// var h = f + g;
// alert(h);


// var l = "20";
// var m = "24";
// var n = l + m;
// alert(n);


// var l = 20;
// var m = 2;
// var n = l * m;
// alert(n);


// var l = 20;
// var m = 8;
// var n = l + m;
// alert(n);


// var a = 5;
// var b = a++;
// alert(b);


// var a = 5;
// var b = ++a;
// alert(b);


// var a = 5;
// var b = --a;
// alert(b);


// var x = 10;
// var y = x++ + ++x - x + x++ - ++x + x;
// alert(y)


// propmt
// var a = +prompt ("Enter your value", "Your value is");
// var b = a + 10;
// console.log("The output is", + b)


// var a = prompt("Enter your age", "Your age is")
// alert(a);


// var x = "Enter your value";
// var y = "Your value"
// var a = +prompt (x,y);
// var b = a + 10;
// document.write("The output is" + " " + b)


// if, else, elseif && ||
// var age = +prompt("Enter your age");
// if(age == 14){
//     alert("Your age is equale")
// }
// else if(age < 14){
//     alert("You use this Ride")
// }
// else if(age > 50){
//     alert("You are old citizen thats why you can Ride")
// }
// else{
//     alert("Your age is over 14")
// }


// var age = +prompt("Enter Your Age");
// var gender = prompt("Your Gender");
// if(age > 18 && gender == "male"){
//     alert("You are allowed to Ride")
// }
// else if(age < 18 || gender == "female" || gender == "male"){
//     alert("You are on Chance")
// }
// else{
//     alert("You Are Nooooootttt Allowed")
// }


// var a = "5";
// if(a === 5){
//     alert("True");
// }
// else{
//     alert("False");
// }


// var x = 5;
// var y = 10;
// var a = 30;
// var b = 15;
// if(x+y === a-b){
//     alert("correct")
// }
// else{
//     alert("Not correct")
// }


// Array
// var students = ["ghous", "basit", "ali", 123, "&"]
// alert("Welcome " +students[4])

// add value in Array
// var names = [];
// names[0] = "Rehan";
// names[1] = "Ali";
// names[4] = "Ghous"
// console.log(names)

// Remove and add values from end in Array
// var names = ["ghous", "basit", "ali", 123, "&"];
// names.pop()
// names.pop()
// names.pop()
// names.push("Bilal", "Zain")
// console.log(names)


// Remove and add values from start in Array
// var names = ["ghous", "basit", "ali", 123, "&"];
// names.shift()
// names.shift()
// names.unshift("Tahir", "Noman")
// console.log(names)


// // Remove and add values from center[index no] called splice in Array
// var names = ["ghous", "basit", "ali", 123, "&"];
// names.splice(1,2,"Farhan", "Baber")
// console.log(names)


// Copy values called slice in Array
// var names = ["ghous", "basit", "ali", 123, "&"];
// var copyNames = names.slice(1,4)
// console.log(names)
// console.log(copyNames)


//  var inp = prompt("find user by hobby");
//  var users = [
//    { name: "ali", hobbies: ["cricket", "painting", "gaming"] },
//    {
//      name: "ahmed",
//      hobbies: ["football", "bedminton", "ludo", "hockey", "travelling"],
//    },
//    { name: "sahir", hobbies: ["cycling", "swimming", "foos ball"] },
//  ];
//  var flag = false;
//  for (var i = 0; i < users.length; i++){
//    for (j = 0; j < users[i].hobbies.length; j++) {
//      if (inp === users[i].hobbies[j]) {
//        flag=true;
//        alert(users[i].name);
//        break;
//    }
//  }
// }
//  if (!flag) {
//    alert("hobby not found");
//  }


// Loop
// var a;
// for(a = 1; a <= 10;  a++){
// document.write("Hello World!" + "<br>")} 

// var a;
// for(a = 10; a >= 0; a--){
// document.write(a + "<br>")} 

// for(i = 1; i <= 10; i++){
//     document.write("2" + "x" + i + "=" + 2*i + "<br>" + "<br>")
// }
// for(f = 1; f <=10; f++){
//     document.write("3" + "x" + f + "=" + 3*f + "<br>" + "<br>")
// }

// var names = ["ali","basit","farhan","qasim"];
// for(var i = 0; i < names.length; i++){
//     document.write(names[i] + "<br>"); 
// }
 
// var inp = prompt("Enter your city name");
// var cities = ["Lahore", "Fasilabad", "Quetta", "Karachi", "Islamabad"];
// for(var i = 0; i < cities.length; i++){
//     if(cities[i] === "Karachi"){
//     break
//     }
    
//     alert(cities[i] + " Is the Beautyfull City")
// }

// Array mein cities ke names
// var cities = ["Lahore", "Islamabad", "Quetta", "Karachi", "Faisalabad"];

// User se city ka input lena
// var userInput = prompt("Please enter a city name:");

// City ka input ko check karna
// if (cities.includes(userInput)) {
    // Agar city mojood hai to alert display karna
    // alert(userInput + " is a beautiful city");
// } else {
    // Agar city mojood nahi hai to alert display karna
    // alert("Sorry, the city you entered is not in the list.");
// }


// Nested loop
// for(var i = 0; i < 5; i++){
//     for(var j =0; j < 3; j++){
//         document.write("Pakistan Zindabad" + "<br>" )
//     }
// }

// var firstName = ["ali", "kamran", "zia"]
// var lastName = ["khan", "malik",]
// for(var i = 0; i < firstName.length; i++){
//     for(var x = 0; x < lastName.length; x++){
//         console.log(firstName[i] + " " + lastName[x])
//     }
// }


// for (var i = 0; i <= 10; i++){
//     for (var j = 0; j < i; j++){
//         document.write("*")
//     }
//     document.write("<br>")
// }


// var word = prompt("Write a word");
// var check = "";
// for(var i = word.length - 1; i >= 0; i--){
//     check += word[i]
// }
// if(word === check){
//     alert(word + " is a palindrome word")
// }


// // upperCase and lowerCase
// var name = "mohammad rehan";
// name = name.toUpperCase();
// console.log(name)

// var names = "MOHAMMAD REHAN";
// names = names.toLowerCase();
// console.log(names)

// extrecting methord
var Met = "mohammad rehan";
alert(Met.indexOf("r"))