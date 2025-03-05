let a = +prompt("Moi ban nhap vao tham so a: ")
let b = +prompt("Moi ban nhap vao tham so b: ")
let c = +prompt("Moi ban nhap vao tham so c: ")
if (a === 0) {
    if (b === 0) {
        if (c === 0) {
            alert("Phuong trinh vo so nghiem")
        } else {
            alert("Phuong trinh vo nghiem")
        }
    } else {
        let result = -c / b
        alert(`Phuong trinh co 1 nghiem la: ${result}`)
    }
} else {
    let delta = (b * b) - 4 * a * c
    if (delta < 0) {
        alert("Phuong trinh vo nghiem")
    } else if (delta === 0) {
        let x = -b / 2 * a
        alert(`Phuong trinh co nghiem kep x1,x2 la: ${x}`)
    } else if (delta > 0) {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a) 
        let x2 = (-b - Math.sqrt(delta)) / (2 * a)
        alert(`Phuong trinh co 2 nghiem phan biet la:x1=${x1}; x2=${x2}`)
    }
}