let mathPoint = +prompt("Nhap diem toan: ")
let liPoint = +prompt("Nhap diem van: ")
let engPoint = +prompt("Nhap diem anh: ")
let tbm = (mathPoint + liPoint + engPoint) / 3;
if(tbm < 5.0){
    alert("Hoc luc: Yeu")
}else if(tbm < 6.4){
    alert("Hoc luc: Trung binh")
}else if(tbm < 7.9){
    alert("Hoc luc: Kha")
}else{
    alert("Hoc luc: Gioi")
}