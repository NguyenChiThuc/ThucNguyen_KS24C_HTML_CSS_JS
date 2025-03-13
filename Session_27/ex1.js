let arr = [];
let menu = `
1. Cộng hai số.
2. Trừ hai số.
3. Nhân hai số.
4. Chia hai số.
5. Thoát.
`;
let choice;
while (choice !== 5) {
    choice = +prompt(menu + "Lua chon cua ban la: ")
    let a = +prompt("Moi ban nhap so thu nhat: ")
    let b = +prompt("Moi ban nhap so thu hai: ")
    let result;
    switch (choice) {
        case 1:
            result = sumNum(a, b);
            break;
        case 2:
            result = truNum(a, b);
            break;
        case 3:
            result = nhanNum(a, b);
            break;
        case 4:
            result = chiaNum(a, b);
            break;
        case 5:
            alert("Thoat!!!")
            break;
        default:
            alert("So nhap khong hop le! Vui long nhap lai")
            break;

    }
    alert("Ket qua cuoi cung: " + result)
}

function sumNum(a, b) {
    return a + b;
}
function truNum(a, b) {
    return a - b;
}
function nhanNum(a, b) {
    return a * b;
}
function chiaNum(a, b) {
    if (b === 0) {
        return "Khong the chia!!!"
    }
    return a / b;
}