/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { Dialog, BackgroundImage, Center, Box, Title, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useEffect } from 'react';

interface SensorModalProps {
    sensor: number;
    setSensor: React.Dispatch<React.SetStateAction<number>>;
}

const SensorModal = ({ sensor, setSensor }: SensorModalProps) => {
    const [opened, { open, close }] = useDisclosure(false);

    useEffect(() => {
        if (sensor !== 0) {
            open();
        } else {
            close();
        }
    }, [sensor]);

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
                            {sensor == 1 && <Title c="white">24°C</Title>}
                            {sensor == 2 && <Title c="white">19°C</Title>}
                            {sensor == 3 && <Title c="white">22°C</Title>}
                        </Center>
                    </BackgroundImage>
                    <Text>Weather</Text>
                </Box>

                <Box px="md" py="xs" mx="auto" className="text-center">
                    <BackgroundImage src="/humidity.jpg" radius="md">
                        <Center p="sm">
                            {sensor == 1 && <Title c="white">94%</Title>}
                            {sensor == 2 && <Title c="white">97%</Title>}
                            {sensor == 3 && <Title c="white">100%</Title>}
                        </Center>
                    </BackgroundImage>
                    <Text>Humidity</Text>
                </Box>

                <Box px="md" py="xs" mx="auto" className="text-center">
                    <BackgroundImage src="/noise.jpg" radius="md">
                        <Center p="sm">
                            {sensor == 1 && <Title c="white">73dB</Title>}
                            {sensor == 2 && <Title c="white">120dB</Title>}
                            {sensor == 3 && <Title c="white">40dB</Title>}
                        </Center>
                    </BackgroundImage>
                    <Text>Noise level</Text>
                </Box>

                <Box px="md" py="xs" mx="auto">
                    <BackgroundImage src="/dust.jpg" radius="md">
                        <Center p="sm">
                            {sensor == 1 && <Title c="white">67</Title>}
                            {sensor == 2 && <Title c="white">65</Title>}
                            {sensor == 3 && <Title c="white">69</Title>}
                        </Center>
                    </BackgroundImage>
                    <Text>Air quality</Text>
                </Box>
            </Dialog>
        </div>
    );
};

export default SensorModal;
