let arr = []
let choice;
let menu = `
1. Nhập mảng 2 chiều
2. Hiển thị mảng 2 chiều
3. Tính tổng các phần tử trong mảng
4. Tính tổng đường chéo chính
5. Tính tổng đường chéo phụ
6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột (Người dùng chọn hàng hoặc cột cần tính toán)
7. Thoát chương trình
`
while (choice !== 7) {
    choice = +prompt(`${menu} Lua chon cua ban la: `)
    switch (choice) {
        case 1:
            let rows = +prompt("Moi ban nhap so hang: ")
            let cols = +prompt("Moi ban nhap so cot: ")
            arr = [];
            for (let i = 0; i < rows; i++) {
                let row = []
                for (let j = 0; j < cols; j++) {
                    let num = +prompt(`Phan tu tai hang ${i + 1} cot ${j + 1} la: `)
                    row.push(num)
                }
                arr.push(row)
            }
            break;
        case 2:
            let play = "Mang 2 chieu ban vua nhap la: \n"
            for (let i = 0; i < arr.length; i++) {
                play = play + arr[i].join(" ") + "\n"
            }
            alert(`${play}`)
            break;
        case 3:
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    sum = sum + arr[i][j]
                }
            }
            alert(`Tong cac phan tu trong mang 2 chieu la: ${sum}`)
            break;
        case 4:
            if(arr.length !== arr[0].length){
                alert("Mang tren khong co duong cheo chinh!")
            }else{
                let duongCheo = 0;
                for(let i = 0; i < arr.length; i++){
                    duongCheo = duongCheo + arr[i][i]
                }
                alert(`Tong duong cheo chinh la: ${duongCheo}`)
            }
            break;
        case 5:
            if(arr.length !== arr[0].length){
                alert("Mang tren khong co duong cheo chinh!")
            }else{
                let duongCheophu = 0;
                for(let i = 0; i < arr.length; i++){
                    duongCheophu = duongCheophu + arr[i][arr.length - 1 - i]
                }
                alert(`Tong duong cheo phu la: ${duongCheophu}`)
            }
            break;
        case 6:
            let type = prompt("Hay chon tbc theo hang hoac cot (Nhap 'rows' neu chon hang va nhap 'cols' neu chon cot): ")
            if(type === 'rows'){
                let rowValue = +prompt("Nhap so hang ban muon tinh: ")
                rowValue--;// vi nguoi dung nhap vao se tinh tu 1 nhung trong mang thi tinh tu 0 nen phai giam gia tri sau khi ngdung nhap vao
                let rowSum = 0;
                for(let j = 0; j < arr[rowValue].length; j++){
                    rowSum = rowSum + arr[rowValue][j]
                }
                let tbcRow = rowSum / arr[rowValue].length
                alert(`Trung binh cong cua hang ${rowValue + 1} la: ${tbcRow}`)
            }else if(type === 'cols'){
                let colValue = +prompt("Nhap so cot ban muon tinh: ")
                colValue--;
                let colSum = 0;
                for(let i = 0; i < arr.length; i++){
                    colSum = colSum + arr[i][colValue]
                }
                let tbcCol = colSum / arr.length
                alert(`Trung binh cong cua cot ${colValue + 1} la: ${tbcCol}`)
            }
            break;
        case 7:
            alert("Thoat!!!")
            break;
        default:
            alert("Lua chon khong hop le!")
            break;x

    }
    

}