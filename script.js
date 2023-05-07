
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
   
    if(inputBox.value === ''){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li");//a
        li.innerHTML = inputBox.value;//b
        listContainer.appendChild(li);//c using a b and c we tried to append the list that user will create
        let span = document.createElement("span");//1
        span.innerHTML = "\u00d7";//2
        li.appendChild(span);//3  using 1 2 3 we created a cross icon
    }
    inputBox.value = "";
    saveData();
} 
listContainer.addEventListener("click", function(e){
    //to check and uncheck
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

}, false);
//storing the values so that when we return bace the added values doesn't dissappear
//list container is our variable name
//so whenever we add a new task we must call the save data function.
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
//to show the list as it is after the refreshing of the website
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");

}
showTask();
