console.log( `          Problem 2`)
//for a given array with 5 items , All items given offer with 10% OFF ,change the array to store final price after applying the offer ..

// For a given array with 5+ items, apply 10% OFF and update the array
let priceItems = [300, 200, 100, 47, 655, 999, 1002];

for (let i = 0; i < priceItems.length; i++) {
    let discount = priceItems[i] * 0.10; // 10% discount
    let newPrice = priceItems[i] - discount; // Final price after discount
    priceItems[i] = newPrice; // Update array with discounted price
    console.log(`Item ${i + 1} new price:`, newPrice.toFixed(2));// toFixed(2) is used to format the number to 2 decimal places (money er moto dekhate) 

}




// another Bangla code to ->for of 
// let priceItems2 = [300 , 200 , 100 , 47 , 655 , 999 ,1002]

// for (let price of priceItems2){
//     let offerM = (10 / 100 ) * price ;
//     let newPrice =  price - offerM ;
//     console.log (newPrice);
// }