// find the nth fibo
var n=5
function fib(n){
    if (n<=1){
        return 1;
    }
    return n*fib(n-1);
}
console.log(fib(n))


// // print n fibo
var n=5
function fib(n){
    var a=0;
    var b=1;
    var c=a+b;
    while(a<n){
        console.log(a);
        a=b;
        b=c;
        c=b+a;
    }
}
fib(n)


// check if a number is in fibo series
var n=10;
var a;
function fibo(n){
    var a=0;
    var b=1;
    var c=a+b;
    while (a<=n){
        if (a==n){
            return true;
        }else{
            a=b;
            b=c;
            c=a+b;
        }
    }
    return false
}
a=fibo(n);
console.log(a);