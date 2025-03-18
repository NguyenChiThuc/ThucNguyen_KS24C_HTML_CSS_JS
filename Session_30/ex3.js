let phone = [
    {
        id: 123456,
        name: "iphone 16prm",
        price: 35000000,
        quantity: 300,
        category: "Apple",
    },
    {
        id: 123654,
        name: "samsung galaxy s24",
        price: 25000000,
        quantity: 250,
        category: "Samsung",
    },
    {
        id: 12345,
        name: "iphone 13",
        price: 15000000,
        quantity: 100,
        category: "Apple",
    },
    {
        id: 23456,
        name: "samsung galaxy s25",
        price: 500000,
        quantity: 25,
        category: "Samsung",
    },
];
let cart = [];
let menu = `
==========MENU==========
1.Hiển thị danh sách điện thoại theo hãng (Ví dụ: Samsung, Apple, Xiaomi…)
2.Thêm điện thoại mới vào cửa hàng (Nhập thông tin: id, tên điện thoại, giá, số lượng, hãng)
3.Tìm kiếm điện thoại theo tên hoặc id
4.Mua điện thoại (Nhập id điện thoại cần mua và số lượng, cập nhật lại cửa hàng)
5.Thanh toán tất cả điện thoại trong giỏ hàng (Thông báo thanh toán thành công, và xóa toàn bộ giỏ hàng)
6.Sắp xếp điện thoại theo giá:
    a.Tăng dần
    b.Giảm dần
7.Hiển thị tổng số tiền của các điện thoại trong kho
8.Hiển thị tổng số lượng điện thoại theo từng hàng (VD: samsung - 5,iphone - 3,...)
9.Thoát chương trình
`
let choice;
while(choice !== 9){
    choice = +prompt(menu + "Lua chon cua ban la: ")
    switch(choice){
        case 1:
            let input = prompt("Apple (1) hay la Samsung (2): ")
            if(input === "1"){
                for(let key in phone){
                    if(phone[key].category === "Apple"){
                        console.table(phone[key])
                    }
                }
            }else if(input === "2"){
                for(let key in phone){
                    if(phone[key].category === "Samsung"){
                        console.table(phone[key])
                    }
                }
            }
            break;
        case 2:
            let id = +prompt("Nhap ma may: ")
            let name = prompt("Nhap ten may: ")
            let price = +prompt("Nhap gia may: ")
            let quantity = +prompt("Nhap so luong may: ")
            let newCategory = prompt("Nhap hang may: ")
            phone.push({
                id: id,
                name: name,
                price: price,
                quantity: quantity,
                category: newCategory
            });
            console.log("Them may thanh cong!!!")
            console.table(phone)
            break;
        case 3:
            let findPhone = prompt("ID (I) hay ten (N): ")
            if(findPhone === "I"){
                let searchId = +prompt("Nhap ID may ban muon tim: ")
                let findId = -1;
                for(let key in phone){
                    if(phone[key].id === searchId){
                        findId = key;
                        break;
                    }
                }
                if(findId === -1){
                    console.log("Khong tim thay may co ID tren")
                }else{
                    console.table(phone[findId])
                }
            }else if(findPhone === "N"){
                let searchName = prompt("Nhap ten hang may ban muon tim kiem: ")
                let findName = -1;
                for(let key in phone){
                    if(phone[key].name === searchName){
                        findName = key;
                        break;
                    }
                }
                if(findName === -1){
                    console.log("Khong tim thay may co ten tren!")
                }else{
                    console.table(phone[findName])
                }
            }
            break;
        case 4:
            let buyPhoneId = +prompt("Nhap ID may can mua: ")
            let buyIndex = -1;
            for (let key in phone) {
                if (phone[key].id === buyPhoneId) {
                    buyIndex = key;
                    break;
                }
            }
            if (buyIndex === -1) {
                console.log("Id ban vua nhap khong co may tuong ung!")
            } else {
                let buyQuan = +prompt("Moi nhap so luong may ban muon mua: ")
                if (buyQuan > 0 && buyQuan <= phone[buyIndex].quantity) {
                    phone[buyIndex].quantity -= buyQuan;
                    cart.push({
                        id: phone[buyIndex].id,
                        name: phone[buyIndex].name,
                        price: phone[buyIndex].price,
                        quantity: phone[buyIndex].quantity,
                        category: phone[buyIndex].category,
                    });
                    console.log("Da them may vao gio hang thanh cong!")
                } else {
                    console.log("So luong may trong kho khong du de mua.")
                }
            }
            break;
        case 5:
            
            break;
        case 9:
            console.log("Thoat!!!")
            break;
        default:
            console.log("Lua chon khong hop le!")
            break;
    }
}