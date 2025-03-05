let evenCount = 0;
let oddCount = 0;
let input;
for(let i = 0; i < 5; i = i + 1){
    input = +prompt("Moi ban nhap vao mot so bat ky: ")
    if(input % 2 == 0){
        evenCount = evenCount + 1;
    }else{
        oddCount = oddCount + 1;
    }
}
alert(`So luong so chan la ${evenCount} va so luong so le la ${oddCount}`)