let cash = +prompt("Nhap so tien gui: ")
let month = +prompt("Nhap so thang gui")
if (month > 12){
    console.log("Thang khong hop le!")
}
let lai_suatNam = 4.3
let lai_suatThang = (4.3 / 100) / 12
let result = cash * lai_suatThang * month
alert(`So tien lai sau ${month} thang gui ngan hang la: ${result.toFixed(2)}`)