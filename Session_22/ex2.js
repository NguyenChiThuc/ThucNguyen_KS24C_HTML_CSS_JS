let number = [2, 5, 7, 4, 1, 8, 6];
let add = parseInt(prompt("Moi nhap mot so bat ky: "))
if (!Number.isInteger(add)) {
    alert("So ban nhap vao khong hop le!")
} else {
    if (number.includes(add)) {
        alert("Bingo")
    } else {
        alert("Chuc ban may man lan sau!")
    }
}