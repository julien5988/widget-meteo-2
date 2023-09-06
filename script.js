

const options = { method: 'GET', headers: { accept: 'application/json' } };

fetch('https://api.tomorrow.io/v4/weather/realtime?location=nuuk&apikey=CqG3KRTU0z6LlN7su3zXtviZ2dVkzRNC', options)
    .then(response => response.json())
    .then(data => {
        const cloudCover = data.data.values.cloudCover;
        const dewPoint = data.data.values.dewPoint;
        const temperature = data.data.values.temperature;
        const humidity = data.data.values.humidity;
        const temperatureApparent = data.data.values.temperatureApparent;
        const windDirection = data.data.values.windDirection;
        const city = data.location.name.split(',')[0].trim();
        //const weatherCode = data.data.values.weatherCode;

        // Mettre à jour les éléments HTML avec les données
        document.getElementById('cloudCover').textContent = cloudCover;
        document.getElementById('dewPoint').textContent = dewPoint;
        document.getElementById('temperature').textContent = `${temperature}°C`;
        document.getElementById('humidity').textContent = `${humidity}%`;
        document.getElementById('temperatureApparent').textContent = `${temperatureApparent}°C`;
        document.getElementById('windDirection').textContent = windDirection;
        document.getElementById('city').textContent = city;
        
        
    })
    .catch(err => console.error(err));