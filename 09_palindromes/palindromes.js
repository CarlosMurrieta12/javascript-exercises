const palindromes = function (string) {
    let arr = [];
    let paliString;
    let paliArr = [];
    let thirdString;
    let secString;


    if (string.charAt(string.length - 1) === '.' || string.charAt(string.length - 1) === '!') {
        secString = string.slice(0, string.length - 1);
        paliArr = secString.split(' ');
        thirdString = paliArr.join('');
        paliString = thirdString.toLowerCase();
    }
    else {
        secString = string.slice();
        paliArr = secString.split(' ');
        thirdString = paliArr.join('');
        paliString = thirdString.toLowerCase();
    }

    for (let i = 0; i < paliString.length; i++) {
        arr.push(paliString.charAt(i));
    }

    if (paliString.charAt(1) === arr[arr.length - 2]) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
