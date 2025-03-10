let arr = [];
let choice;
let menu = `
1. Nhập mảng số nguyên
2. Hiển thị mảng
3. Tìm các phần tử chẵn và lẻ
4. Tính trung bình cộng của mảng
5. Xóa phần tử tại vị trí chỉ định
6. Tìm phần tử lớn thứ hai trong mảng
7. Thoát chương trình
`
while (choice !== 7) {
    choice = +prompt(`${menu} Lua chon cua ban la: `)
    switch (choice) {
        case 1:
            let input = +prompt("Moi ban nhap so luong phan tu: ")
            for (let i = 0; i < input; i++) {
                let num = +prompt(`Phan tu thu ${i + 1}: `)
                arr.push(num)
            }
            break;
        case 2:
            for (let i = 0; i < arr.length; i++) {
                alert(`Cac phan tu ban vua nhap la: ${arr}`)
            }
            break;
        case 3:
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 === 0) {
                    alert(`Cac so chan o trong mang la: ${arr[i]}`)
                } else {
                    alert(`Cac so le o trong mang la : ${arr[i]}`)
                }
            }
            break;
        case 4:
            let tbc;
            let sum = 0;
            let count = 0;
            for (let value of arr) {
                sum = sum + value
                count++;
            }
            tbc = sum / count;
            alert(`Trung binh cong cua cac phan tu ban vua nhap la: ${tbc}`)
            break;
        case 5:
            let index = +prompt("Nhap vao vi tri ban muon xoa: ")
            if (index >= 0 && index <= arr.length) {
                arr.splice(index - 1, 1)
                alert(`Mang sau khi xoa phan tu la: ${arr}`)
            } else {
                alert("Vi tri nhap vao khong hop le!")
            }
            break;
        case 6:
            let max1 = arr[0]
            let max2 = arr[0]
            for(let i = 0; i < arr.length; i++){
                if(arr[i] > max1){
                    max2 = max1
                    max1 = arr[i]
                }else if(arr[i] > max2 && arr[i] < max1){
                    max2 = arr[i]
                }
            }   
            alert(`So lon thu hai o trong mang la: ${max2}`)
            break;
        case 7:
            alert("Thoat!!!")
            break;
        default:
            alert("Tam biet va hen gap lai!!!")
            break;
    }
}