let type = prompt("Moi nhap (VND) hoac (USD): ")
let cash;
if (type === "VND") {
    cash = +prompt("Nhap so tien VND: ")
    if (cash >= 0 && !isNaN(cash)) {
        alert(`${cash / 23000} USD`)
    } else {
        alert("Tien nhap vao khong hop le!")
    }
} else if (type === "USD") {
    cash = +prompt("Nhap so tien USD: ")
    if (cash >= 0 && isNaN(cash)) {
        alert(`${cash * 23000} VND`)
    } else {
        alert("Tien nhap vao khong hop le!")
    }
}else{
    alert("Loai tien khong hop le!")
}