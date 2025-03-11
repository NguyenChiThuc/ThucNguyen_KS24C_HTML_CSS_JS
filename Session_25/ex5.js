function count(arr,num) {
    if (num === 0) {
        alert("Mảng không chứa phần tử");
    } else if (isNaN(num)) {
        alert("Giá trị không hợp lệ");
    } else {
        for (let i = 0; i < num; i++) {
            arr[i] = +prompt(`Nhap phan tu thu ${i + 1}: `);
        }
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                count++; 
            }
        }
    }
    return count; 
}
let arr = [];
let count = 0; 
let num = +prompt("Nhập số phần tử của mảng");
let ketQua = count(arr,num);
console.log("Số lượng số nguyên dương trong mảng: " + ketQua)