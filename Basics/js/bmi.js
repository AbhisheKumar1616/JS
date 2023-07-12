// Weight 58kg and height 1.60m
var w=58;
var h=1.6;
var bmi=(w)/Math.pow(h,2);

if (bmi<18.5){
    console.log("Underweight");
}
else if(bmi>=18.6 && bmi<=24.9){
    console.log("Healthy");
}
else if(bmi>=25 && bmi<=25.9){
    console.log("Overweight");
}
else{
    console.log("Obese");
}
