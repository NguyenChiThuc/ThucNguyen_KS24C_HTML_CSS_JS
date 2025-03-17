// B1: Xây dựng cấu trúc dữ liệu
const library = [
    {
        id: 1,
        title: "Harry Potter",
        author: "J.K Rowling",
        year: 2000,
        price: 10,
        isAvailable: true,
    },
    {
        id: 2,
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        year: 2010,
        price: 20,
        isAvailable: false,
    },
    {
        id: 3,
        title: "Cạnh Tranh",
        author: "Thầy Hữu Giang",
        year: 2024,
        price: 5,
        isAvailable: true,
    },
];

// B2: Xây dựng menu tính năng
let menu = `
  ------------------ MENU ------------------
  1. Thêm sách mới.
  2. Hiển thị danh sách sách.
  3. Tìm kiếm sách theo tiêu đề.
  4. Cập nhật trạng thái mượn/trả sách theo id sách.
  5. Xóa sách theo id sách ra khỏi danh sách.
  6. Sắp xếp sách theo giá tăng dần.
  7. Thoát.
  Mời bạn nhập sự lựa chọn của bạn:
  `;

// B3: Hiển thị menu và cho người dùng nhập vào sự
// lựa chọn
let input;
while (input !== 7) {
    let input = +prompt(menu);

    // B4: Điều hướng chương trình dựa vào lựa chọn của
    // người dùng

    switch (input) {
        case 1:
            // Thêm mới sách
            let title = prompt("Nhap vao tieu de");
            let author = prompt("Nhap vao tac gia");
            let year = prompt("Nhap vao nam xuat ban");
            let price = prompt("Nhap vao gia sach");
            let isAvailable = prompt("Nhap vao trang thai sach");
            let book = {
                id: Math.random(),
                title,
                author,
                year,
                price,
                isAvailable,
            };
            library.push(book);
            displayBook();
            break;
        case 2:
            displayBook();
            break;
        case 3:
        // Tìm kiếm sách theo tiêu đề
        //B11: Cho nguoi dung nhap vao tieu de cau quyen sach
        //B12: linerSearch(tim kiem tuyen tinh)
        case 3:
            let searchTitle = prompt("Nhập vào tiêu đề sách bạn muốn tìm:");
            let foundBooks = library.filter((book) =>
                book.title.toLowerCase().includes(searchTitle.toLowerCase())
            );

            if (foundBooks.length > 0) {
                console.log("Các sách tìm thấy:");
                foundBooks.forEach((book) => {
                    console.log(`
        ID: ${book.id}
        Tiêu đề: ${book.title}
        Tác giả: ${book.author}
        Năm xuất bản: ${book.year}
        Giá: ${book.price}
        Trạng thái: ${book.isAvailable ? "Còn" : "Het"}
      `);
                });
            } else {
                console.log("Không tìm thấy sách nào với tiêu đề đó.");
            }
            break;

            break;
        case 4:
            let searchId = +prompt("Moi nhap id quyen sach can cap nhat:");
            let updateIndex = -1;
            for (let i in library) {
                if (searchId === library[i].id) {
                    updateIndex = i;
                    break;
                }
            }
            if (updateIndex === -1) {
                console.log("Khong tim thay");
            } else {

            }
            break;
        case 5:
            // Xoá sách theo id
            break;
        case 6:
            // Sắp xếp sách theo giá tăng dần
            break;
        case 7:
            // Thoát
            break;
        default:
            break;
    }
}

function displayBook() {
    library.forEach(function (book, index) {
        console.log(`Quyen sach ${index + 1}:`);
        console.log("Id sach:", book.id);
        console.log("Tieu de:", book.title);
        console.log("Tac gia:", book.author);
        console.log("Nam xuat ban:", book.year);
        console.log("Trang thai:", book.isAvailable);
        console.log("Gia tien:", book.price);
        console.log("-----------------------");
    });
}