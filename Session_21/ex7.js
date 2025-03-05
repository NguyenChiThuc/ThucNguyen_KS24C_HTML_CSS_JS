let tien = parseFloat(prompt("Moi ban nhap so tien gui ngan hang ban dau: "))
let laisuat = parseFloat(prompt("Moi ban nhap lai suat thang: "))
let thang = parseFloat(prompt("Moi ban nhap so thang gui: "))
if (isNaN(tien) || isNaN(laisuat) || isNaN(thang) ||
    tien <= 0 || laisuat <= 0 || thang <= 0) {
    alert("Thong tin ban nhap khong dung!")
} else {
    let laisuatmoney = laisuat / 100;
    let giveMoney = tien * Math.pow(1 + laisuatmoney, thang)
    let interes = giveMoney - tien
    alert(`So tien lai la: ${interes.toFixed(3)}
    So tien nhan duoc la: ${giveMoney.toFixed(3)}`)
}