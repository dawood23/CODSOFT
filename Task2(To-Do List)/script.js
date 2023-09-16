const input=document.getElementById("inputid");
const listitems=document.getElementById("tasklist");


function addtask(){
    if(input.value=='') alert("You must enter a task");
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        listitems.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
    
    input.value="";
    data();
}

listitems.addEventListener("click",function(e){
    if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    data();
    }
},false);

function data(){
    localStorage.setItem("Taskdata", listitems.innerHTML);
}

function display(){
    listitems.innerHTML=localStorage.getItem("Taskdata");
}

display();