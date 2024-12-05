/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { Dialog, Button } from '@mantine/core';
import { Container, Title, List, Paper } from '@mantine/core';

const CityModal = ({ opened, open, close }: any) => {
    return (
        <>
            <div className="fixed bottom-[70px] right-10 text-3xl">
                <Button variant="filled" color="#99E034" radius="md" onClick={open}>
                    Get tips (AI)
                </Button>
            </div>

            <Dialog
                opened={opened}
                onClose={close}
                size="500px"
                h="screen"
                radius="md"
                withCloseButton
                p="md"
                position={{ top: 40, left: 20 }}
            >
                <Title order={1}>Improving Suceava&apos;s Pollution and Making it Greener</Title>
                <Title order={2}>1. Air Quality</Title>
                <List>
                    <List.Item>
                        Promote electric vehicles, public transport, and stricter emissions regulations.
                    </List.Item>
                    <List.Item>Increase tree planting and green spaces to absorb pollutants.</List.Item>
                </List>
                <Title order={2}>2. Noise Pollution</Title>
                <List>
                    <List.Item>Implement zoning laws to reduce noise in residential areas.</List.Item>
                    <List.Item>Use sound barriers or trees to absorb noise near busy roads.</List.Item>
                </List>
                <Title order={2}>3. Temperature & Humidity</Title>
                <List>
                    <List.Item>Combat urban heat islands with green roofs, parks, and more trees.</List.Item>
                    <List.Item>Use cool roofs to lower temperatures in hot areas.</List.Item>
                </List>
                <Title order={2}>4. Smart Planning</Title>
                <List>
                    <List.Item>
                        Optimize traffic flows using real-time data to reduce congestion and pollution.
                    </List.Item>
                    <List.Item>Implement green infrastructure like rain gardens and permeable pavements.</List.Item>
                </List>
            </Dialog>
        </>
    );
};

export default CityModal;
