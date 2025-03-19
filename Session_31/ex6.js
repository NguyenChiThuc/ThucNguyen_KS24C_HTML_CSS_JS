let login = document.getElementById("login-bt")
login.addEventListener('click', function () {
    let userName = document.getElementById("username").value
    let pass = document.getElementById("password").value

    let fixedName = "khabanh@gmail.com"
    let fixedPass = "123456"

    if (userName === fixedName && pass === fixedPass) {
        console.log("Dang nhap thanh cong")
    } else {
        console.log("Dang nhap khong hop le!")
    }
})