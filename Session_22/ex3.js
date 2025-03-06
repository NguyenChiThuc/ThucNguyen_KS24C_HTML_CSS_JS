let num = prompt("Nhap vao day so bat ky: ");
let check =-1;
let index = number.split(""); 
for(let i = 0; i < index.length; i++){
    if(isNaN(parseInt(index[i]))){
        check = 1;
    }
}
if(check === -1){
    index = index.reverse().join(""); 
    console.log(index);
}else{
    console.log("Day so khong hop le!");
}