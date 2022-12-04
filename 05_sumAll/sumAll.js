const sumAll = function(firstValue, secondValue) {
    let sumOfNum = 0;
    if (firstValue < 0 || secondValue < 0) {
        return 'ERROR';
    }
    else if (!Number.isInteger(firstValue) || !Number.isInteger(secondValue)) {
        return 'ERROR';
    }
    else if (firstValue < secondValue) {
        for (let i = firstValue; i <= secondValue; i++) {
        sumOfNum += i;
        }
    }
    else if (secondValue < firstValue) {
        for (let i = secondValue; i <= firstValue; i++) {
            sumOfNum += i;
        }
    }
    return sumOfNum;
};

// Do not edit below this line
module.exports = sumAll;
