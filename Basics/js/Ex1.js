var i=document.getElementById("demo")
i.style.borderColor='green'

var c=document.querySelectorAll(".demo")
for (var j=0;j<c.length;j++){
    c[`${j}`].style.borderColor='blue'
};
c[1].innerText="Second Elements of Class"