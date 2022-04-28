const removeFromArray = function(arr) {
    let args = [];
    for (let i = 0; i < arguments.length; i++) {
        args[i] = arguments[i];
    }
    for (i = 0; i < args.length; i++) {
        for (let j=0; j < arr.length; j++) {
            if (arr[j] === args[i]) {
                arr.splice(j,1)
            }
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
