let num = ["", false, 0, undefined, null, 4, "test"]
let arr = []
for(let i = 0; i < num.length; i++){
    if(num[i]){
        arr.push(num[i])
    }
}
alert(`Cac gia tri falsy la: ${arr}`)