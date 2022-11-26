// map settings
const map = L.map("map").setView([38.2, 34.6], 0);

const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
	maxZoom: 14,
	minZoom: 6,
	attribution:
		'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// popup div location
let mc = document.documentElement;
mc.addEventListener("click", (e) => {
	mc.style.setProperty("--mouse-x", e.clientX + "px");
	mc.style.setProperty("--mouse-y", e.clientY + "px");
});

// random markers
function RandomMarker(number) {
	for (let i = 0; i < number; i++) {
		// random markers created
		const lat = Math.floor(Math.random() * (4100 - 3700) + 3700) / 100;
		const lon = Math.floor(Math.random() * (4300 - 2700) + 2700) / 100;
		console.log("Enlem:", lat, " | ", "Boylam:", lon);
		// marker added
		const marker = L.marker([lat, lon]).addTo(map);
		// marker popup
		marker.on("click", () => {
			const popup = document.getElementById("popup");

			if (popup.style.display === "block") {
				popup.style.display = "none";
			} else {
				popup.style.display = "block";
				popup.innerHTML = `Merhaba, burası<br />${lat} enlem, ${lon} boylam`;
				popup.classList.add("leaflet-popup-pane", "leaflet-popup");
			}
		});
	}
}
RandomMarker(25);

// Leaflet popup
//   const popup = L.popup()
//     .setLatLng([38, 34])
//     .setContent('I am a standalone popup.')
//     .openOn(map)

//   function onMapClick(e) {
//     popup
//       .setLatLng(e.latlng)
//       .setContent(`You clicked the map at ${e.latlng.toString()}`)
//       .openOn(map)
//   }

//   map.on('click', onMapClick)
