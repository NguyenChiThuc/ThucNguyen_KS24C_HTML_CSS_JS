const books = [
    {
        id: 1886,
        name: "Conan",
        price: 15000,
        quantity: 20,
        category: "truyen dai tap",
    },
    {
        id: 4876,
        name: "Doraemon",
        price: 50000,
        quantity: 55,
        category: "truyen don",
    },
    {
        id: 3845,
        name: "Harry Potter",
        price: 80000,
        quantity: 15,
        category: "truyen dai tap",
    },
]
let cart = [];
let menu = `
==========MENU==========
1.Hiển thị danh sách sách theo thể loại (Người dùng chọn thể loại để xem sách trong danh mục đó).
2.Thêm sách mới vào kho
3.Tìm kiếm sách theo tên hoặc id.
4.Mua sách (Nhập id sách cần mua và số lượng, cập nhật lại kho).
5.Sắp xếp sách theo giá:
    a.Tăng dần.
    b.Giảm dần.
6.Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng
7.Hiển thị tổng số lượng sách trong kho.
8.Thoát chương trình.
`
let choice;
while (choice !== 8) {
    choice = +prompt(menu + "Lua chon cua ban la: ")
    switch (choice) {
        case 1:
            let input = prompt("Moi ban nhap the loai sach can xem (1/2): ")
            if (input === "1") {
                for (let key in books) {
                    if (books[key].category === "truyen dai tap") {
                        console.table(books[key])
                    }
                }
            } else if (input === "2") {
                for (let key in books) {
                    if (books[key].category === "truyen don") {
                        console.table(books[key])
                    }
                }
            }
            break;
        case 2:
            let id = +prompt("Nhap ma sach: ")
            let name = prompt("Nhap ten sach: ")
            let price = +prompt("Nhap gia sach: ")
            let quantity = +prompt("Nhap so luong sach: ")
            let newCategory = prompt("Nhap the loai sach: ")
            books.push({
                id: id,
                name: name,
                price: price,
                quantity: quantity,
                category: newCategory,
            })
            console.log("Them sach thanh cong!")
            console.table(books)
            break;
        case 3:
            let searchBook = prompt("Ban muon tim theo ID (i) hay ten (n): ")
            if (searchBook === "i") {
                let searchId = +prompt("Nhap ID sach ban muon tim: ")
                let foundId = -1;
                for (let key in books) {
                    if (books[key].id === searchId) {
                        foundId = key;
                        break;
                    }
                }
                if (foundId === -1) {
                    console.log("Khong tim thay sach co ID tren")
                } else {
                    console.table(books[foundId])
                }
            } else if (searchBook === "n") {
                let searchName = prompt("Moi ban nhap ten sach muon tim: ")
                let foundName = -1;
                for (let key in books) {
                    if (books[key].name === searchName) {
                        foundName = key;
                        break;
                    }
                }
                if (foundName === -1) {
                    console.log("Khong tim thay sach co ten tren!")
                } else {
                    console.table(books[foundName])
                }
            }
            break;
        case 4:
            let buyBookId = +prompt("Nhap ID sach can mua: ")
            let buyIndex = -1;
            for (let key in books) {
                if (books[key].id === buyBookId) {
                    buyIndex = key;
                    break;
                }
            }
            if (buyIndex === -1) {
                console.log("Id ban vua nhap khong co sach tuong ung!")
            } else {
                let buyQuan = +prompt("Moi nhap so luong sach ban muon mua: ")
                if (buyQuan > 0 && buyQuan <= books[buyIndex].quantity) {
                    books[buyIndex].quantity -= buyQuan;
                    cart.push({
                        id: books[buyIndex].id,
                        name: books[buyIndex].name,
                        price: books[buyIndex].price,
                        quantity: books[buyIndex].quantity,
                        category: books[buyIndex].category,
                    });
                    console.log("Da them sach vao gio hang thanh cong!")
                } else {
                    console.log("So luong sach trong kho khong du de mua.")
                }
            }
            break;
        case 5:
            let sortChoice = prompt("Tang dan (T) hay nho dan (N): ")
            if (sortChoice === "T") {
                for (let i = 0; i < books.length - 1; i++) {
                    for (let j = 0; j < books.length; j++) {
                        if (books[i].price > books[j].price) {
                            let temp = books[i];
                            books[i] = books[j];
                            books[j] = temp;
                        }
                    }
                }
            } else if (sortChoice === "N") {
                for (let i = 0; i < books.length - 1; i++) {
                    for (let j = 0; j < books.length; j++) {
                        if (books[i].price < books[j].price) {
                            let temp = books[i];
                            books[i] = books[j];
                            books[j] = temp;
                        }
                    }
                }
            }
            console.table(books);
            break;
        case 6:
            let totalBook = 0;
            let total = 0;
            for (let key in cart) {
                if (cart[key].price && cart[key].quantity) {
                    totalBook += cart[key].quantity
                    total += cart[key].price * cart[key].quantity
                }
            }
            if (total > 0) {
                console.log("Tong so luong sach da mua la: ", totalBook)
                console.log("Tong so tien sach da mua la: ", total + "VND")
            } else {
                console.log("Gio hang rong!!!")
            }
            break;
        case 7:
            let sum = 0;
            for (let key in books) {
                sum = sum + books[key].quantity
            }
            console.log("Tong so luong sach trong kho la: ", sum)
            break;
        case 8:
            console.log("Thoat!!!")
            break;
        default:
            console.log("Lua chon nhap khong hop le!!")
            break;
    }
}