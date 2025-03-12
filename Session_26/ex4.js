function prime(arr) {
    for (let i = 2; i <= Math.sqrt(arr); i++) {
        if (arr % i === 0) {
            return false;
        }
    }
    return true;
}
function primeNumber(num) {
    if (!Array.isArray(num)) {
        return "Du lieu khong hop le";
    }
    if (num.length === 0) {
        return "Mang khong chua phan tu";
    }
    let isPrime = num.filter((arr) => {
        if (typeof arr !== "number" || !Number.isInteger(arr)) {
            return false;
        }
        return prime(arr);
    });
    return isPrime;
}
console.log(primeNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));