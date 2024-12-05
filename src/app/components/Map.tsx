/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';

interface MapProps {
    sensor: number;
    setSensor: React.Dispatch<React.SetStateAction<number>>;
    opened: any;
    close: any;
}

const Map = ({ sensor, setSensor, opened, close }: MapProps) => {
    const [map, setMap] = useState<L.Map | null>(null);
    const mapRef = useRef<HTMLDivElement>(null);
    const markerRef = useRef<L.Marker | null>(null);

    const redIcon = new L.Icon({
        iconUrl: '/redmarker.png',
        iconSize: [32, 34],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
    });
    const blueIcon = new L.Icon({
        iconUrl: '/bluemarker.png',
        iconSize: [32, 34],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
    });

    const addMarker = () => {
        if (map && !markerRef.current) {
            const marker4 = L.marker([47.635, 26.24], {
                icon: redIcon
            }).addTo(map);
            marker4.bindPopup('<b>Senzor 4</b>');
            marker4.on('click', () => {
                console.log('Marker clicked!');
            });
            markerRef.current = marker4;
        }
    };

    useEffect(() => {
        if (opened) {
            addMarker();
        } else if (markerRef.current && map) {
            map.removeLayer(markerRef.current);
            markerRef.current = null;
        }
    }, [opened, map]);

    useEffect(() => {
        if (mapRef.current && !map) {
            const initMap = L.map(mapRef.current).setView(
                [47.64115437373143, 26.244929831845194],
                13
            ); // Set the center and zoom level

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution:
                    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(initMap);

            const marker1 = L.marker([47.64238, 26.224382], {
                icon: blueIcon
            }).addTo(initMap);
            marker1.bindPopup('<b>Senzor 1</b>');
            marker1.on('click', () => {
                setSensor(1);
            });
            const marker2 = L.marker([47.64115437373143, 26.244929831845194], {
                icon: blueIcon
            }).addTo(initMap);
            marker2.bindPopup('<b>Senzor 2</b>');
            marker2.on('click', () => {
                setSensor(2);
            });
            const marker3 = L.marker([47.645176, 26.255689], {
                icon: blueIcon
            }).addTo(initMap);
            marker3.bindPopup('<b>Senzor 3</b>');
            marker3.on('click', () => {
                setSensor(3);
            });

            setMap(initMap);
        }
    }, [map]);

    return <div ref={mapRef} className="w-full h-screen z-0"></div>;
};

export default Map;
