const reverseString = function(word) {
    let userWord = word;
    let wordArr = [];
    let i = 0;

    while (i <= userWord.length) {
        wordArr.push(userWord[userWord.length - i]);
        i++;
    };

    wordArr.shift();
    return wordArr.join('');
};

// Do not edit below this line
module.exports = reverseString;
