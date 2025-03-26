let bookMark = JSON.parse(localStorage.getItem("bookMark")) || [];
function showBookMark() {
    let bookMarkList = document.getElementById("bookMarkList");
    bookMarkList.innerHTML = "";
    bookMark.forEach((book, index) => {
        let listItem = document.createElement("div")
        listItem.className = "bookMarkItem"
        listItem.innerHTML = `
        <span>
            <a href="${book.url}" target="_blank">${book.name}</a>
        </span>
        <button onclick="deleteBookmark(${index})">X</button>
        `;
        bookMarkList.appendChild(listItem);
    });
}
function openBookMark() {
    document.getElementById("addCard").style.display = "block";
}
function closeBookMark() {
    document.getElementById("addCard").style.display = "none";
    document.getElementById("name").value = "";
    document.getElementById("link").value = "";
}

function deleteBookmark(mark) {
    bookMark.splice(mark, 1);
    localStorage.setItem("bookMark", JSON.stringify(bookMark));
    showBookMark();
}
function saveBookMark(){
    let name = document.getElementById("name").value;
    let link = document.getElementById("link").value;
    
    if (name === "" || link === "") {
        alert("Vui long nhap dung dinh dang!")
        return;
    }

    let newBookMark = {
        name: name,
        url: link,
    }
    bookMark.push(newBookMark);
    localStorage.setItem("bookMark", JSON.stringify(bookMark))
    closeBookMark();
    showBookMark();
}
document.getElementById("saveBtn").addEventListener("click", function(event){
    event.preventDefault();
    saveBookMark();
})