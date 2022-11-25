// map settings
const map = L.map('map').setView([38.2, 34.6], 0)

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 14,
  minZoom: 6,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map)

// ramdom markers
function RandomMarker(number) {
  for (let i = 0; i < number; i++) {
    const lat = Math.floor(Math.random() * (4100 - 3700) + 3700) / 100
    const lon = Math.floor(Math.random() * (4300 - 2700) + 2700) / 100
    console.log('Boylam:', lat, '| Enlem:', lon)

    const marker = L.marker([lat, lon])
      .addTo(map)
      .bindPopup(`<b>Merhaba, burası</b><br />Boylam: ${lat} | Enlem: ${lon}`)
  }
}
RandomMarker(25)

// popup settings
const popup = L.popup().setLatLng([39.935, 32.854]).setContent('Popup')

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent(`Seçtiğin nokta: ${e.latlng.toString()}`)
    .openOn(map)
}

map.on('click', onMapClick)
