let btn = document.getElementById("btn");
let container = document.getElementsByClassName("container")[0]

btn.onclick = function (){
    if(container.classList.contains("dark-mode")){
        container.classList.remove("dark-mode")
        container.classList.add("light-mode")
    }else{
        container.classList.remove("light-mode")
        container.classList.add("dark-mode")
    }
}