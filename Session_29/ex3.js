const food = [
    {
        category: "Do an nhe",
        dish: [
            {
                name: "Kem ca",
                price: "25000",
                description: "kem ca mat lanh",
            },
            {
                name: "Banh trang",
                price: "15000",
                description: "banh trang dai",
            }
        ]
    },
    {
        category: "Mon an man",
        dish: [
            {
                name: "Ca chep om dua",
                price: "250000",
                description: "ca chep",
            },
            {
                name: "Ga dong tao",
                price: "160000",
                description: "ga gion rum",
            }
        ]
    }
];
let menu = `
==========MENU==========
1.Thêm món ăn vào danh mục.
2.Xóa món ăn theo tên khỏi danh mục.
3.Cập nhật thông tin theo tên của món ăn  (tên, giá, mô tả).
4.Hiển thị toàn bộ menu gồm từng danh mục và từng món ăn.
5.Tìm kiếm món ăn theo tên trong toàn bộ menu.
6.Thoát
`
let choice;
while (choice !== 6) {
    choice = +prompt(menu + "Lua chon cua ban la: ")
    switch (choice) {
        case 1:
            let categoryName = prompt("Moi nhap ten danh muc (VD: Do an nhe): ")
            let dishName = prompt("Moi ban nhap ten mon an: ")
            let dishPrice = prompt("Moi ban nhap gia mon: ")
            let dishDescrip = prompt("Moi ban nhap mo ta mon an: ")
            let newDish = {
                name: dishName,
                price: dishPrice,
                description: dishDescrip
            };
            let categoryFood = -1;
            categoryFood = food.findIndex(item => item.category === categoryName)
            if (categoryFood === -1) {
                console.log("Danh muc khong ton tai!")
            } else {
                food[categoryFood].dish.push(newDish)
                console.log("Mon an duoc them thanh cong!")
            }
            break;
        case 2:
            let deleteDishName = prompt("Moi nhap ten mon an ban muon xoa: ")
            let deleted = false;
            for (let i = 0; i < food.length; i++) {
                let dishIndex = -1;
                dishIndex = food[i].dish.findIndex(dishs => dishs.name === deleteDishName)
                if (dishIndex !== -1) {
                    food[i].dish.splice(dishIndex, 1)
                    if (food[i].dish.length === 0) {
                        food.splice(i, 1)
                    }
                    deleted = true;
                    console.log("Xoa mon an thanh cong!!!")
                    break;
                }
            }
            if (!deleted) {
                console.log("Khong tim thay mon an tren o danh muc!")
            }
            break;
        case 3:
            let updateDishName = prompt("Moi ban nhap ten mon an can cap nhat: ")
            let updateFood = false;
            for (let i = 0; i < food.length; i++) {
                let dishIndex = food[i].dish.findIndex(item => item.name === updateDishName)
                if (dishIndex !== -1) {
                    food[i].dish[dishIndex].name = prompt("NAME: ")
                    food[i].dish[dishIndex].price = prompt("PRICE: ")
                    food[i].dish[dishIndex].description = prompt("DESCRIPTION: ")
                    console.log("Cap nhat mon an thanh cong!!!")
                    updateFood = true;
                    break;
                }
            }
            if (!updateFood) {
                console.log("Khong tim thay mon an tren danh muc!!!")
            }
            break;
        case 4:
            updateMenuDish();
            break;
        case 5:
            let searchDish = prompt("Moi ban nhap ten mon an can tim: ")
            let found = false;
            for (let i in food) {
                for (let j in food[i].dish) {
                    if (food[i].dish[j].name === searchDish) {
                        console.log(food[i].dish[j])
                        found = true;
                    }
                }
            }
            if (!found) {
                console.log("Khong tim thay mon an trong danh muc!!!")
            }
            break;
        case 6:
            console.log("Thoat!!!")
            break;
        default:
            console.log("Lua chon khong hop le!")
            break;
    }
}
function updateMenuDish() {
    for (let i = 0; i < food.length; i++) {
        console.log(`Danh muc: ${food[i].category}`)
        for (let j = 0; j < food[i].dish.length; j++) {
            console.log(`STT: ${j + 1}`)
            console.log("NAME: ", food[i].dish[j].name)
            console.log("PRICE: ", food[i].dish[j].price)
            console.log("DESCRIPTION: ", food[i].dish[j].description)
            console.log("==============================")
        }
    }
} 