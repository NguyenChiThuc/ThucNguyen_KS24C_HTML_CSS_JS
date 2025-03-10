
let arr = [];
let choice;
let input;
let menu = `
1. Nhập mảng số nguyên
2. Hiển thị mảng
3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
4. Tính tổng và trung bình cộng của các số dương trong mảng
5. Đảo ngược mảng
6. Kiểm tra mảng có đối xứng không
7. Thoát chương trình
`
while (choice !== 7) {
    choice = +prompt(`${menu} Lua chon cua ban la: `)
    switch (choice) {
        case 1:
            input = +prompt("Moi ban nhap so luong phan tu: ")
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
            let max = arr[0];
            let index = 0;
            for (let i = 0; i < input; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                    index = i;
                }
            }
            alert(`Phan tu lon nhat trong mang la: ${max} va tai vi tri index thu: ${index}`);
            break;
        case 4:
            let tbc;
            let sum = 0;
            let count = 0;
            if (arr.length > 0) {
                for (let value of arr) {
                    if(value > 0){
                        sum = sum + value
                        count++;
                    }
                }
                alert(`Tong cua cac so nguyen duong la: ${sum}`)
                if(count > 0){
                    tbc = sum / count;
                    alert(`Trung binh cong cua cac phan tu ban vua nhap la: ${tbc}`)
                }else{
                    alert("Trong mang khong co so nguyen duong!!")
                }
            }else{
                alert("Mang rong!!!")
            }
            break;
        case 5:
            arr.reverse()
            alert(`${arr}`)
            break;
        case 6:
            let flag = true;
            let doiXung = [...arr].reverse()
            for(let i = 0 ; i < arr.length; i++){
                    if(arr[i] !== doiXung[i]){
                        flag = false;
                        break;
                    }
            }
            if(flag){
                alert("Mang doi xung")
            }else{
                alert("Mang khong doi xung")
            }
            break;
        case 7:
            alert("Thoat!!!")
            break;
        default:
            alert("Hen gap lai!!!")
            break;
    }
}