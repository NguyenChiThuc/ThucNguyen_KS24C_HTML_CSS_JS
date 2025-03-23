let input = document.getElementById("pass-eye")
let eye = document.getElementsByClassName("eye-button")[0];
eye.onclick = function(){
    let type = input.getAttribute("type")
    let newType = "password"
    if(type === "password"){
        newType = "text";
    }
    input.setAttribute("type", newType)
};