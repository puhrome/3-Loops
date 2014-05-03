/**
 * 3 Loops Created by Phirom Yim on 5/2/14.
 *
 *
 */
//Do While Loop isn't common but must be aware when it is used
console.log ("Do While Loop");

var c = 10;

do {//do or run this code inside here
    console.log(c + ' kegs on the wall');//code will still run before condition is true
    c--;//decrement it
}
while (c > 0);//while or as long as our condition is true

console.log("For Loop");

var c = 10;

do {//do or run this code inside here
    console.log(c + ' kegs on the wall');//code will still run before condition is true
    c--;//decrement it
}
while (c > 0);//while or as long as our condition is true

console.log( "For Loop");
//short hand for the While and Do While Loops
for (var i = 10; i > 0; i--){
    console.log(i + ' kegs on the wall')
}

console.log("While Loop");

var b = 10;//sets up the index

while (b > 0){//checks the condition
    console.log(b + " kegs on the wall");//concatenate it and then run code
    b--; // that is to break the infinite cycle (--) decrements or (++) increments index
}