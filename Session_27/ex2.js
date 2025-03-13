let arr = [];
let menu = `
    1. Nhập danh sách sinh viên
    2. Hiển thị danh sách sinh viên
    3. Tìm sinh vien theo tên
    4. Xóa sinh viên khỏi danh sách
    5. Thoát
    Lựa chọn của bạn : 
`;
let choice;

while(choice !== 5){
    choice = +prompt(menu);
    switch(choice){
        case 1:
            nhapDanhSach(arr);
            break;
        case 2:
            hienDanhSach(arr);
            break;
        case 3:
            timKiemSinhVien(arr) ;
            break;
        case 4:
            xoaSinhVien(arr);
            break;
        case 5:
            alert("Thoat!!!");
            break;
        default:
            alert("Vui long nhap lai!");
    }
}

function nhapDanhSach(arr){
    let num = +prompt("Nhap so luong sinh vien: ");
    for( let i = 0; i < num; i++){
        arr[i] = prompt(`Nhap ho va ten ${i + 1} : `);
    }
}
function hienDanhSach(arr){
    for(let i = 0; i < arr.length; i++){
        alert(`Sinh vien thu ${i + 1} : ${arr[i]}`);
    }
}
function timKiemSinhVien(arr){
    let findName = prompt("Nhap ten: ");
    let check = -1;
    for(let i = 0; i < arr.length; i++){
        if(arr[i].toLocaleUpperCase() === findName.toLocaleUpperCase()){
            check = 1;
            break;
        }
    }
    if(check !== -1){
        alert(`Sinh vien [${findName}] da duoc tim thay .`);
    }else{
        alert("Khong co ten sinh vien trong danhs sach.");
    }
}
function xoaSinhVien(arr){
    let deleteName = prompt("Nhap ten: ");
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLocaleUpperCase() === deleteName.toLocaleUpperCase()) {
            index = i; 
            break;
        }
    }
    if (index !== -1) {
        arr.splice(index, 1); 
        alert(`Sinh vien ${deleteName} da duoc xoa.`);
    } else {
        alert(`Khong co sinh vien ${deleteName} trong danh sach nay.`);
    }
}