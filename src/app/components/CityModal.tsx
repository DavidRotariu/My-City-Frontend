/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { Dialog, Button } from '@mantine/core';
import { Container, Title, List, Paper } from '@mantine/core';

const CityModal = ({ opened, open, close }: any) => {
    return (
        <>
            <div className="fixed bottom-[70px] right-[25px] text-3xl">
                <Button variant="filled" color="#99E034" radius="md" onClick={open}>
                    Get tips (AI)
                </Button>
            </div>

            <Dialog
                opened={opened}
                onClose={close}
                size="400px"
                h="screen"
                radius="md"
                withCloseButton
                p="md"
                position={{ top: 150, left: 20 }}
            >
                <Title order={3}>Improving Suceava&apos;s Pollution</Title>
                <Title order={4}>1. Air Quality</Title>
                <List>
                    <List.Item>Increase tree planting and green spaces to absorb pollutants.</List.Item>
                    <List.Item className="text-green-600">
                        We chose the green area to plant trees because it has the lowest air quality.
                    </List.Item>
                </List>
                <Title order={4}>2. Noise Pollution</Title>
                <List>
                    <List.Item>Implement zoning laws to reduce noise in residential areas.</List.Item>
                    <List.Item className="text-gray-600">
                        We chose the grey area to implement noise reduction because it has the most noise pollution.
                    </List.Item>
                </List>
                <Title order={3}>3. Temperature & Humidity</Title>
                <List>
                    <List.Item>Combat urban heat islands with green roofs, parks, and more trees.</List.Item>
                    <List.Item className="text-blue-600">
                        We chose the blue area to implement cool roofs because it has the highest temperature.
                    </List.Item>
                </List>
            </Dialog>
        </>
    );
};

export default CityModal;
