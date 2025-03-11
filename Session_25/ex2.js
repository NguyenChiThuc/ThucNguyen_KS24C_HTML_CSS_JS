function total (a, b){
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        return "So nhap khong hop le!"
    }else{
        return a + b;
    }
}
let a = +prompt("Moi ban nhap so thu nhat: ")
let b = +prompt("Moi ban nhap so thu hai: ")
console.log("Tong cua 2 phan tu la: " + total(a, b))