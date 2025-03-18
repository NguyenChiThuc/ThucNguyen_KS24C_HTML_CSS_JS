let products = [
    {
        id: 1,
        name: "men men",
        price: 20000,
        quantity: 20,
        category: "Mon an dan toc Mong",
    },
    {
        id: 2,
        name: "mut",
        price: 80000,
        quantity: 21,
        category: "Mon an dan toc Kinh",
    },
    {
        id: 3,
        name: "com lam",
        price: 40000,
        quantity: 15,
        category: "Mon an dan toc Mong",
    },
    {
        id: 4,
        name: "banh dau xanh",
        price: 60000,
        quantity: 30,
        category: "Mon an dan toc Kinh",
    },
];
let cart = [];
let menu = `
Welcome to my Restaurant
                             ==========MENU==========
1.Hiển thị các sản phẩm theo tên danh mục.
2.Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
    a.Sản phẩm không có trong cửa hàng hiển thị thông báo.
    b.Sản phẩm có trong cửa hàng
        i.Cho người dùng nhập số lượng sản phẩm muốn mua, mua thành công số lượng sản phẩm trong cửa hàng sẽ bị trừ đi.
        ii.Số lượng sản phẩm trong cửa hàng = 0 hoặc không đủ hiển thị thông báo.
3.Sắp xếp các sản phẩm trong cửa hàng theo giá:
    a.Tăng dần.
    b.Giảm dần.
4.Tính số tiền thanh toán trong giỏ hàng.
5.Thoát.
`
let choice;
while (choice !== 5) {
    choice = +prompt(menu + "Lua chon cua ban la: ")
    switch (choice) {
        case 1:
            let input = prompt("Moi ban nhap vao danh muc muon hien thi (1/2): ")
            if (input === "1") {
                for (let key in products) {
                    if (products[key].category === "Mon an dan toc Mong") {
                        console.log(products[key])
                    }
                }
            } else if (input === "2") {
                for (let key in products) {
                    if (products[key].category === "Mon an dan toc Kinh") {
                        console.log(products[key])
                    }
                }
            }
            break;
        case 2:
            let findId = +prompt("Moi ban nhap vao ID san pham: ")
            let findIndex = -1;
            for (let key in products) {
                if (products[key].id === findId) {
                    findIndex = key;
                    break;
                }
            }
            if (findIndex === -1) {
                console.log("San pham khong co trong cua hang!")
            } else {
                cart.push(products[findIndex].name)
                let quanPro = +prompt("Moi ban nhap so luong san pham ban muon mua: ")
                if (quanPro > 0 || quanPro <= products[findIndex].quantity) {
                    products[findIndex].quantity -= quanPro
                    cart.push({
                        name: products[findIndex].name,
                        price: products[findIndex].price,
                        quantity: quanPro,
                        category: products[findIndex].category,
                    });
                } else {
                    console.log("So luong khong hop le!!!!")
                }
            }
            break;
        case 3:
            let proChoice = prompt("Moi ban nhap T/G: ")
            if (proChoice === "T") {
                for (let i = 0; i < products.length - 1; i++) {
                    for (let j = 0; j < products.length; j++) {
                        if (products[i].price > products[j].price) {
                            let temp = products[i]
                            products[i] = products[j]
                            products[j] = temp;
                        }
                    }
                }
            } else if (proChoice === "G") {
                for (let i = 0; i < products.length - 1; i++) {
                    for (let j = 0; j < products.length; j++) {
                        if (products[i].price < products[j].price) {
                            let temp = products[i]
                            products[i] = products[j]
                            products[j] = temp;
                        }
                    }
                }
            }
            console.table(products)
            break;
        case 4:
            let total = 0;
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].price && cart[i].quantity) {
                    total += cart[i].price * cart[i].quantity
                }
            }
            if (total > 0) {
                console.log("Tong so tien can thanh toan la: ", total + "VND")
            } else {
                console.log("Gio hang rong!!!")
            }
            break;
        case 5:
            console.log("Thoat!!!")
            break;
        default:
            console.log("Lua chon nhap vao khong hop le!!!")
            break;
    }
}