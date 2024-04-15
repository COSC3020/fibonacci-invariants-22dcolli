//CREDIT: commented out above the portion that I used replit online editor ai tool to help format my bad syntax
const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

function fibTest(n) {
    var fib_solns = [0];
    if(n == 0) return fib_solns;
    fib_solns[1] = 1;
    if(n == 1) return fib_solns;
    for(var i = 2; i <= n; i++) fib_solns[i] =
        fib_solns[i-1] + fib_solns[i-2];
    return fib_solns;
}

const test =
    jsc.forall("nat", function(n) {
        return JSON.stringify(fib(n)) ==
            JSON.stringify(fibTest(n));
    }); 

const test_negative = jsc.forall("nat", function(n) {
    return Array.isArray(fib(n));
});
//had to use replit ai tool to help get the syntax correct
const test_integer = jsc.forall(jsc.suchthat(jsc.integer, n => n < 0), function(n) {
    return typeof fib(n) === 'undefined';
});
//end use of replit tool
const test_all = jsc.forall(jsc.integer, function(n) {
    return test && test_negative && test_integer;
});

jsc.assert(test_all);
