const inputBox=document.getElementById("inputBox");
const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value===''){
        alert("you must write something!!!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.append(li);
        let span=document.createElement("span");
        span.innerHTML="&#128465";
        li.appendChild(span);
    }
    inputBox.value='';
    saveData();
}

listContainer.addEventListener("click",(e)=>{
if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
    saveData();
}
else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    saveData();
}
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function onLoad(){
    listContainer.innerHTML=localStorage.getItem("data");
}
onLoad();
