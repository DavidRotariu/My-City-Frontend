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
interface sensorProps {
    id: number;
    lat: number;
    lng: number;
    name: string;
}

const Map = ({ sensor, setSensor, opened, close }: MapProps) => {
    const [map, setMap] = useState<L.Map | null>(null);
    const mapRef = useRef<HTMLDivElement>(null);
    const markerRef = useRef<L.Marker | null>(null);
    const [sensors, setSensors] = useState<sensorProps[] | null>(null);
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

    // fetching the initial sensors
    useEffect(() => {
        const fetchSensors = async () => {
            try {
                const response = await fetch('http://192.168.0.113:8000/api/sensors');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setSensors(data.sensors);
            } catch (error) {
                console.error('There was a problem with fetching the sensors:', error);
            }
        };
        fetchSensors();
    }, []);

    // adding and removing markers
    useEffect(() => {
        if (opened) {
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
        } else if (markerRef.current && map) {
            map.removeLayer(markerRef.current);
            markerRef.current = null;
        }
    }, [opened, map]);

    // creating the inital map
    useEffect(() => {
        if (mapRef.current && !map && sensors) {
            const initMap = L.map(mapRef.current).setView([47.64115437373143, 26.244929831845194], 14);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(initMap);

            sensors?.forEach((marker, index) => {
                const newMarker = L.marker([marker.lat, marker.lng], {
                    icon: blueIcon
                }).addTo(initMap);
                newMarker.bindPopup(`<b>${marker.name}</b>`);
                newMarker.on('click', () => {
                    setSensor(index + 1);
                });
            });
            setMap(initMap);
        }
    }, [map, sensors]);

    return <div ref={mapRef} className="w-full h-screen z-0"></div>;
};

export default Map;
