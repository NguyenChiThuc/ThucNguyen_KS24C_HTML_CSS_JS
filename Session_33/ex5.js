const products = [
    {
        id: 1,
        name: "Laptop Dell XPS 15",
        price: 32990000,
        image: "https://laptophaianh.vn/image/catalog/2019-08-09-product-5-1.jpg",
        description: "Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB."
    },
    {
        id: 2,
        name: "iPhone 15 Pro Max",
        price: 32990000,
        image: "https://img.otofun.net/upload/v7/images/7512/7512549-33988ec0a67eb09ffc03074d3f5e6f98.jpeg",
        description: "Điện thoại flagship của Apple với camera 48MP và chip A17 Pro."
    },
    {
        id: 3,
        name: "Samsung Galaxy S24 Ultra",
        price: 28990000,
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/s/ss-s24-ultra-xam-222.png",
        description: "Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom."
    },
    {
        id: 4,
        name: "Tai nghe Sony WH-1000XM5",
        price: 7990000,
        image: "https://sony.scene7.com/is/image/sonyglobalsolutions/360-RA-category-icon-20221202?$S7Product$&fmt=png-alpha",
        description: "Tai nghe chống ồn tốt nhất với chất lượng pin dài và âm thanh 360."
    },
    {
        id: 5,
        name: "Apple Watch Series 9",
        price: 11990000,
        image: "https://cdn2.fptshop.com.vn/unsafe/256x0/filters:quality(100)/2023_10_9_638324605221231849_apple-watch-series-9-gps-cellular-41mm-hong-dd.jpg",
        description: "Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao."
    },
    {
        id: 6,
        name: "Loa JBL Charge 5",
        price: 3990000,
        image: "https://hoanghamobile.com/Uploads/2021/03/09/image-removebg-preview-6.png",
        description: "Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ."
    }
];
let productList = document.getElementById("list")
let searchInput = document.getElementById("search");
let buttonSerach = document.getElementById("searchButton")
function displayProduct(items) {
    productList.innerHTML = "";
    for (let i in items) {
        let value = items[i]
        let productCard = `
        <div class="col-md-4 product-card">
                <div class="card">
                    <img src="${value.image}" class="card-img" alt="${value.name}">
                    <div class="card-body">
                        <h5 class="card-title">${value.name}</h5>
                        <p class="card-text">${value.description}</p>
                        <p class="card-text text-danger fw-bold">${value.price.toLocaleString('vi-VN')} VNĐ</p>
                        <a href="#" class="btn btn-primary">Mua</a>
                    </div>
                </div>
            </div>
        `;
        productList.innerHTML += productCard
    }
}
displayProduct(products);
searchButton.addEventListener("click", function() {
    let searchItem = searchInput.value.toLowerCase();
    let filterProduct = products.filter(product => product.name.toLowerCase().includes(searchItem));
    displayProduct(filterProduct);
});