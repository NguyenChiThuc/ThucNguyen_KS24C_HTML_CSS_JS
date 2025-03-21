let tasks = [];
let addButton = document.getElementById("more-btn");
let taskList = document.getElementById("task");

addButton.addEventListener("click", function () {
    let content = document.getElementById("input").value;
    if (content === "") {
        alert("Vui long nhap lai");
        return;
    }
    let newTask = {
        id: Math.random(),
        task: content,
    };
    tasks.push(newTask);
    document.getElementById("input").value = "";
    displayTaskList();
});

function displayTaskList() {
    taskList.innerHTML = "";
    for (let i in tasks) {
        let newList = `
    <li>${tasks[i].task}<div><span class="close">&#x2715;</span></div></li>`;
        taskList.innerHTML += newList;
    }
    let closeBtn = document.getElementsByClassName("close");
    for (let i in tasks) {
        closeBtn[i].onclick = function () {
            let id = +closeBtn[i].parentElement.id;
            let findIndex = -1;
            for (let index in tasks) {
                if (id === tasks[index].id) {
                    findIndex = index;
                    break;
                }
            }
            tasks.splice(findIndex, 1);
            displayTaskList();
        };
    }
}