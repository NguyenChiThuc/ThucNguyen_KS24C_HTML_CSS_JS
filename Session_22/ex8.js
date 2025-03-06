let arr = [1, 9, 4, 4, 3, 8, 5, 2, 8, 8];
let max = 0;
let result = Infinity;
let count = 1;
let num = arr[0];
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
for (let i = 1; i < arr.length; i++) {
    if (arr[i] === num) {
        count++;
    } else {
        if (num > max) {
            max = num;
            result = num;
        } else if (count === max && num < result) {
            result = num;
        }
        num = arr[i];
        count = 1;
    }
}
if (count > max) {
    max = count;
    result = num;
} else if (count === max && num < result) {
    result = num;
}
console.log("Phan tu duoc xuat hien nhieu nhat la: " + result);