var x = 3;
function hitungan(randomize) {
    if(randomize){
        var x = Math.random();
        return x;
    }
    return x;
}

console.log("hitungan dengan var = ", hitungan(false));

let x2 = 3;
function hitunganx2(randomize) {
    if(randomize){
        let x2 = Math.random();
        return x2;
    }
    return x2;
}

console.log("hitungan dengan let = ", hitunganx2(false));