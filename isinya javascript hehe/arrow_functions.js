function x1(a, b){
    return a + b + 100;
}
console.log('function x1 = ',x1(20, 30));

const x2 = (a, b) => a + b + 100;
console.log('function x2 = ',x2(10, 10));

const x3 = b => b + 100;
console.log('function x3 = ',x3(10))

const x4 = () => 100;
console.log('function x4 = ',x4())

const x5 = b => {
    var a = 10;
    return a + b + 100;
}
console.log('function x5 = ',x5(40))

const nama = [
    'zhafran',
    'anggi',
    'bita',
    'kinan',
    'fikar'

];

console.log('panjang string = ',nama.map(nama => nama.length));