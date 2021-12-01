// Code your solution in this file!
// returnFirstTwoDrivers() — Declare the variable returnFirstTwoDrivers with 
// const and assign an anonymous function to it.
//  The assigned function should accept an array of drivers as 
// an argument and return the first two drivers in the array.


// returnLastTwoDrivers() — Declare a variable with const that is 
// assigned an anonymous function. The assigned function should accept an  
// array of drivers as an argument and return the last two drivers in the array.

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2);
    
   }
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(2,4)

}
 
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


//createFareMultiplier() — This is a higher-order function that 
// takes in one argument, an integer, and returns a function that will 
// multiply a fare for a ride accordingly. If createFareMultiplier() 
// receives an argument of 4, it will return a function that takes in a fare 
// as an argument and quadruples the fare.


function createFareMultiplier(integer) {
    return function () {
        return (integer * integer)
    }
}

function fareDoubler(integer) {
    return (integer * 2)

}
    
function fareTripler(integer) {
    return (integer * 3)
}
function selectDifferentDrivers(array,fn) {
    console.log(array)
    if (fn === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(array)

    }
    else if (fn === returnLastTwoDrivers) {
        return returnLastTwoDrivers(array)
    }
}
