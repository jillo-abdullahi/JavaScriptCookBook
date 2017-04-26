//String functions, toLowerCase() and toUpperCase()
var strName = prompt("What's your name?", "");
if (strName.toUpperCase () == "SHELLEY") {
alert("Your name is Shelley! Good for you!");
} else {
alert("Your name isn't Shelley. Bummer.");
}

//automatic data conversion to string
var numVal = 10.00;
if(numVal == "10"){
  alert("The string is 10"); 
}

//string literals are not always equal to String Objects
var strObject = new String("Shelley");
var strLiteral = "Shelley";
if (strObject == strLiteral) // this comparison succeeds
...
if (strObject === strLiteral) // fails because of different data types
//"===" is called the strict equality operator

//Here is another approach to comparing strings. The method returns a numeric value equal to
//0 if the two strings are the same; –1 if the string parameter is lexically greater than the
//original string; 1 otherwise:
var fruit1 = "apple";
var fruit2 = "grape";
var i = fruit1.localeCompare(fruit2); // returns -1


