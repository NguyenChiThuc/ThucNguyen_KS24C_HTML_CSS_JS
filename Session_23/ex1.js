let num = prompt("Moi ban nhap vao mot mang so nguyen bat ky: ")
let arr = num.split(" ").map(Number);
if(arr.length !== 10){
    alert("Ban chi duoc nhap 10 phan tu! Vui long nhap lai!")
}else{
    let result = "";
    let found = false
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= 10){
            result = result + arr[i] + "";
            found = true;
        }
    }
    if (found){
        alert(`Cac so lon hon hoac bang 10 trong mang la: ` + result.trim(""));
    }else{
        alert("KHong co so nao lon hon hoac bang 10 trong mang!")
    }
}