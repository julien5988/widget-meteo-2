const options = {
    method: 'GET',
    headers: { accept: 'application/json' }
};

let cityName = 'Paris'; // Ville par défaut

// Fonction pour mettre à jour les données météo
function updateWeather() {
    fetch(`https://api.tomorrow.io/v4/weather/realtime?location=${cityName}&apikey=CqG3KRTU0z6LlN7su3zXtviZ2dVkzRNC`, options)
        .then(response => response.json())
        .then(data => {
            const cloudCover = data.data.values.cloudCover;
            const dewPoint = data.data.values.dewPoint;
            const temperature = data.data.values.temperature;
            const humidity = data.data.values.humidity;
            const temperatureApparent = data.data.values.temperatureApparent;
            const windDirection = data.data.values.windDirection;
            const city = data.location.name.split(',')[0].trim();
            const weatherCode = data.data.values.weatherCode;

            // Mettre à jour les éléments HTML avec les données
            document.getElementById('cloudCover').textContent = cloudCover;
            document.getElementById('dewPoint').textContent = dewPoint;

            // Mettre à jour la classe CSS de la température en fonction de la valeur
            const temperatureElement = document.getElementById('temperature');
            temperatureElement.textContent = `${temperature}°C`;
            updateTemperatureColor(temperatureElement, temperature);

            document.getElementById('humidity').textContent = `${humidity}%`;
            document.getElementById('temperatureApparent').textContent = `${temperatureApparent}°C`;
            document.getElementById('windDirection').textContent = windDirection;
            document.getElementById('city').textContent = city;

            // Appeler la fonction pour gérer les icônes avec le nouveau code météo
            handleWeatherIcons(weatherCode);
        })
        .catch(err => console.error(err));
}

// Fonction pour mettre à jour la couleur de la température en fonction de la valeur
function updateTemperatureColor(element, temperature) {
    if (temperature < 10) {
        element.style.color = 'blue';
    } else if (temperature > 25) {
        element.style.color = 'orange';
    } else if (temperature > 30) {
        element.style.color = 'red';
    } else {
        // Réinitialiser la couleur par défaut
        element.style.color = 'black';
    }
}

// Fonction pour gérer les icônes en fonction du code météo
function handleWeatherIcons(weatherCode) {
    const allIcons = getAllWeatherIcons(); // Utilisez la fonction pour obtenir tous les chemins d'icônes

    // Obtenez le chemin de l'icône en fonction du code météo
    const iconPath = allIcons[weatherCode];

    // Mettez à jour l'élément image avec l'icône correspondante
    const iconImage = document.getElementById('weatherIcon');
    iconImage.src = iconPath;
}

// Fonction pour obtenir tous les chemins d'icônes
function getAllWeatherIcons() {
    const iconBasePath = "ressources/icon-meteo/png/";

    const weatherIcons = {
        // Ajoutez ici votre mapping d'icônes
    };

    const allIcons = {};

    for (const code in weatherIcons) {
        if (weatherIcons.hasOwnProperty(code)) {
            allIcons[code] = iconBasePath + weatherIcons[code];
        }
    }

    return allIcons;
}

// Exécutez la mise à jour initiale des données météo
updateWeather();

// Ajoutez un gestionnaire d'événements pour le formulaire de recherche
const searchForm = document.querySelector('form');
searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const locationInput = document.getElementById('locationInput');
    cityName = locationInput.value;
    updateWeather();
});