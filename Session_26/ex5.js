let arr = [];
for (let i = 0; i < 10; i++) {
    arr[i] = +prompt(`Phan tu ${i + 1}: `);
    if (isNaN(arr[i]) || !Number.isInteger(arr[i])) {
        console.log("Du lieu khong hop le!");
        i--;
    }
}
function maxNumber (arr) {
    if (!Array.isArray(arr)) {
        return "Du lieu khong hop le";
    }
    if (arr.length === 0) {
        return "Mang khong co du lieu";
    }
    const numberMax = arr.every(
        (num) => typeof num === "number" && Number.isInteger(num)
    );
    if (!numberMax) {
        return "Du lieu khong hop le";
    }
    const maxMax = Math.max(...arr);
    const long = arr.findIndex((num) => num === maxMax);
    return `maxMax = ${maxMax}\nlong: ${long}`;
}
console.log(maxNumber(arr));