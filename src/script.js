const map = L.map('map').setView([39.92, 32.854], 5)

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 14,
  minZoom: 6,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map)

var lat = Math.floor(Math.random() * (4100 - 3700) + 3700) / 100
var lon = Math.floor(Math.random() * (4300 - 2700) + 2700) / 100
console.log('Boylam:', lat, 'Enlem:', lon)

var lat2 = Math.floor(Math.random() * (4100 - 3700) + 3700) / 100
var lon2 = Math.floor(Math.random() * (4300 - 2700) + 2700) / 100
console.log('Boylam:', lat2, 'Enlem:', lon2)

const marker = L.marker([lat, lon])
  .addTo(map)
  .bindPopup('<b>Hello world!</b><br />I am a popup.')
// .openPopup()

L.marker([lat2, lon2])
  .addTo(map)
  .bindPopup('<b>Hello world!</b><br />I am a popup.')

const popup = L.popup()
  .setLatLng([39.935, 32.854])
  .setContent('I am a standalone popup.')
// .openOn(map)

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent(`You clicked the map at ${e.latlng.toString()}`)
    .openOn(map)
}

map.on('click', onMapClick)
