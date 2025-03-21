let box = document.getElementsByClassName("green-box")[0];
document.getElementById("change-btn").onclick = function(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}