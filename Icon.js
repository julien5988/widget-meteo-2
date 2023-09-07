function getAllWeatherIcons() {
    const iconBasePath = "ressources/icon-meteo/png/";

    const weatherIcons = {
        0: "unknown.svg",
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
        4000: "40000_drizzle_large.png",
        4001: "40010_rain_large.png",
        4200: "42000_rain_light_large.png",
        4201: "42010_rain_heavy_large.png",
        5000: "50000_snow_large.png",
        5001: "50010_flurries_large.png",
        5100: "51000_snow_light_large.png",
        5101: "51010_snow_heavy_large.png",
        6000: "60000_freezing_rain_drizzle_large.png",
        6001: "60010_freezing_rain_large.png",
        6200: "62000_freezing_rain_light_large.png",
        6201: "62010_freezing_rain_heavy_large.png",
        7000: "70000_ice_pellets_large.png",
        7101: "71010_ice_pellets_heavy_large.png",
        7102: "71020_ice_pellets_light_large.png",
        8000: "80000_tstorm_large.png"
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