function prime (num){
    if(num < 1 || !Number.isInteger(num)){
        return "Du lieu nhap vao khong hop le!"
    }else if(num < 2){
        return num + " khong phai la so nguyen to!"
    }else {
        for(let i = 2; i <= Math.sqrt(num); i++){
            if(num % i === 0){
                return num + " khong phai la so nguyen to"
            }
        }
        return num + " la so nguyen to"
    }
}
let num = Number(prompt("Moi ban nhap vao mot so bat ki: "))
console.log(prime(num))