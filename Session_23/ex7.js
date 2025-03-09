let num = parseInt(prompt("Moi ban nhap mot mang ky tu: "))
if (num === 0) {
    alert("Mang tren khong co ky tu so!")
} else if (num < 0) {
    alert("So luong phan tu nhap vao khong hop le!")
} else {
    let arr = []
    for (let i = 0; i < num; i++) {
        let n = prompt(`Nhap ky tu thu ${i + 1}: `)
        arr.push(n)
    }
    if (arr.length < 2) {
        alert("Mang tren khong du phan tu!")
    } else {
        let maxOne = -Infinity
        let maxTwo = -Infinity
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > maxOne) {
                maxTwo = maxOne
                maxOne = arr[i]
            } else if (arr[i] > maxTwo && arr[i] < maxOne) {
                maxTwo = arr[i]
            }
        }
        if (maxTwo === -Infinity) {
            alert(`Khong co so lon thu 2 o trong mang!`)
        } else {
            alert(`So lon thu hai o trong mang la ${maxTwo}`)
        }
    }
}