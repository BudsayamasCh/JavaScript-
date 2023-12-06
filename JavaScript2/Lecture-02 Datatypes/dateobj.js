//Data function return millisecond that have elapsed
//since midnight on January 1, 1970,UTC
//this example take 2 second to run
const start = Data.now();

console.log('starting timer ...');
//expected output : start timer ....

setTimerout(() =>{
    const millis = Date.now() - start;

    console.log(`second elapsed = ${Math.floor(millis / 1000)}`);
    // expacted output : second elapsed = 2
},2000);