let num = parseInt(prompt("Moi ban nhap mot mang ky tu: "))
if(num === 0){
    alert("Mang tren khong co ky tu so!")
}else if(num < 0){
    alert("So luong phan tu nhap vao khong hop le!")
}else{
    let arr = []
    for(let i = 0; i < num; i++){
        let n = prompt(`Nhap ky tu thu ${i + 1}: `)
        arr.push(n)
    }
    let sum = 0;
    let index = []
    for(let i = 0; i < arr.length; i++){
        if(!isNaN(arr[i])){
            index.push(arr[i])
            sum = sum + Number(arr[i])
        }
    }
    if(index.length > 0){
        alert(`tong cac ky tu so co trong mang la: ${sum}`)
    }else{
        alert("Trong mang tren khong co ky tu so!")
    }
}