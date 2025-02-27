let date1 = prompt("Nhap ngay sinh ( YYYY-MM-DD ): ")
let date2 = prompt("Nhap ngay sinh ( YYYY-MM-DD ): ")
let d1 = new Date (date1)
let d2 = new Date (date2)
let Milis = d2 - d1
let days = Milis / (1000 * 60 * 60 * 24)
document.write(days)