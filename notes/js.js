function create(){
var div = document.createElement("div");
// var btn = document.createElement("button");
//div.appendChild(btn);
var text = document.createElement("textarea");
var node = document.createTextNode("");
text.appendChild(node);
div.appendChild(text);
var element = document.getElementById("div1");
element.appendChild(div);
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
document.getElementById("create").onclick=create;
document.getElementById("del").onclick=del;
// onclick="create()"
// onclick="del()"
// for(vari=0;i<10;i++){