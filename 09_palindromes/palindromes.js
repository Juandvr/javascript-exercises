const palindromes = function (string) {
    let join = string.replaceAll(",", "").replaceAll(" ", "").replaceAll("!", "").replaceAll(".", "");
    let rev = join.split("").reverse().join("");
    //console.log(join);
    //console.log(rev);
    if (rev.toLowerCase() == join.toLowerCase()) {
        return true;
    } else {
        return false;
    }
};

//console.log(palindromes("A car, a man, a maraca."));

// Do not edit below this line
module.exports = palindromes;
