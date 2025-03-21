let button = document.getElementById("button")
let count = document.getElementsByTagName("span")[0];
let counter = 0;

button.onclick = function () {
    count.textContent = ++counter;
}