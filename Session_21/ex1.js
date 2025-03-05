let sum = 0;
for (let i = 0; i < 5; i = i + 1) {
    let number = +prompt("Moi nhap so ngau nhien: ")
    if (Number.isInteger(number)){
        if(number % 2 !== 0){
            sum = sum + number
        }
    }else{
        alert("So nhap vao khong hop le!")
    }
}
alert(`Tong cua cac so le la: ${sum}`)