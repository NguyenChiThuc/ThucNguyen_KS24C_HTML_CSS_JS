let arr = [];
let evenSum = 0;
let oddSum = 0;
let length = +prompt("Nhap do dai mang: ");
if (isNaN(length) || !Number.isInteger(length)) {
    alert("Mang nhap vao khong hop le!");
} else {
    for (let i = 0; i < length; i++) {
        arr[i] = +prompt("Nhap so nguyen bat ky: ");
        if (isNaN(arr[i]) || !Number.isInteger(arr[i])) {
            alert("So nguyen khong hop le!");
        }
    }
    for (let index of arr) {
        if (index % 2 === 0) {
            evenSum = evenSum + index;
        } else {
            oddSum = oddSum + index;
        }
    }
    alert("Tong cac so chan la: " + evenSum);
    alert("Tong cac so le la: " + oddSum);
}
