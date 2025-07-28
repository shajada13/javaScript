// use object 

console.log ("      For in loops")

student = { 
    name : "masum",
    cgpa : 3.45,
    pass : true ,
    intake : 54 ,
};
for ( let i in student ){  // print key not value

    console.log ("KEY = ", i , " VALUE = " , student [i]) // if i need specific value then -> (student ["intake"]) 

}