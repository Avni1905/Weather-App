let API_KEY='615fd40f0bae7c3cc9f44f5f3f4b341a'
let form=document.querySelector("form")
let search = document.querySelector("#search")
let weather = document.querySelector("#weather")
//const API='https://api.openweathermap.org/data/2.5/weather?q=${city name}&appid=${API key}&units=metric'

let getWeather = async(city) => {
    weather.innerHTML = `<h2> Loading... <h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    let response = await fetch(url);
    let data = await response.json()
    return showWeather(data)
}

let showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
    weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
            <h2>${data.main.temp} ℃</h2>
            <h4> ${data.weather[0].main} </h4>
        </div>
    `
}


form.addEventListener(
    "submit",
    function(event) {
        getWeather(search.value)
        event.preventDefault();
    }
)