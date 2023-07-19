var a=document.getElementsByTagName("p");
// a[3]
// <p class=​"demo1">​A Paragraph4 .​</p>​
document.getElementsByTagName("p");
// HTMLCollection(4) [p#demo, p#demo, p.demo1, p.demo1, demo: p#demo]
document.getElementsByClassName("demo1")
// HTMLCollection(2) [p.demo1, p.demo1]
document.querySelector("#demo")
{/* <p id=​"demo">​A Paragraph1.​</p>​ */}
document.querySelectorAll("#demo")
document.querySelectorAll(".demo")
// NodeList []
document.querySelectorAll(".demo1")
// NodeList(2) [p.demo1, p.demo1]
document.getElementById("demo")
{/* <p id=​"demo">​A Paragraph1.​</p>​ */}
a[3].innerText="hello"
// 'hello'
var i=document.getElementById("demo")
// undefined
i.style.borderColor='green'
// 'green'