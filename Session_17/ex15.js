let ban_kinh = prompt("Moi nhap ban kinh hinh cau: ")
const PI = Math.PI
let thetich_cau = (4 / 3) * PI * Math.pow(ban_kinh,3)
document.write(`The tich hinh cau la: ${thetich_cau.toFixed(2)} </br>`) 
let dientich = 4 * PI * ban_kinh ** 2
document.write(`Dien tich mat cau la: ${dientich.toFixed(2)} </br>`)
let chuvi = 2 * PI * ban_kinh
document.write(`Chu vi hinh cau la: ${chuvi.toFixed(2)} </br>`)