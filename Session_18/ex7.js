let a = +prompt("Moi ban nhap vao so a: ")
let b = +prompt("Moi ban nhap vao so b: ")
let count = prompt("Moi ban nhap vao cac phep tinh (+,-,*,/): ")
let result;
switch(count){
    case "+":
        result = a + b
        break;
    case "-":
        result = a - b
        break;
    case "*":
        result = a * b
        break;
    case "/":
        if(b != 0){
            result = a / b
        }else{
            result = "Khong the chia cho 0!"
        }
        break;
    default:
        result = "Ket qua khong hop le!"
}
alert(`Ket qua cua phep tinh tren la: ${a} ${count} ${b} = ${result}`)