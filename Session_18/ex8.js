let a = +prompt("Nhap canh a: ")
let b = +prompt("Nhap canh b: ")
let c = +prompt("Nhap canh c: ")
if(a + b > c && a + c > b && b + c > a){
    let triangle;
    if(a === b && b === c){
        triangle = "Tam giac deu"
    }else if(a === b || a === c || b === c){
        triangle = "Tam giac can"
    }else if(a ** 2 + b ** 2 === c ** 2 || a ** 2 + c ** 2 === b ** 2 || b ** 2 + c ** 2 === a ** 2){
        triangle = "Tam giac vuong"
    }else{
        triangle = "Tam giac thuong"
    }
    alert(`Day la loai: ${triangle}`)
}else{
    alert("Day khong phai la tam giac!")
}