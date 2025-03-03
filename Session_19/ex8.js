let month = +prompt("Moi ban nhap vao mot thang: ")
switch (month) {
    case 1:
    case 2:
    case 3:
        alert(`tháng  ${month} này là mùa xuân `);
        break;
    case 5:
    case 4:
    case 6:
        alert(`tháng  ${month} này là mùa hè `);
        break;
    case 7:
    case 8:
    case 9:
        alert(`tháng ${month}  này là mùa thu`);
        break;
    case 10:
    case 11:
    case 12:
        alert(`tháng ${month}  này là mùa đông`);
        break;
    default:
        alert(`tháng này không hợp lệ `);
        break;
}