function kiemTraSo(arr){
    if(!Array.isArray(arr)){
        return "Du lieu khong hop le!"
    }
    if(arr.length <= 2){
        return true;
    }

    let long = arr[1] - arr[0]
    for(let i = 2; i < arr.length; i++){
        if(arr[i] - arr[i - 1] !== long){
            return false;
        }
    }
    return true;
}
console.log(kiemTraSo([2, 4, 6, 8]))
console.log(kiemTraSo([4, 8, 5, 1, 9, 2]))
console.log(kiemTraSo("ghj"))