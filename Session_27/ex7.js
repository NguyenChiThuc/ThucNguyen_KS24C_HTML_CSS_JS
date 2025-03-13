function lostNumber(arr){
    if(!Array.isArray(arr)){
        return "Du lieu khong hop le!"
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i + 1] !== arr[i] + 1){
            return arr[i] + 1
        }
    }
    return "Mang tren khong co so bi thieu!"
}
console.log(lostNumber([1, 2, 3, 4]))
console.log(lostNumber([1, 2, 4, 5]))
console.log(lostNumber("abc"))