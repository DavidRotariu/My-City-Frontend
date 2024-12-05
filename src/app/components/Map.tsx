import { useState, useEffect, useRef } from "react";
import L from "leaflet";

const Map = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const mapRef = useRef<L.Map | null>(null);
  const toggleModal = () => setIsModalOpen((prev) => !prev);

  useEffect(() => {
    if (!mapRef.current) {
      const map = L.map("map").setView([47.65, 26.2761], 13);

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      const defaultIcon = new L.Icon({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        shadowSize: [41, 41],
      });

      const marker = L.marker([47.65, 26.2761], { icon: defaultIcon }).addTo(
        map
      );

      marker.bindPopup("<b>Welcome to Suceava!</b>");

      marker.on("click", () => {
        toggleModal();
      });

      mapRef.current = map;
    }
  }, []);

  return (
    <div className="w-full h-screen relative">
      <div id="map" className="w-full h-full z-0"></div>

      {isModalOpen && (
        <div className="fixed top-1/2 right-5 transform -translate-y-1/2 w-[350px] h-[485px] bg-white z-20 rounded-md"></div>
      )}
    </div>
  );
};

export default Map;
