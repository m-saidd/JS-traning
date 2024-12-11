let input = document.getElementById("input");
let list = document.getElementById("list");

function addTask() {
    if(input.value === "") {
        alert("please, enter your task...");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "x";
        li.appendChild(span);
    }
    input.value = "";
    saveTask();
}

list.addEventListener("click", function(element) {
    if(element.target.tagName === "LI") {
        element.target.classList.toggle("select");
    } else if(element.target.tagName === "SPAN") {
        element.target.parentElement.remove();
    }
    saveTask();
}, false);

function saveTask() {
    localStorage.setItem("data", list.innerHTML);
}
input.addEventListener("keyup", function(ele) {
    if(ele.keyCode === 13){
        addTask(input.value);
    }
})

function showTask() {
    list.innerHTML = localStorage.getItem("data");
}
showTask();
