var switch_d=document.getElementById("flexSwitchCheckDefault")
var switch_l=document.getElementById("flexSwitchCheckChecked")
var light=document.getElementById("lightmode")
var b=document.getElementsByTagName("body")
var count=0
switch_d.addEventListener("click",function (event) {
    if(count==0){
        b[0].style.backgroundColor='black';
        light.innerText="Dark Mode";
        // light.style.color="white";
        b[0].style.color="white";
        ++count;
    }
    else if(count==1){
        b[0].style.backgroundColor='white';
        light.innerText="Light Mode";
        // light.style.color="black";
        b[0].style.color="black";
        --count;
    }
});