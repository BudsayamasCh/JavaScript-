let num1 = '150';
let flo1 = '1.50';
console.timeLog("***Converting string to intergers***");
console.log(parseInt('100'));
console.log(parseInt(num1));
console.log(pareInt("ABC"));
console.log(pareInt('0xF'));

console.log("****Converting srting to float****");
console.log(parseFloat('1.25abc'));
console.log(parseFloat(flo1));
console.log(parseFloat('ABC'));

console.log("****More Conversion Exam****");
console.log(pareInt('1.5'));
console.log(pareInt('1 + 1'));

console.log(pareInt(`${1 + 1}`));

console.log("****Converting number to srtings****");
console.log(num1.toString());
console.log(flo1.toString());
console.log((100).toString());
