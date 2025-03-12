function emailValue (arr){
    if(!Array.isArray(arr)){
        return "Du lieu khong hop le!"
    }
    let valueEmail = arr.filter((email) => typeof email === "string" && email.includes("@") && !email.includes(" "))
    return valueEmail
}
console.log(emailValue(["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"]))