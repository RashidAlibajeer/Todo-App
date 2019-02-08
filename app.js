


var toDo = document.getElementById("h1");
var newV =document.createElement("input");
newV.setAttribute("type" , "text");
newV.setAttribute("size","20");
newV.setAttribute("id" , "input");
newV.setAttribute("placeholder","Please Inter your Value");
toDo.appendChild(newV);



var buton = document.createElement("Input");
buton.setAttribute("type","button");
buton.setAttribute("id","btn");
buton.setAttribute("value","Add Data");
buton.setAttribute("onclick","myFunc()")
toDo.appendChild(buton);

function myFunc(){
    if(document.getElementById("input").value===""){    
        alert("Please fill Name");

    }
    else{
    var div = document.createElement('div');
    div.setAttribute("id","deco");
    var ol = document.createElement("ul");
    var li = document.createElement("li");
    var  value1 = document.createTextNode(document.getElementById("input").value);
    li.setAttribute("id",document.getElementById("input").value);
    li.appendChild(value1);
    ol.appendChild(li);
    div.appendChild(ol);
    toDo.appendChild(div);


    var edit = document.createElement("button");
    edit.setAttribute("id","ed");
    var value = document.createTextNode("Edit");
    edit.appendChild(value);
    li.appendChild(edit);
    ol.appendChild(li);
    div.appendChild(ol);
    toDo.appendChild(div);
    edit.addEventListener("click", function(){
        var add=this.parentNode;
        var prom = prompt("value edit",add.id);
        li.innerHTML=prom;
        li.appendChild(edit);
        li.appendChild(btn);
    })





    var btn =document.createElement("button");
    btn.setAttribute("id","gh")
    var  vl =document.createTextNode("Delete");
    btn.appendChild(vl);
    li.appendChild(btn);
    ol.appendChild(li);
    div.appendChild(ol);
    toDo.appendChild(div); 
    btn.addEventListener("click", function(){
        btn.parentNode.remove()
    })
    var x=document.getElementById("input").value="";
    

}
}
















