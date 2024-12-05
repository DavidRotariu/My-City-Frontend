import { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import SensorModal from './SensorModal';

const Map = () => {
    const [sensor, setSensor] = useState(0);

    const mapRef = useRef<L.Map | null>(null);

    useEffect(() => {
        if (!mapRef.current) {
            const map = L.map('map').setView(
                [47.64115437373143, 26.244929831845194],
                13
            );

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution:
                    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);

            const defaultIcon = new L.Icon({
                iconUrl:
                    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowUrl:
                    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
                shadowSize: [41, 41]
            });

            const marker1 = L.marker([47.642348, 26.22436], {
                icon: defaultIcon
            }).addTo(map);
            marker1.bindPopup('<b>Senzor 1</b>');
            marker1.on('click', () => {
                setSensor(1);
            });

            const marker2 = L.marker([47.64115437373143, 26.244929831845194], {
                icon: defaultIcon
            }).addTo(map);
            marker2.bindPopup('<b>Senzor 2</b>');
            marker2.on('click', () => {
                setSensor(2);
            });

            const marker3 = L.marker([47.645176, 26.255689], {
                icon: defaultIcon
            }).addTo(map);
            marker3.bindPopup('<b>Senzor 3</b>');
            marker3.on('click', () => {
                setSensor(3);
            });

            mapRef.current = map;
        }
    }, []);

    return (
        <div className="w-full h-screen relative">
            <div id="map" className="w-full h-full z-0"></div>
            <SensorModal sensor={sensor} setSensor={setSensor} />
        </div>
    );
};

export default Map;
