let str = prompt("Nhap mot chuoi bat ky: ")
let num = prompt("Nhap tu can tim kiem: ")
let check = -1;
for(let i = 0; i < str.length; i = i + 1){
    if(num === str[i]){
        check = 1;
        break;
    }else{
        check = -1;
    }
}
if(check === 1){
    alert("Dang ton tai tu ban can tim kiem!")
}else{
    alert("Khong ton tai tu ban can tim!")
}