const weatherData = {
    "Ha Noi": {
        city: "Ha Noi",
        temperature: 25,
        humidity: 70,
        windSpeed: 5,
        description: "Có mây",
        icon: "<i class= \"fa-solid fa-cloud\" ></i>"
    },
    "Ho Chi Minh": {
        city: "Ho Chi Minh",
        temperature: 32,
        humidity: 75,
        windSpeed: 7,
        description: "Nắng",
        icon: "<i class= \"fa-solid fa-sun\" ></i>"
    },
    "Da Nang": {
        city: "Da Nang",
        temperature: 28,
        humidity: 82,
        windSpeed: 12,
        description: "Mưa rào",
        icon: "<i class= \"fa-solid fa-cloud-showers-heavy\" ></i>"
    }
};
let citySelect = document.getElementById("weather")
let weatherButton = document.getElementById("button")
let ul = document.getElementById("list-weather")
function display(items) {
    ul.innerHTML = "";
    for (let i in items) {
        let li = 
    `<li>
        Thanh pho: ${items[i].city}<br>
        Nhiet do: ${items[i].temperature} C<br>
        Do am: ${items[i].humidity}%<br>
        Toc do gio: ${items[i].windSpeed} m/s<br>
        Mo ta: ${items[i].description}
        <span class="weather-icon">${items[i].icon}</span>
    </li>`
    ul.innerHTML += li;
    }
    document.getElementById("error-mes").innerHTML = "";
}
function showError(message) {
    document.getElementById("error-mes").innerHTML = message;
    ul.innerHTML = "";
}
weatherButton.addEventListener("click", function () {
    let selectedCity = citySelect.value;
    let filterItem;
    let weatherArr = [];
    for(let key in weatherData){
        weatherArr.push(weatherData[key])
    }
    if(selectedCity === "Ha Noi"){
        filterItem = weatherArr.filter(item => item.city === "Ha Noi")
    }else if(selectedCity === "Ho Chi Minh"){
        filterItem = weatherArr.filter(item => item.city === "Ho Chi Minh")
    }else if(selectedCity === "Da Nang"){
        filterItem = weatherArr.filter(item => item.city === "Da Nang")
    }else{
        filterItem = weatherArr;
    }
    if(selectedCity === ""){
        showError("Vui long chon ten mot thanh pho!")
    }else{
        display(filterItem);
    }
});