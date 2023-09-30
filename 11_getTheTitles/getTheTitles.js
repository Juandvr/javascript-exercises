const getTheTitles = function(arr) {
    let list = [];
    for(let i = 0; i < arr.length; i++){
        list.push(arr[i].title);
    }
    return list;
};

// Do not edit below this line
module.exports = getTheTitles;
