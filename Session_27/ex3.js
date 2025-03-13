let menu = `
    1.Tính diện tích hình tròn.
    2.Tính chu vi hình tròn.
    3.Tính diện tích hình chữ nhật.
    4.Tính chu vi hình chữ nhật.
    5.Thoát.
`
let choice;
while (choice !== 5) {
    choice = +prompt(menu)
    let result;
    switch (choice) {
        case 1:
            result = dienTich()
            alert(result.toFixed(2))
            break;
        case 2:
            result = chuVi()
            alert(result.toFixed(2))
            break;
        case 3:
            result = dienTichChuNhat()
            alert(result)
            break;
        case 4:
            result = chuViChuNhat()
            alert(result)
            break;
        case 5:
            alert("Thoat!!!")
            break;
        default:
            alert("Vui long nhap lai!")
            break;
    }
}
function dienTich() {
    let banKinh = +prompt("Moi nhap mot so: ")
    return Math.PI * Math.pow(banKinh,2)
}
function chuVi() {
    let banKinh = +prompt("Moi nhap mot so: ")
    return 2 * Math.PI * banKinh
}
function dienTichChuNhat() {
    let a = +prompt("Moi ban nhap vao chieu dai: ")
    let b = +prompt("Moi ban nhap vao chieu rong: ")
    return a * b;
}
function chuViChuNhat(){
    let a = +prompt("Moi ban nhap vao chieu dai: ")
    let b = +prompt("Moi ban nhap vao nhieu rong: ")
    return (a + b) * 2;
}