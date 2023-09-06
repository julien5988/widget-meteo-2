function getAllWeatherIcons() {
    const iconBasePath = "ressources/icon-meteo/png/";

    const weatherIcons = {
        0: "unknown.png",
        1000: "10000_clear_large.png",
        1100: "11000_mostly_clear_large.png",
        1101: "11010_partly_cloudy_large.png",
        1102: "11020_mostly_cloudy_large.png",
        1001: "10010_cloudy_large.png",
        2000: "20000_fog_large.png",
        2100: "21000_fog_light_large.png",
        2101: "21010_fog_light_mostly_clear_large.png",
        2102: "21020_fog_light_partly_cloudy_large.png",
        2103: "21030_fog_light_mostly_cloudy_large.png",
        2106: "21060_fog_mostly_clear_large.png",
        2107: "21070_fog_partly_cloudy_large.png",
        2108: "21080_fog_mostly_cloudy_large.png",
        4000: "40000_drizzle.png",
        4001: "40010_rain.png",
        4200: "42000_light_rain.png",
        4201: "42010_heavy_rain.png",
        5000: "50000_snow.png",
        5001: "50010_flurries.png",
        5100: "51000_light_snow.png",
        5101: "51010_heavy_snow.png",
        6000: "60000_freezing_drizzle.png",
        6001: "60010_freezing_rain.png",
        6200: "62000_light_freezing_rain.png",
        6201: "62010_heavy_freezing_rain.png",
        7000: "70000_ice_pellets.png",
        7101: "71010_heavy_ice_pellets.png",
        7102: "71020_light_ice_pellets.png",
        8000: "80000_thunderstorm.png"
    };

    const allIcons = {};

    for (const code in weatherIcons) {
        if (weatherIcons.hasOwnProperty(code)) {
            allIcons[code] = iconBasePath + weatherIcons[code];
        }
    }

    return allIcons;
}

// Fonction pour vérifier si un chemin d'icône existe
function isIconPathValid(iconPath) {
    // Ici, vous pouvez ajouter la logique pour vérifier si le chemin d'icône est valide
    // Par exemple, vous pouvez vérifier si le fichier image existe sur le serveur

    // Pour cet exemple, nous considérerons que tous les chemins d'icônes sont valides
    return true;
}

document.addEventListener("DOMContentLoaded", function () {
    const iconContainer = document.getElementById("iconContainer");

    // Obtenez tous les chemins d'icônes en utilisant la fonction getAllWeatherIcons
    const allIcons = getAllWeatherIcons();

    // Parcourez les chemins d'icônes un par un
    for (const code in allIcons) {
        if (allIcons.hasOwnProperty(code)) {
            const iconPath = allIcons[code];

            // Créez un élément d'image pour afficher l'icône
            const img = document.createElement("img");
            img.src = iconPath;

            // Vérifiez si le chemin d'icône est valide
            if (isIconPathValid(iconPath)) {
                // Si le chemin est valide, ajoutez l'icône à la page
                iconContainer.appendChild(img);
            } else {
                // Si le chemin n'est pas valide, affichez-le dans la console
                console.error(`Chemin d'icône invalide pour le code météo ${code}: ${iconPath}`);
            }
        }
    }
});