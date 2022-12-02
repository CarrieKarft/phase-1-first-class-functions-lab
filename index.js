// Code your solution in this file!
// functions for minipulating the array of drivers
// const driverArray = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function(array) {
    return array.slice(0, 2)
}


const returnLastTwoDrivers = function(array) {
    return array.slice(2, 4);
}



// array of above functions
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// functions for multiplying fare by a given interger
// this is definitly incorrect
const createFareMultiplier = function(multiplyValue) {
    return function (fare) {
        return fare * multiplyValue
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDNames, driversFunction) {
    return driversFunction(arrayOfDNames);
}
console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers));


