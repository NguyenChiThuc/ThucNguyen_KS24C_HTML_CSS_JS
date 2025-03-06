let arr = [1, 9, 4, 4, 3, 2, 5, 2, 8, 7];
let number = +prompt("Nhap so: ");
let count = 0;
for (let index of arr) {
    if (index === number) {
        count++;
    }
}
if (count > 0) {
    alert(`Số ${number} xuất hiện ${count} lần trong mảng`);
} else {
    alert(`Số ${number} không tồn tại trong mảng`);
}