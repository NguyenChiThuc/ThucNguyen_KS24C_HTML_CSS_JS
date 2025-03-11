function evenNum (arr){
    if(arr.length === 0){
       return "Mang khong chua so chan"
    }else{
        let evenNumber = [];
        for(let i = 0; i < arr.length; i++){
            if(isNaN(arr[i])){
                return "Du lieu khong hop le!"
            }else if(arr[i] % 2 === 0){
                evenNumber.push(arr[i])
            }
        }
        return evenNumber;
    }
}
let evenNumber1 = [9, 7, 0, 3, 1, 2];
console.log("So chan la: " + evenNum(evenNumber1))