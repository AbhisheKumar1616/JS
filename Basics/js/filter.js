// Example 1
let arr=[1,2,3,4,5,6];
let modify=arr.filter(function(ele){
    return ele%2==0;
});

console.log(modify)


// Example 2
let arr2=[1,2,3,4,5,6];
function modift_ele(ele){
    return ele<3;
}
let modify2=arr2.filter(modift_ele);
console.log(modify2)


// Example 3
let arr3=[1,2,3,4,5,6];
let modify3=arr3.filter((ele)=>ele>2);

console.log(modify3)