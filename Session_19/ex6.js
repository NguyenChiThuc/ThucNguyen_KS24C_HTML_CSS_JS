let a = +prompt("Nhap so a: ")
let b = +prompt("Nhap so b: ")
let c = +prompt("Nhap so c: ")
let x;
let x1;
let x2;
if (a === 0){
    alert("Day khong phai la nghiem")
}
let delta = (b ** 2) - 4 * a * c
if (delta < 0){
    alert("Phuong trinh vo nghiem.")
}else if (delta == 0){
    let x = -b / (2 * a);
    alert(`Phuong trinh co nghiem kep la: x = ${x1} = ${x2} = ${x}`)
}else{
    let x1 = (-b + Math.sqrt(delta)) / (2 * a) 
    let x2 = (-b - Math.sqrt(delta)) / (2 * a)
    alert(`Phuong trinh co 2 nghiem phan biet la: x1=${x1}, x2=${x2}`)
}