'use client';

import { Modal, BackgroundImage, Center, Box, Title } from '@mantine/core';
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
            <Modal
                opened={opened}
                onClose={() => {
                    close();
                    setSensor(0);
                }}
                title={`Senzor ${sensor}`}
                size="sm"
                centered
                withOverlay={false}
                className="pl-[550px]"
            >
                <Box px="xl" py="sm" mx="auto">
                    <BackgroundImage src="/clouds.jpg" radius="md">
                        <Center p="sm">
                            {sensor == 1 && <Title c="white">24°C</Title>}
                            {sensor == 2 && <Title c="white">19°C</Title>}
                            {sensor == 3 && <Title c="white">22°C</Title>}
                        </Center>
                    </BackgroundImage>
                </Box>

                <Box px="xl" py="sm" mx="auto">
                    <BackgroundImage src="/water.jpg" radius="md">
                        <Center p="sm">
                            {sensor == 1 && <Title c="white">94%</Title>}
                            {sensor == 2 && <Title c="white">97%</Title>}
                            {sensor == 3 && <Title c="white">100%</Title>}
                        </Center>
                    </BackgroundImage>
                </Box>

                <Box px="xl" py="sm" mx="auto">
                    <BackgroundImage src="/noise.jpg" radius="md">
                        <Center p="sm">
                            {sensor == 1 && <Title c="white">73dB</Title>}
                            {sensor == 2 && <Title c="white">120dB</Title>}
                            {sensor == 3 && <Title c="white">40dB</Title>}
                        </Center>
                    </BackgroundImage>
                </Box>

                <Box px="xl" py="sm" mx="auto">
                    <BackgroundImage src="/dust.jpg" radius="md">
                        <Center p="sm">
                            {sensor == 1 && <Title c="white">67</Title>}
                            {sensor == 2 && <Title c="white">65</Title>}
                            {sensor == 3 && <Title c="white">69</Title>}
                        </Center>
                    </BackgroundImage>
                </Box>
            </Modal>
        </div>
    );
};

export default SensorModal;
