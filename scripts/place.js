// Current year
const currentYear = new Date().getFullYear();
document.querySelector("#currentyear").textContent = currentYear;

// Last modified date
document.querySelector("#lastModified").textContent = document.lastModified;

// Hero image switch for responsive sizes
const heroImage = document.querySelector(".hero img");

function updateHeroImage() {
    if (!heroImage) return;

    if (window.innerWidth <= 600) {
        heroImage.src = "images/sierra-leone-small.webp";
        heroImage.srcset = "images/sierra-leone-small.webp";
    } else if (window.innerWidth <= 1000) {
        heroImage.src = "images/sierra-leone-medium.webp";
        heroImage.srcset = "images/sierra-leone-medium.webp";
    } else {
        heroImage.src = "images/sierra-leone-large.webp";
        heroImage.srcset = "images/sierra-leone-large.webp";
    }
}

window.addEventListener("resize", updateHeroImage);
updateHeroImage();

// Weather values
const temperature = 10;
const windSpeed = 5;

// Wind chill calculation
function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

// Display temperature and wind speed
document.querySelector("#temperature").textContent = `${temperature} °C`;
document.querySelector("#wind").textContent = `${windSpeed} km/h`;

// Calculate wind chill only when the conditions are met
if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    document.querySelector("#windchill").textContent = `${windChill.toFixed(1)} °C`;
} else {
    document.querySelector("#windchill").textContent = "N/A";
}