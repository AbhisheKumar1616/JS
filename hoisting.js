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