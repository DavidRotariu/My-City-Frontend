import { useEffect } from "react";
import L from "leaflet";

const Map = () => {
  useEffect(() => {
    const map = L.map("map").setView([47.65, 26.2761], 13);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    const marker = L.marker([47.64242, 26.224201]).addTo(map);

    marker.bindPopup("Onofrei House").openPopup();
  }, []);

  return (
    <div>
      <div id="map" style={{ height: "500px", width: "100%" }}></div>
    </div>
  );
};

export default Map;
