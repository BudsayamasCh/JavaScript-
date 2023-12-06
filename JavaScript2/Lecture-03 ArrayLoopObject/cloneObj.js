const obj1 = {
    person : 'Thitirat',
    weight : 52
}

const obj2 = {...obj1};
obj2.weight = 50;
console.log(obj1);
console.log(obj2);
