let num = +prompt("Moi nhap mot so nguyen bat ky: ")
if (isNaN(num) || num <= 0 ||
    !Number.isInteger(num)) {
    console.log("Sai! Vui long nhap lai!");
} else {
    console.log(`Danh sach ${num} so nguyen to dau tien: `);
    let count = 0;
    let n = 2;
    while (count < num) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(n);
            count++;
        }
        n++;
    }
}