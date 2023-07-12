// Nornal For loop
for(let i=1;i<=20;i++){
    if(i%2==0){
        console.log(i)
    };
};



var arr=["a","b",3]
var i,len;
for (i=0,len=arr.length;i<len;i++){
    console.log(arr[i]);
}

// For in loop
var arr=["a","b",3]
for (var i in arr){
    console.log(arr[i]);
}
arr={
    a:1,
    b:2,
    c:3
};
for(var i in arr){
    console.log(i)
    console.log(arr[i]);
}

//For of loop
var arr=["a","b",3]
for (var i of arr){
    console.log(arr[i]);
}
