const contact = [
    {
        id: 1,
        name: "Nguyen Chi Thuc",
        email: "chithuc0605@gmail.com",
        phone: "0123456789",
    },
    {
        id: 2,
        name: "Thuc Nguyen Chi",
        email: "thucnguyen@gmail.com",
        phone: "0987654321",
    },
    {
        id: 3,
        name: "Thuc Chi Nguyen",
        email: "tcn@gmail.com",
        phone: "01234567892",
    }
];
let menu = `
==========MENU==========
1.Thêm đối tượng Contact vào danh sách liên hệ.
2.Hiển thị danh sách danh bạ.
3.Tìm kiếm thông tin Contact theo số điện thoại.
4.Cập nhật thông tin Contact(name, email, phone) theo id.
5.Xóa một đối tượng Contact khỏi danh sách danh bạ theo id.
6.Thoát.
`;
let choice;
while (choice !== 6) {
    choice = +prompt(menu + "Lua chon cua ban la: ")
    switch (choice) {
        case 1:
            let inputName = prompt("Moi nhap ten lien he moi: ")
            let inputEmail = prompt("Moi nhap dia chi email moi: ")
            let inputPhone = prompt("Moi nhap so lien he moi: ")
            let newContact = {
                id: Math.ceil(Math.random() * 10),
                name: inputName,
                email: inputEmail,
                phone: inputPhone
            }
            contact.push(newContact);
            break;
        case 2:
            openList();
            break;
        case 3:
            let findContactPhone = prompt("Moi ban nhap SDT can tim kiem: ")
            let findIndex = -1;
            for (let key in contact) {
                if (contact[key].phone === findContactPhone) {
                    findIndex = key;
                    break;
                }
            }
            if (findIndex === -1) {
                console.log("Khong tim thay contact bang SDT tren.")
            } else {
                findContact(findIndex);
            }
            break;
        case 4:
            let findContactId = +prompt("Moi nhap id de cap nhat cac thong tin lien quan: ")
            let checkId = -1;
            for (let i = 0; i < contact.length; i++) {
                if (findContactId === contact[i].id) {
                    checkId = i;
                    break;
                }
            }
            if (checkId === -1) {
                console.log("Khong tim thay contact lien he!")
            } else {
                checkContact(checkId);
            }
            break;
        case 5:
            let deleteContactId = +prompt("Moi ban nhap ID lien he ban muon xoa: ")
            let deleteId = -1;
            for(let index in contact){
                if(contact[index].id === deleteContactId){
                    deleteId = index;
                    break;
                }
            }
            if(deleteId === -1){
                console.log("Khong tim thay lien he nao theo ID tren!")
            }else{
                contact.splice(deleteId, 1);
                console.log("Xoa contact thanh cong!!!")
            }
            break;
        case 6:
            console.log("Thoat!!!")
            break;
        default:
            console.log("Lua chon khong hop le!!!")
            break;
    }
}
function openList() {
    for (let value in contact) {
        console.log(`STT: ${+value + 1}`)
        console.log("ID: ", contact[value].id)
        console.log("NAME: ", contact[value].name)
        console.log("EMAIL: ", contact[value].email)
        console.log("PHONE: ", contact[value].phone)
        console.log("===========================")
    }
}
function findContact(findIndex) {
    console.log(`STT: ${+findIndex + 1}`)
    console.log("ID: ", contact[findIndex].id)
    console.log("NAME: ", contact[findIndex].name)
    console.log("EMAIL: ", contact[findIndex].email)
    console.log("PHONE: ", contact[findIndex].phone)
    console.log("===========================")
}
function checkContact(checkId) {
    console.log(`STT: ${+checkId + 1}`)
    console.log("ID: ", contact[checkId].id)
    console.log("NAME: ", contact[checkId].name)
    console.log("EMAIL: ", contact[checkId].email)
    console.log("PHONE: ", contact[checkId].phone)
    console.log("===========================")
}