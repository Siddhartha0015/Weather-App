let latitude;
let longitude;

async function getWeather() {
    const city = document.getElementById("city").value.trim().toLowerCase();

    if (city === "lucknow") {
        latitude = 26.8467;
        longitude = 80.9462;
    } else if (city === "bengaluru") {
        latitude = 12.9716;
        longitude = 77.5946;
    } else if (city === "new delhi") {
        latitude = 28.6139;
        longitude = 77.2090;
    } else if (city === "mumbai") {
        latitude = 19.0760;
        longitude = 72.8777;
    } else if (city === "kolkata") {
        latitude = 22.5731;
        longitude = 88.3616;
    } else {
        alert("City not found : Please enter a valid city name (Lucknow, Bengaluru, New Delhi, Mumbai, Kolkata).");
        return;
    }

    try {
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
        );

        const data = await response.json();

        document.getElementById("temp").value =
            data.current_weather.temperature + " °C";

    } catch (error) {
        console.error("Weather fetch failed:", error);
    }
} 