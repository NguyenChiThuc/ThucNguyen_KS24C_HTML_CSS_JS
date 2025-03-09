let num = parseInt(prompt("Moi ban nhap so luong phan tu cua mang: "))
if (num < 0) {
    alert("So luong phan tu khong hop le!")
} else if (num === 0) {
    alert("Mang khong co phan tu nao!")
} else {
    let arr = [];
    for (let i = 0; i < num; i++) {
        let n = parseFloat(prompt(`Nhap phan tu thu ${i + 1}: `))
        arr.push(n)
    }   
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i]) && arr[i] < 0) {
            count++;
        }
    }
    alert(`So nguyen am trong mang la: ${count}`)
}