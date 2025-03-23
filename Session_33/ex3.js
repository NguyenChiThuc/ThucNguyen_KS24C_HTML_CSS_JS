let dish = [
    { name: 'Rau sạch', category: 'Đồ ăn' },
    { name: 'Thịt lợn', category: 'Đồ ăn' },
    { name: 'Pepsi không calo', category: 'Nước' },
    { name: 'Cocacola', category: 'Nước' },
    { name: 'Cờ lê', category: 'Dụng cụ' },
    { name: 'Tuy vít', category: 'Dụng cụ' },
];
let menu = document.getElementById("menu")
let button = document.getElementById("button")
let ul = document.getElementById("list-food")

function display(items) {
    ul.innerHTML = "";
    for (let i in items) {
        let li = `<li>Ten do an: ${items[i].name} - Danh muc: ${items[i].category}</li>`
        ul.innerHTML += li;
    }
}
button.addEventListener("click", function () {
    let selectedValue = menu.value;
    let filterItem;
    if (selectedValue === "food") {
        filterItem = dish.filter(item => item.category === "Đồ ăn")
    } else if (selectedValue === "water") {
        filterItem = dish.filter(item => item.category === "Nước")
    } else if (selectedValue === "things") {
        filterItem = dish.filter(item => item.category === "Dụng cụ");
    } else {
        filterItem = dish;
    }
    display(filterItem);
});