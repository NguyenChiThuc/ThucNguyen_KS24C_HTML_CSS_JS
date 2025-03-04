let num1 = +prompt("Moi nhap so thu nhat: ")
let num2 = +prompt("Moi nhap so thu hai: ")
if (isNaN(num1) || isNaN(num2)) {
    alert("So nhap vao khong hop le!")
} else {
    let result = 1;
    for (let i = 0; i < num2; i++) {
        result = result * num1;
    }
    alert(`${num1} ^ ${num2}=${result}`)
}