// Website API: https://www.weatherapi.com/my/
// Author: Carl Mesias

function getWeather() {

    // Your API Key, Sign up and get your API key
    let apiKey = '00000000000000000000000000000';

    // Get city by ID name from index.html file
    let city = document.getElementById('search-value').value;
    
    let apiUrl = 'http://api.weatherapi.com/v1/current.json?key='
    apiUrl += apiKey
    apiUrl += ' &q='
    apiUrl += city
    apiUrl += '&aqi=no'

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

            document.querySelector(".temperature").innerHTML = Math.floor(data.current.temp_f) + "F";
            document.querySelector(".city").innerHTML = data.location.name;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}