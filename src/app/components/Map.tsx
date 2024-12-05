/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import L, { latLng } from 'leaflet';
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

interface MapProps {
    sensor: number;
    setSensor: React.Dispatch<React.SetStateAction<number>>;
    opened: any;
    newSensor: {
        lat: number;
        lng: number;
        reason: string;
    } | null;
    setNewSensor: any;
    openedTips: any;
}
interface sensorProps {
    id: number;
    lat: number;
    lng: number;
    name: string;
}

const Map = ({ sensor, setSensor, opened, newSensor, setNewSensor, openedTips }: MapProps) => {
    const [map, setMap] = useState<L.Map | null>(null);
    const mapRef = useRef<HTMLDivElement>(null);
    const markerRef = useRef<L.Marker | null>(null);
    const polygonRef = useRef<L.Polygon | null>(null);
    const polygon2Ref = useRef<L.Polygon | null>(null);
    const polygon3Ref = useRef<L.Polygon | null>(null);
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

    const addSensor = async () => {
        const newSensorData = { lat: newSensor?.lat, lng: newSensor?.lng };
        try {
            const response = await fetch(`${baseURL}/sensors`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newSensorData)
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('Response:', data);
            setSensors(data.sensors);
        } catch (error) {
            console.error('There was a problem with fetching the sensors:', error);
        }
    };

    // fetching the initial sensors
    useEffect(() => {
        const fetchSensors = async () => {
            try {
                const response = await fetch(`${baseURL}/sensors`);
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
        if (opened && newSensor != null && map && !markerRef.current) {
            const marker4 = L.marker([newSensor.lat, newSensor.lng], {
                icon: redIcon
            }).addTo(map);
            marker4.bindPopup(Array.isArray(sensors) ? `<b>Senzor ${sensors.length + 1}</b>` : '<b>New sensor</b>');
            markerRef.current = marker4;
            marker4.on('click', () => {
                marker4.setIcon(blueIcon);
                addSensor();
                setNewSensor(null);
                markerRef.current = null;
            });
        }
        if (!opened && markerRef.current && map) {
            map.removeLayer(markerRef.current);
            markerRef.current = null;
        }
    }, [opened, map, newSensor]);

    // adding and removing markers
    useEffect(() => {
        if (openedTips && map && !polygonRef.current) {
            const polygon = L.polygon(
                [
                    [47.6412, 26.20056],
                    [47.64125, 26.22267],
                    [47.64374, 26.22158]
                ],
                { color: 'red' }
            ).addTo(map);
            polygonRef.current = polygon;

            const polygon2 = L.polygon(
                [
                    [47.642, 26.201],
                    [47.6425, 26.2235],
                    [47.644, 26.222]
                ],
                { color: 'grey' }
            ).addTo(map);
            polygon2Ref.current = polygon2;

            const polygon3 = L.polygon(
                [
                    [47.64, 26.199],
                    [47.6405, 26.221],
                    [47.642, 26.22]
                ],
                { color: 'green' }
            ).addTo(map);
            polygon3Ref.current = polygon3;
            // marker4.bindPopup(Array.isArray(sensors) ? `<b>Senzor ${sensors.length + 1}</b>` : '<b>New sensor</b>');
        }
        if (!openedTips && polygonRef.current && polygon2Ref.current && polygon3Ref.current && map) {
            map.removeLayer(polygonRef.current);
            map.removeLayer(polygon2Ref.current);
            map.removeLayer(polygon3Ref.current);
            polygonRef.current = null;
            polygon2Ref.current = null;
            polygon3Ref.current = null;
        }
    }, [openedTips]);

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
