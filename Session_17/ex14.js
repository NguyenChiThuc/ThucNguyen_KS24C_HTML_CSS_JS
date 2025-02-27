let r = +prompt("Nhập bán kính :");
let h = +prompt("Nhập chiều cao :");
let pi = Math.PI;

let SXQ = 2 * pi * r * h;
alert("Diện tích xung quanh hình trụ là: " + SXQ.toFixed(2));
let STP = 2 * pi * r * (r + h);
alert("Diện tích toàn phần hình trụ là: " + STP.toFixed(2));
let V = pi * (r ** 2) * h;
alert("Thể tích hình trụ là: " + V.toFixed(2));
let CV = 2 * pi * r;
alert("Chu vi đáy hình trụ là: " + CV.toFixed(2))