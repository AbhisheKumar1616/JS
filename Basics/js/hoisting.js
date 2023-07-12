// Example -1
console.log(j);
hoist();
function hoist(){
    var i=10;
    console.log(i);
    
}
var j=20;


// Example -2
console.log(j);
hoist();
function hoist(){
    console.log(i);
    var i=10;
    
}
var j=20;


// Example-3
console.log(y);
console.log(x);

var x=function fact(n){
  let a=1;
  for (let i=1;i<=n;i++){
    a*=i;
  }
  return a;
}

var y=function (n){
  let a=1;
  for (let i=1;i<=n;i++){
    a*=i;
  }
  return a;
}
