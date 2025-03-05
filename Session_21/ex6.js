let num = +prompt("Moi nhap vao mot so nguyen bat ky: ")
if (Number.isInteger(num)) {
    for (let i = 1; i < num; i = i + 1) {
        if (num % i === 0) {
            alert(`Uoc cua ${num} la: ${i}`)
        } else {
            alert("So tren khong co uoc!")
        }
    }
} else {
    alert("So nhap vao khong hop le!")
}