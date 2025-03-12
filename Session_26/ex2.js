function long(arr, input){
    if(!Array.isArray(arr) || arr.length < 1){
        alert("Mang khong hop le!")
        return;
    }
    let animal = arr.filter(function(input){
        return typeof input === "string" && input.length > 5
    });
    alert(animal.join(", "))
}
let arr = [];
let input = +prompt("Moi ban nhap vao so luong phan tu: ")
if(Number.isInteger(input) && input > 0){
    for(let i = 0; i < input; i++){
        let cont = prompt(`Phan tu ${i + 1}: `)
        arr.push(cont)
    }
    long(arr);
}else{
    alert("So luong nhap vao khong hop le!")
}