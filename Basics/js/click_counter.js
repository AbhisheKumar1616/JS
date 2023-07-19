var cc=document.getElementById("click_counter_c");
var pp=document.getElementById("para");
let count=0
function clicking(){
    ++count;
    pp.innerText=`Number of Clicks= ${count}`;
};
cc.addEventListener("click",clicking);