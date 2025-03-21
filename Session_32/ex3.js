document.getElementById("sbj-btn").addEventListener("click",function(){
    let input = document.getElementById("subject")
    let subjectName = input.value;
    if(subjectName === ""){
        alert("Ten mon hoc khong hop le!")
        return;
    }
    document.getElementById("sbj-list").innerHTML += `<li>${subjectName}</li>`
}) 