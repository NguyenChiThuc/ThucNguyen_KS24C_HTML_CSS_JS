document.getElementById("email-btn").addEventListener("click", function() {
    let emailInput = document.getElementById("email-input").value
    let resultInput = document.getElementById("result-text")
    if(emailInput.includes("@") && (emailInput.endsWith(".com") || emailInput.endsWith(".vn"))){
        resultInput.textContent = "Email hop le!"
        resultInput.style.color = "green"
    } else {
        resultInput.textContent = "Email khong hop le!"
        resultInput.style.color = "red"
    }
});