let sum = 0;
const number = prompt('mời bạn nhập các số Armstrong có 3 chữ số: ');
let Arms = number;
while (Arms > 0) {
    let num = Arms % 10;
    sum += num * num * num;
    Arms = parseInt(Arms / 10);
}
if (sum == number) {
    console.log(`${number} là số  Armstrong `);
}
else {
    console.log(`${number} không là  số  Armstrong.`);
}