// Code your solution in this file!
/// 1. returnFirstTwoDrivers
// Declare with const and assign an anonymous function
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

// 2. returnLastTwoDrivers
// Declare with const and assign an anonymous function
const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

// 3. selectingDrivers
// Array containing the two functions above
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. createFareMultiplier
// Higher-order function that returns another function
function createFareMultiplier(multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
}

// 5. fareDoubler
// Uses createFareMultiplier to double a fare
const fareDoubler = createFareMultiplier(2);

// 6. fareTripler
// Uses createFareMultiplier to triple a fare
const fareTripler = createFareMultiplier(3);

// 7. selectDifferentDrivers
// Takes an array of drivers and a function
function selectDifferentDrivers(drivers, driverSelector) {
  return driverSelector(drivers);
}