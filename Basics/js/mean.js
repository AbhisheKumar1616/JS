const arr=[];
for(var i=0;i<5;i++){
    var a=prompt("Enter "+(i+1)+" value ");
    arr.push(Number.parseFloat(a));
};
const mean=(arr)=>{
    let sum=0
    for(var i of arr){
        sum+=i;
    };
  return sum/5
}

console.log(mean(arr))