console.log (" logical Operators ");

// (&&)and 
a = 5 
b = 4 
c = 5 
console.log ("a = 5 , b = 4 , c = 5 ")


console.log ("a && b = " , a==b && b<a); //ans is false,
// because a is not equal to b , (and) operators is true then , every condition must be true
console.log ("a && b = " , a==c && b<a); //this time ans is true 

// (||)or 
console.log ("a || b = " , a==b || b<a); //ans is true,if any condition is true , then or is true


//(!)not
console.log ("!(a && b) = " , !(a==b ) ); // basically its false but we use ! operator so the ans is true