let num = +prompt("nhập vào số nguyên ")
if (isNaN(num) || num < 0) {
    alert("So nhap vao khong hop le!")
}else{
    let sogoc = num
    let numdaonguoc = 0;
    while (num > 0) {
        let chuso = num % 10
        numdaonguoc = numdaonguoc * 10 + chuso
        num = Math.floor(num / 10)
    }
    if (sogoc === numdaonguoc) {
        alert(`${sogoc} là số đối xứng.`)
    } else {
        alert(`${sogoc} không là số đối xứng.`)
    }
}