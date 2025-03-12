let arr = [];
for (let i = 0; i < 10; i++) {
    arr[i] = +prompt(`Phan tu ${i + 1}: `)
    if(isNaN(arr[i]) || !Number.isInteger(arr[i])){
        alert("Du lieu khong hop le!")
    }
}
if(arr.length === 0){
    alert("Mang khong co phan tu")
}else{
    let ketQua = arr.filter((number) => number >= 10)
    alert(ketQua)
}