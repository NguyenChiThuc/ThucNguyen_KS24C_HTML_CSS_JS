let num = +prompt("Moi ban nhap mot so bat ki: ")
let result = ""; 
if(num <= 0 || isNaN(num)){
    console.log("So ban nhap vao khong hop le!")
}else{
    for(let i = 1; i <= num; i++){
        if(i % 5 === 0){
            result = result + i;
            result = result + " ,";
        }
        console.log(`Cac so chia het cho 5 tu 1 den ${num} la: ${result}`)
    }
}