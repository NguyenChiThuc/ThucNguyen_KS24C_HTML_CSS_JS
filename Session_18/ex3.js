let user = prompt("Nhap ten: ")
let passWord;
if(user = `ADMIN`){
    passWord = prompt("Nhap mat khau: ")
    if(passWord == `TheMaster`){
        alert ` Welcome.`
    }else if(passWord == null){
        alert `Cancelled.`
    }else{
        alert `Wrong password.`
    }
}else if(user == null){
    alert `Cancelled`
}else{
    alert `I Don't know you`
}