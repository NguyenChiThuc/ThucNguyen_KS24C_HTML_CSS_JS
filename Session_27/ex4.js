let arr = [];
let menu = `
    1.Nhập danh sách số nguyên.
    2.Tính trung bình các số.
    3.Tìm số chẵn lớn nhất.
    4.Tìm số lẻ nhỏ nhất.
    5.Thoát.
`;
let choice;
while (choice !== 5) {
    choice = +prompt(menu)
    switch (choice) {
        case 1:
            danhSach(arr)
            break;
        case 2:
            primeNum (arr)
            break;
        case 3:
            maxEven (arr)
            break;
        case 4:
            minOdd (arr)
            break;
        case 5:
            alert("Thoat!!!")
            break;
        default:
            alert("Khong hop le!")
            break;
    }
}
function danhSach(arr) {
    let number = +prompt("So luong phan tu: ");
    for (let i = 0; i < number; i++) {
        arr[i] = +prompt(`So thu ${i + 1} : `);
    }
}
function primeNum (arr) {
    let sumPrime = 0;
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        sumPrime = sumPrime + arr[i];
    }
    total = (sumPrime / arr.length).toFixed(2);
    alert(`Trung binh cong: ${total}`);
}
function maxEven (arr) {
    let num = null;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            if (num === null || arr[i] > num) {
                num = arr[i];
            }
        }
    }
    if (num === null) {
        alert("Trong mang khong co so chan.");
    } else {
        alert(`So chan lon nhat: ${num}`);
    }
}
function minOdd (arr) {
    let num  = null;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            if (num === null || arr[i] < num) {
                num = arr[i];
            }
        }
    }
    if (num === null) {
        alert("Trong mang khong co so le.");
    } else {
        alert(`So le nho nhat: ${num}`);
    }
}