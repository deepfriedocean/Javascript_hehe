function param(x){
    if(x){
        // does nothing cause its true
        // x = 68
        // console.log(x)
    }else{
        x = 99
        console.log(x)
    }
}
param(false);
 
function param2(x, y){
    x = x || 12;
    y = y || 22;
    console.log(x, y);
}
param2(69, 72);


