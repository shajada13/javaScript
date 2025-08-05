console.log(`           Problem 1 `)
//For given numbers with marks And calculate average marks of the class .. 


let marks = [47, 70, 80, 75, 71, 65]; // Array of marks 

let sum = 0; // Initialize sum to 0 

// Loop through each mark in the array 
for (let mark of marks) {
    sum += mark; // Add each mark to sum 
}

let average = sum / marks.length; // Calculate average 

console.log("Average mark =", average); // Print the average





