const key = "bf7745b7b419d4385c0cc567a56fc183"

function datascreen(data) {

console.log(data)
document.querySelector(".city").innerHTML ="tempo em " +  data.name
document.querySelector(".temperature").innerHTML =Math.floor (data.main.temp) + "°C"
document.querySelector(".text-forecast").innerHTML = data.weather[0].description
document.querySelector(".moisture").innerHTML = data.main.humidity + "%"
document.querySelector(".image-forecast"). scr= `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}



async function searchCity(city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    datascreen(data)
}


function clickButton() {
    const city = document.querySelector(".input-city").value
    searchCity(city)
}

