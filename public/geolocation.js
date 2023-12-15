const lat = document.getElementById("lat");
const lon = document.getElementById("lon");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);

    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    lat.innerHTML += position.coords.latitude;
    lon.innerHTML += position.coords.longitude;
}

getLocation();