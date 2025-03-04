let num = +prompt("mời b nhập số lượng mà số FBNC cần được hiển thị: ")
let result = ""
if (isNaN(num) || num < 0) {
    alert("mời b nhập lại số lượng cần được hiển thị")
}else{
    let a = 1
    let b = 1
    let num1
    result = result + a
    if (num > 1) {
        result = result + b
    }
    for (let i = 2; i < num; i++) {
        num1 = a + b
        result = result + num
        a = b
        b = num1
    }
    alert(`${result}`)
}