// Website API: https://www.weatherapi.com/my/

function getWeather() {

    // Your API Key, Sign up and get your API key
    let apiKey = '0000000000000000000000';

    // Get city by ID name from index.html file
    let city = document.getElementById('city-search').value;
    
    let apiUrl = 'http://api.weatherapi.com/v1/current.json?key='
    apiUrl += apiKey;
    apiUrl += ' &q=';
    apiUrl += city;
    apiUrl += '&aqi=no';

    console.log(apiUrl);

    // Make a GET request
    fetch(apiUrl)
        .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
            return response.json();
        })
        .then(data => {
            console.log(data);

            document.querySelector(".temp").innerHTML = data.current.temp_f + "F";
            document.querySelector(".city").innerHTML = data.location.name;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function getWeatherFromLosAngelos() {

    let apiUrl = 'http://api.weatherapi.com/v1/current.json?key=291bee6211ff41fd948193904241607 &q=';
    apiUrl += 'Los Angeles';
    apiUrl += '&aqi=no';

    console.log(apiUrl);

    // Make a GET request
    fetch(apiUrl)
        .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
            return response.json();
        })
        .then(data => {
            console.log(data);

            document.querySelector(".temperature").innerHTML = data.current.temp_f + "F";
            document.querySelector(".city").innerHTML = data.location.name;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Call this to get weather from Los Angeles upon opening weather app
getWeatherFromLosAngelos();