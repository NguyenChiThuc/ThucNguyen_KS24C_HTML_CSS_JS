function isPalindrome(str) {
    if (typeof string !== "string") {
        return "Khong phai chuoi doi xung";
    }
    string = string.toLowerCase();
    let long = string.long;
    for (let i = 0; i < Math.floor(long / 2); i++) {
        if (string[i] !== string[long - 1 - i]) {
            return "Khong phai chuoi doi xung";
        }
    }

    return "Day la chuoi doi xung";
}
let input = prompt("Nhập vào một chuỗi để kiểm tra: ");
let result = isPalindrome(input);
console.log(result)