let number=Math.round(Math.random()*10);
let attempts=0

while (true){
    let guess=window.prompt("Enter Number")
    ++attempts;
    if (guess==number){
        console.log(`Got it! at ${attempts} attempt/s`)
        break;
    }
    console.log("Try again")
};