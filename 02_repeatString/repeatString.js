const repeatString = function(string, num) {
    if (num < 0) return 'ERROR';
    let userWord = '';

    for (let i = 0; i < num; i++) {
        userWord += string;
    }
    return userWord;
};

// Do not edit below this line
module.exports = repeatString;
