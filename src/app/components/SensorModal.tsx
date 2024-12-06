/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { Dialog, BackgroundImage, Center, Box, Title, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useEffect, useState } from 'react';
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

interface SensorModalProps {
    sensor: number;
    setSensor: React.Dispatch<React.SetStateAction<number>>;
}

const SensorModal = ({ sensor, setSensor }: SensorModalProps) => {
    const [opened, { open, close }] = useDisclosure(false);
    const [liveSensor, setLiveSensor] = useState([]);

    useEffect(() => {
        if (sensor !== 0) {
            open();
        } else {
            close();
        }
    }, [sensor]);

    // fetching the initial sensors every 10 seconds
    useEffect(() => {
        const fetchLiveSensor = async () => {
            try {
                const response = await fetch(`${baseURL}/sensors/live`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data);
                setLiveSensor(data.sensor1[0]);
            } catch (error) {
                console.error('There was a problem with fetching the sensors:', error);
            }
        };

        fetchLiveSensor();

        const intervalId = setInterval(fetchLiveSensor, 10000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <Dialog
                opened={opened}
                onClose={() => {
                    close();
                    setSensor(0);
                }}
                size="sm"
                radius="md"
                withCloseButton
                position={{ top: 70, right: 20 }}
            >
                <Title size="lg">{`Senzor ${sensor}`}</Title>
                <Box px="md" py="sm" mx="auto" className="text-center">
                    <BackgroundImage src="/clouds.jpg" radius="md">
                        <Center p="sm">
                            {sensor == 1 && <Title c="white">{liveSensor[0]}°C</Title>}
                            {sensor >= 2 && <Title c="white">22°C</Title>}
                        </Center>
                    </BackgroundImage>
                    <Text>Temperature</Text>
                </Box>
                <Box px="md" py="xs" mx="auto" className="text-center">
                    <BackgroundImage src="/humidity.jpg" radius="md">
                        <Center p="sm">
                            {sensor == 1 && <Title c="white">{liveSensor[1]}%</Title>}
                            {sensor >= 2 && <Title c="white">97%</Title>}
                        </Center>
                    </BackgroundImage>
                    <Text>Humidity</Text>
                </Box>
                <Box px="md" py="xs" mx="auto" className="text-center">
                    <BackgroundImage src="/noise.jpg" radius="md">
                        <Center p="sm">
                            {sensor == 1 && <Title c="white">73dB</Title>}
                            {sensor >= 2 && <Title c="white">40dB</Title>}
                        </Center>
                    </BackgroundImage>
                    <Text>Noise level</Text>
                </Box>
                <Box px="md" py="xs" mx="auto" className="text-center">
                    <BackgroundImage src="/dust.jpg" radius="md">
                        <Center p="sm">
                            {sensor == 1 && <Title c="white">67</Title>}
                            {sensor >= 2 && <Title c="white">69</Title>}
                        </Center>
                    </BackgroundImage>
                    <Text>Air quality</Text>
                </Box>
            </Dialog>
        </div>
    );
};

export default SensorModal;
