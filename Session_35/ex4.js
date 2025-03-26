


let employees = JSON.parse(localStorage.getItem("employees")) || [];
let form = document.getElementById("employeeForm");
let employeeList = document.getElementById("nhanvien-list");
let currentPage = 1;
let pageEmploy = 3;
function displayEmployees(pageNum) {
    employeeList.innerHTML = "";
    let startIndex = (pageNum - 1) * pageEmploy;
    let endIndex = startIndex + pageEmploy;
    let changePage = employees.slice(startIndex, endIndex);
    changePage.forEach((nhanvien, index) => {
        let row = document.createElement("tr")
        row.innerHTML = `
        <td>${startIndex + index + 1}</td>
        <td>${nhanvien.name}</td>
        <td>${nhanvien.job}</td>
        `;
        employeeList.appendChild(row);
    });
    currentPage = pageNum;
}
function saveNhanvien() {
    localStorage.setItem("employees", JSON.stringify(employees));
    displayEmployees(Math.ceil(employees.length / pageEmploy))
}
function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("job").value = "";
}
form.addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value
    let job = document.getElementById("job").value
    if (!name) {
        alert("Ten nhap khong hop le!")
        return;
    }
    if (!job) {
        alert("Chuc vu khong hop le!")
        return;
    }
    let newEmploy = {
        name: name,
        job: job
    };
    employees.push(newEmploy);
    alert("Them nhan vien thanh cong!")
    saveNhanvien();
    displayEmployees(currentPage);
    clearForm();
});
let changTab = document.getElementsByClassName("change-tab")[0]
let buttons = changTab.getElementsByTagName("button")
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        let buttonNext = buttons[i].textContent;
        if (buttonNext === "Previous" && currentPage > 1) {
            displayEmployees(currentPage - 1)
        } else if (buttonNext === "Next" && currentPage < Math.ceil(employees.length / pageEmploy)) {
            displayEmployees(currentPage + 1);
        } else if (!isNaN(buttonNext)) {
            displayEmployees(parseInt(buttonNext))
        }
    })
}
displayEmployees();