while(true){
var n=prompt("Enter Val:");
n=Number.parseInt(n);
if (n!=25){
    console.log("Try again");
    continue
}
window.alert("You guessed the number");
break;
}