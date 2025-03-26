let task = JSON.parse(localStorage.getItem("task")) || [];
function showTask() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";
    task.forEach((tasks, index) => {
        let listTask = document.createElement("li");
        listTask.innerHTML = `
        <span>${tasks}</span>
        <div>
            <button onclick = "editTask(${index})">Sua</button>
            <button onclick = "deleteTask(${index})">Xoa</button>
        </div>
        `;
        list.appendChild(listTask);
    });
}
function taskInput() {
    let input = document.getElementById("taskInput");
    let tasks = input.value;
    if (tasks === "") {
        alert("Khong duoc de trong!")
        return;
    }
    task.push(tasks);
    localStorage.setItem("task", JSON.stringify(task));
    tasks.value = "";
    showTask();
}
function editTask(item) {
    let newTask = prompt("Chinh sua cong viec nay: ", task[item])
    if (newTask !== null) {
        task[item] = newTask.trim();
        localStorage.setItem("task", JSON.stringify(task))
        showTask();
    }
}
function deleteTask(index) {
    if (confirm("Ban co chac chan muon xoa cong viec nay khong?")) {
        task.splice(index, 1);
        localStorage.setItem("task", JSON.stringify(task));
        showTask();
    }
}