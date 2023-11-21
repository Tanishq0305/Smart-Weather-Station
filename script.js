const temperatureField = 'field1';
const humidityField = 'field2';
const aqiField = 'field3';
const channelID = '2332081';
const apiKey = 'DHSRPMUJSFPZUQC5';

const temperatureElement = document.getElementById('temperature');
const humidityElement = document.getElementById('humidity');
const aqiElement = document.getElementById('aqi');

function fetchData() {
    fetch(`https://api.thingspeak.com/channels/${channelID}/fields/${temperatureField}.json?api_key=${apiKey}&results=1`)
        .then((response) => response.json())
        .then((data) => {
            temperatureElement.textContent = data.feeds[0].field1;
        });

    fetch(`https://api.thingspeak.com/channels/${channelID}/fields/${humidityField}.json?api_key=${apiKey}&results=1`)
        .then((response) => response.json())
        .then((data) => {
            humidityElement.textContent = data.feeds[0].field2;
        });

    fetch(`https://api.thingspeak.com/channels/${channelID}/fields/${aqiField}.json?api_key=${apiKey}&results=1`)
        .then((response) => response.json())
        .then((data) => {
            aqiElement.textContent = data.feeds[0].field3;
        });
}

fetchData();
setInterval(fetchData, 300000); // Update every 5 minutes
