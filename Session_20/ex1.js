let num = +prompt("Moi ban nhap mot so bat ki: ")
let sum = 0;
if(num <= 0 || isNaN(num)){
    console.log("So ban nhap vao khong hop le!")
}
for(let i = 1; i <= num; i++){
    sum+= i;
}
console.log(`Tong tu 1 den ${num} la: ${sum}`)