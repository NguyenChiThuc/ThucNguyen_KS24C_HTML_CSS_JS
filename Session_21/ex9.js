let BTS = +prompt("Mời bạn nhập số lượng số nguyên tố cần được hiển thị: ");
let result = "";
if (isNaN(BTS) || BTS <= 0) {
    document.write("số của bạn hiện đang không hợp lệ");
} else {
    let count = 0;
    let number = 2;
    while (count < BTS) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            result += number + " ";
            count++;
        }
        number++;
    }
    document.write(result);
}