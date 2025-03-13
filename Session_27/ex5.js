function chiaArr (thamSo, kichThuoc){
    if(!Array.isArray(thamSo)){
        return "Du lieu khong hop le!"
    }
    if(!Number.isInteger(kichThuoc) || kichThuoc <= 0){
        return "Du lieu khong hop le!"
    }

    let result = [];
    for(let i = 0; i < thamSo.length; i += kichThuoc){
        let smallArr = thamSo.slice(i, i + kichThuoc)
        result.push(smallArr)
    }
    return result;
}
console.log(chiaArr([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
console.log(chiaArr([2, 3, 4, 5, 6, 7, 8, 9], 2))
console.log(chiaArr("def", 3))