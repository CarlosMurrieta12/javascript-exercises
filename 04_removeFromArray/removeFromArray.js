const removeFromArray = function(arr, value, secValue, thirdValue, fourthValue) {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] === value || arr[i] === secValue || arr[i] === thirdValue || arr[i] === fourthValue) {
            arr.splice(i, 1);
        }
        else {
            i++;
        }
    }


    return arr;
}

// Do not edit below this line
module.exports = removeFromArray;
