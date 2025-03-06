let num = prompt("Nhap day so bat ky: ");
let arr = num.split(" ");
let max = Number(arr[0]);
for (let i = 1; i < arr.length; i++) {
  let arrNow = Number(arr[i]);
  if (arrNow > max) {
    max = arrNow;
  }
}
alert("Gia trị : " + max);