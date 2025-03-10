let arr = []
let choice;
let menu = `
1. Nhập mảng 2 chiều
2. Hiển thị mảng 2 chiều
3. Tính tổng các phần tử trong mảng
4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó
5. Tính trung bình cộng các phần tử của một hàng cụ thể
6. Đảo ngược các hàng trong mảng
7. Thoát chương trình
`
while(choice !== 7){
    choice = +prompt(`${menu} Lua chon cua ban la: `)
    switch(choice){
        case 1:
            let rows = +prompt("Moi ban nhap so hang: ")
            let cols = +prompt("Moi ban nhap so cot: ")
            arr = [];
            for(let i = 0; i < rows; i++){
                let row = []
                for(let j = 0; j < cols; j++){
                    let num = +prompt(`Phan tu tai hang ${i + 1} cot ${j + 1} la: `)
                    row.push(num)
                }
                arr.push(row)
            }
            break;
        case 2:
            let play = "Mang 2 chieu ban vua nhap la: \n"
            for(let i = 0; i < arr.length; i++){
                play = play + arr[i].join(" ") + "\n"
            }
            alert(`${play}`)
            break;
        case 3:
            let sum = 0;
            for(let i = 0; i < arr.length; i++){
                for(let j = 0; j < arr[i].length; j++){
                    sum = sum + arr[i][j]
                }
            }
            alert(`Tong cac phan tu trong mang la: ${sum}`)
            break;
        case 4:
            let max = arr[0][0]
            let maxValue = [0, 0]
            for(let i = 0; i < arr.length; i++){
                for(let j = 0; j < arr[i].length; j++){
                    if(arr[i][j] > max){
                        max = arr[i][j]
                        maxValue = [i, j]
                    }
                }
            }
            alert(`Phan tu lon nhat trong mang 2 chieu la ${max} tai vi tri hang ${maxValue[0] + 1} va cot ${maxValue[1] + 1}`)
            break;
        case 5:
            if(arr.length === 0){
                alert("Mang tren dang rong!")
            }else{
                let index = +prompt("Nhap so hang ban muon tin tbc: ")
                if(index >= 0 && index < arr.length){
                    let point = 0
                    for(let j = 0; j < arr[index].length; j++){
                        point = point + arr[index][j]
                    }
                    let tbc = point / arr[index].length
                    alert(`Trung binh cong cua hang ${index + 1} la: ${tbc}`)
                }else{
                    alert("Hang tren khong hop le!")
                }
            }
            break;
        case 6:
            let daoNguoc = []
            for(let i = arr.length - 1; i >= 0; i--){
                daoNguoc.push([...arr[i]].reverse())
            }
            arr = daoNguoc
            let after = "Mang sau khi duoc dao nguoc la: \n"
            for(let i = 0; i < arr.length; i++){
                after = after + arr[i].join(" ") + "\n"
            }
            alert(`${after}`)
            break;
        case 7:
            alert("Thoat!!!")
            break;
        default:
            alert("Hen gap lai sau!")
            break;
    }
}