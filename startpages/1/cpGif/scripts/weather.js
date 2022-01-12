//const key = '69b36fc3c991f6d8440f7706595f52a4';
//const city_name = 'Arrecife';
//
//function getWeatherInfo() {
//	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${key}`)
//	.then(function (response) {
//		return response.json();
//	})
//	.then(function (data) {
//		celcius = Math.round(parseFloat(data.main.temp)-273.15);
//		fahrenheit = Math.round(((parseFloat(data.main.temp)-273.15)*1.8)+32);
//		description = data.weather[0].description;
//	})
//	.then(function () {
//		drawWeather();
//	})
//	.catch(function (error) {
//		if (key == '') {
//			document.getElementById('weatherInfo').innerHTML = 'remember to add your api key';
//		} else if (city_name == '') {
//			document.getElementById('weatherInfo').innerHTML = 'remember to add city name';
//		}
//		 else {
//			document.getElementById('weatherInfo').style.display = 'none';
//			document.getElementById('weatherInfo').innerHTML = `n/a`;
//			console.log(error);
//		}
//    });
//	setTimeout(getWeatherInfo, 1800000);
//}
//
//function drawWeather() {
//	document.getElementById('weatherInfo').innerHTML = `${description}, <span class="header__weather__temp">${celcius}\u00B0C</span>`;
//}
function weather(){
    console.log("weather() has been called");    
    const apikey = "69b36fc3c991f6d8440f7706595f52a4"
    const cityID = "Arrecife"   //Changed id= to q= to search by city name instead of cityId
    var call = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityID + '&appid=' + apikey + '&units=metric';
    fetch(call).then(res => res.json()).then(handler);
}
//weather();

function handler(res){
    
    console.log("starting...");
    const temperature = res.main.temp;
    console.log(temperature);
    const identifier = res.weather[0].id;
    console.log(identifier);
    
    
    console.log("using if...");
    
    if(identifier == 200 || identifier == 201 || identifier == 202){
        document.getElementById("Icon").src = "icons/cloud-rain-lightning.svg";
    }
    else if(identifier == 210 || identifier == 211 || identifier == 212 || identifier == 221){
        document.getElementById("Icon").src = "icons/cloud-lightning.svg";
    }
    else if(identifier == 210 || identifier == 211 || identifier == 212 || identifier == 221){
        document.getElementById("Icon").src = "icons/cloud-lightning.svg";
    }
    else if(identifier == 230 || identifier == 231 || identifier == 232){
        document.getElementById("Icon").src = "icons/cloud-drizzle-lightning.svg";
    }
    else if(identifier == 300 || identifier == 301 || identifier == 302 || identifier == 310 || identifier == 311 || identifier == 312 || identifier == 313 || identifier == 314 || identifier == 321){
        document.getElementById("Icon").src = "icons/cloud-drizzle-lightning.svg";
    }
    else if(identifier == 500 || identifier == 501 || identifier == 520 || identifier == 521){
        document.getElementById("Icon").src = "icons/cloud-rain.svg";
    }
    else if(identifier == 502 || identifier == 503 || identifier == 504 || identifier == 520 || identifier == 521|| identifier == 522|| identifier == 531){
        document.getElementById("Icon").src = "icons/cloud-rain-2.svg";
    }
    else if(identifier == 600 || identifier == 601|| identifier == 602|| identifier == 611 || identifier == 612 || identifier == 613|| identifier == 615|| identifier == 616|| identifier == 620|| identifier == 621|| identifier == 622){
        document.getElementById("Icon").src = "icons/cloud-snow.svg";
    }
    else if(identifier == 701 || identifier == 711 || identifier == 721 || identifier == 731 || identifier == 741 || identifier == 751 || identifier == 761 || identifier == 762){
        document.getElementById("Icon").src = "icons/fog.svg";
    }
    else if(identifier == 771){
        document.getElementById("Icon").src = "icons/wind.svg";
    }
    else if(identifier == 781){
        document.getElementById("Icon").src = "icons/tornado.svg";
    }
    else if(identifier == 800){
        document.getElementById("Icon").src = "icons/sun.svg";
    }
    else if(identifier == 801 || identifier == 802){
        document.getElementById("Icon").src = "icons/cloud.svg";
    }
    else if(identifier == 803 || identifier == 804){
        document.getElementById("Icon").src = "icons/clouds.svg";
    }
    else{
        document.getElementById("Icon").src = "icons/error.svg"
    }

    console.log("temp is...");

    document.getElementById("temperature").innerText = temperature + '°';
}
