// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers() {
    return ["Sally", "Bob"]
}

function returnLastTwoDrivers() {
    return ["Freddy", "Claudia"]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function Driver() {
    if (Driver === 0) {
        return selectingDrivers;
    }
}

const fareMultiplier = createFareMultiplier(2);
function createFareMultiplier() {
    return function (fareMultiplier) {
        return (fareMultiplier * fareMultiplier)
    }
}
const Doubler = fareDoubler;
function fareDoubler(Doubler) {
    return (Doubler * 2);
}

function fareTripler(Triple) {
    return (Triple * 3);
}

function selectDifferentDrivers(arrayOfDrivers, funct) {
    return funct(arrayOfDrivers);
}