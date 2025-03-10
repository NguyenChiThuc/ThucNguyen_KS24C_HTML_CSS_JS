let arr = [];
let choice;
let menu = `
1. Nhập mảng
2. Hiển thị mảng
3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng
4. Tính tổng các phần tử trong mảng
5. Tìm số lần xuất hiện của một phần tử trong mảng
6. Sắp xếp mảng tăng dần
7. Thoát chương trình
 `
while (choice !== 7) {
    choice = +prompt(`${menu} Lua chon cua ban la: `)
    switch (choice) {
        case 1:
            let input = +prompt("Moi ban nhap so luong phan tu nhat dinh: ")
            for (let i = 0; i < input; i++) {
                let num = +prompt(`Phan tu thu ${i + 1}: `)
                arr.push(num)
            }
            break;
        case 2:
            for (let i = 0; i < arr.length; i++) {
                alert(`Cac phan tu ban vua nhap la: ${arr[i]}`)
            }
            break;
        case 3:
            if (arr.length === 0) {
                alert("Mang khong chua phan tu nao!")
            } else {
                let max = arr[0]
                let min = arr[0]
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] > max) {
                        max = arr[i]
                    } else if (arr[i] < min) {
                        min = arr[i]
                    }
                }
                alert(`So lon nhat trong mang la: ${max} va so nho nhat trong mang la: ${min}`)
            }
            break;
        case 4:
            let sum = 0;
            for (let value of arr) {
                sum = sum + value
            }
            alert(`Tong cac phan tu o trong mang la: ${sum}`)
            break;
        case 5:
            let number = +prompt("Moi ban nhap so phan tu muon tim: ")
            let count = 0;
            for (let value of arr) {
                if (value === number) {
                    count++
                }
            }
            if (count > 0) {
                alert(`So ${number} xuat hien ${count} lan trong mang`)
            } else {
                alert(`So ${number} khong xuat hien o trong mang!`)
            }
            break;
        case 6:
            for (let i = 0; i < arr.length - 1; i++) {
                for (let j = 0; j < arr.length - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                        let temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
            alert(`Cac phan tu duoc xep theo thu tu tang dan la: ${arr}`)
            break;
        case 7:
            alert("Thoat!!!")
            break;
        default:
            alert("Tam biet va hen gap lai!")
            break;
    }
}