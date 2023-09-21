const sumAll = function(par1, par2) {
    let sum = 0;
    
    if (!Number.isInteger(par1) || !Number.isInteger(par2)){
        return "ERROR";
    }

    if (par1 < 0 || par2 < 0){
        return "ERROR";
    }

        if(par2 > par1){
            for(par1; par1 <= par2; par1++) {
                sum += par1;
            } 
        } else if (par1 >par2) {
            for(par2; par2 <= par1; par2++) {
                sum += par2;
        } }
        return sum;
    
};

// Do not edit below this line
module.exports = sumAll;
