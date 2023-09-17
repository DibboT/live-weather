const apiKey = "a63f8a2703b6263d1221f851f7d4490a";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");

        async function checkWeather(city){
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            var data = await response.json();

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";



        }   

        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchBox.value);

        } )
