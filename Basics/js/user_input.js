// prompt doesn't work here, on chome Scratch JS it works
let n=prompt("Enter n")
n=Number.parseInt(n)
let val=1;
for (let i=1;i<=n;i++){
    val*=i;
}
console.log(val)