import Script from "next/script"
export default function UserDetails() {
    return (
        <div>
            <Script src="/geolocation.js" />
            <h1>Current geolocation</h1>
            <p id="lat">Latitude: </p>
            <p id="lon">Longitude: </p>
        </div>
    )
}