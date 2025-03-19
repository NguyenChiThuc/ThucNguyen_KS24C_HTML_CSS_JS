let openModalBtn = document.getElementById("openModalBtn")
let closeModalBtn = document.getElementsByClassName("closeModalBtn")[0]
let modal = document.getElementById("myModal")
openModalBtn.addEventListener('click', function(){
    modal.style.display = "flex"
});
closeModalBtn.addEventListener('click', function(){
    modal.style.display = "none"
});
