function create(){
var div = document.createElement("div");
var text = document.createElement("textarea");
var node = document.createTextNode("");
text.appendChild(node);
div.appendChild(text);
var element = document.getElementById("div1");
element.appendChild(div);
document.getElementsByTagName("div").setAttribute("class", "box");
}
// under progress
function del_1(){
    var div = document.getElementById("div1");
var child = document.getElementById("p1");
div.removeChild(child);
}
function del(){
    document.getElementById("div1").innerHTML = "";
}
