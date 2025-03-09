let num = prompt("Moi ban nhap mot mang bat ky gom 10 so nguyen: ")
let arr = num.split(" ").map(Number);
if(arr.length !== 10){
    alert("Da qua 10 phan tu vui long nhap lai!")
}else{
    let max = arr[0];
    let index = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
            index = i;
        }
    }
    alert(`So lon nhat la ${max} va o vi tri index thu ${index}`)
}