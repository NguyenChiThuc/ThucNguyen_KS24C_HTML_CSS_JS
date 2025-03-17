const product = [
    {
        id: 1221,
        name: "Keo Mut",
        price: "13000",
        category: "Keo deo",
        quantity: 20,
    },
    {
        id: 5687,
        name: "Banh gau ",
        price: "20000",
        category: "Banh sua chua",
        quantity: 50,
    },
    {
        id: 9887,
        name: "Bim bim ",
        price: "10000",
        category: "Snack",
        quantity: 15,
    }
];
let menu = `
==========MENU==========
1.Thêm sản phẩm vào danh sách sản phẩm.
2.Hiển thị tất cả sản phẩm.
3.Hiển thị chi tiết sản phẩm theo id.
4.Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.
5.Xóa sản phẩm theo id.
6.Lọc sản phẩm theo khoảng giá.
7.Thoát.
`;
let choice;
while (choice !== 7) {
    choice = +prompt(menu + "Lua chon cua ban la: ")
    switch (choice) {
        case 1:
            let productName = prompt("Moi nhap ten san pham: ")
            let productPrice = prompt("Moi nhap gia san pham: ")
            let productCate = prompt("Moi nhap the loai san pham: ")
            let productQuan = prompt("Moi nhap so luong san pham: ")
            let newProduct = {
                id: Math.ceil(Math.random() * 10),
                name: productName,
                price: productPrice,
                category: productCate,
                quantity: productQuan
            }
            product.push(newProduct)
            break;
        case 2:
            inputProduct();
            break;
        case 3:
            let findProductId = +prompt("Moi nhap id de cap nhat cac thong tin lien quan den san pham: ")
            let checkId = -1;
            for (let i = 0; i < product.length; i++) {
                if (findProductId === product[i].id) {
                    checkId = i;
                    break;
                }
            }
            if (checkId === -1) {
                console.log("Khong tim thay contact lien he!")
            } else {
                checkProductId(checkId);
            }
            break;
        case 4:
            let changePro = +prompt("Moi nhap id de cap nhat cac thong tin lien quan den san pham: ")
            let changeId = product.findIndex((item) => item.id === changePro)
            if (changeId === -1) {
                console.log("Khong tim thay san pham lien quan!")
            } else {
                product[changeId].name = prompt("NAME: ")
                product[changeId].price = prompt("PRICE: ")
                product[changeId].category = prompt("CATEGORY: ")
                product[changeId].quantity = prompt("QUANTITY: ")
                console.log("Cap nhat san pham thanh cong!!!")
            }
            break;
        case 5:
            let deleteProductId = +prompt("Moi ban nhap ID san pham ban muon xoa: ")
            let deleteId = -1;
            for (let value in product) {
                if (product[value].id === deleteProductId) {
                    deleteId = value;
                    break;
                }
            }
            if (deleteId === -1) {
                console.log("Khong tim thay lien he nao theo ID tren!")
            } else {
                product.splice(deleteId, 1);
                console.log("Xoa contact thanh cong!!!")
            }
            break;
        case 6:
            let minPrice = prompt("Moi ban nhap khoang gia thap nhat: ")
            let maxPrice = prompt("Moi ban nhap khoang gia cao nhat: ")
            let lengthPrice = [];
            for (let index in product) {
                if (product[index].price >= minPrice && product[index].price <= maxPrice) {
                    lengthPrice.push(product[index])
                }
            }
            if (lengthPrice.length === 0) {
                console.log("Khong co san pham nao trong khoang gia nay!!!")
            } else {
                for (let key in lengthPrice) {
                    console.log(`STT: ${+key + 1}`)
                    console.log("ID: ", lengthPrice[key].id)
                    console.log("NAME: ", lengthPrice[key].name)
                    console.log("PRICE: ", lengthPrice[key].price)
                    console.log("CATEGORY: ", lengthPrice[key].category)
                    console.log("QUANTITY: ", lengthPrice[key].quantity)
                    console.log("==============================")
                }
            }
            break;
        case 7:
            console.log("Thoat!!!")
            break;
        default:
            console.log("Lua chon nhap vao khong hop le!")
            break;
    }
}
function inputProduct() {
    for (let pro in product) {
        console.log(`STT: ${+pro + 1}`)
        console.log("ID: ", product[pro].id)
        console.log("NAME: ", product[pro].name)
        console.log("PRICE: ", product[pro].price)
        console.log("CATEGORY: ", product[pro].category)
        console.log("QUANTITY: ", product[pro].quantity)
        console.log("=============================")
    }
}
function checkProductId(checkId) {
    console.log(`STT: ${+checkId + 1}`)
    console.log("ID: ", product[checkId].id)
    console.log("NAME: ", product[checkId].name)
    console.log("PRICE: ", product[checkId].price)
    console.log("CATEGORY: ", product[checkId].category)
    console.log("QUANTITY: ", product[checkId].quantity)
    console.log("==============================")
}