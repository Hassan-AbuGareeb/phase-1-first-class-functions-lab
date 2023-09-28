const arr=[5,6,7,8];

function returnFirstTwoDrivers(arr)
{
    return arr.slice(0,2);
}

function returnLastTwoDrivers(arr){
    return arr.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(number){
    return (number2) => number *number2;
}

function fareDoubler(number){
    return number * 2;
}

function fareTripler(number){
    return number * 3;
}

function selectDifferentDrivers(arr,fun){
    return fun(arr);
}

