console.log ("ComparisonOperators");

// (==)equal to 
a = 5 ;
b = 5 ;
c = "5";

console.log (" a = 5 and b = 5 ,is it equal " ,a == b);
console.log (" a = 5 and c = string 5 ,is it equal " ,a == c); // the ans is true , but is it right no , because c is string ;

//  if we find the perfect ans we usee (===)equal to && type
console.log (" a = 5 and c = string 5 ,is it equal " ,a === c); // the ans is false 

// (!=)not equal
console.log ("a is not equal to b " , a != b) // the ans is false , because its equal 

 
console.log ("c is not equal to a  = " , a != c) // false because c value is string its not work , it like number end its equal so ans is false ,

//so we use this  (!==)not equal to type
console.log ("c is not equal to a = " , a !== c); // the ans is true this time 