'use client';

import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import Map from './components/Map';
import AIModal from './components/AIModal';
import SensorModal from './components/SensorModal';
import CityModal from './components/CityModal';
import ReportModal from './components/ReportModal';
import { Box, Dialog, Text, Title } from '@mantine/core';
import Image from 'next/image';

interface newSensorProps {
    lat: number;
    lng: number;
    reason: string;
}

const Page = () => {
    const [sensor, setSensor] = useState(0);
    const [openedAI, { open: openAI, close: closeAI }] = useDisclosure(false);
    const [openedDrawer, { open: openDrawer, close: closeDrawer }] = useDisclosure(false);
    const [openedReport, { open: openReport, close: closeReport }] = useDisclosure(false);
    const [newSensor, setNewSensor] = useState<newSensorProps | null>(null);

    return (
        <div className="w-full h-screen relative">
            <Dialog opened={true} position={{ top: -12, left: 470 }} size="580px" radius="md">
                <Box className="flex flex-row justify-center items-center h-[64px]">
                    <Image src="/earth.png" alt="earth" width="64" height="64" className="pl-4"></Image>
                    <Title className="pl-4 text-2xl min-w-[160px]">My City</Title>
                    <Text className="w-full">
                        Using Artificial Intelligence to respond to pollution and make the world greener
                    </Text>
                </Box>
            </Dialog>

            <Map
                sensor={sensor}
                setSensor={setSensor}
                opened={openedAI}
                newSensor={newSensor}
                setNewSensor={setNewSensor}
                openedTips={openedDrawer}
            />
            <SensorModal sensor={sensor} setSensor={setSensor} />
            <AIModal
                opened={openedAI}
                open={openAI}
                close={closeAI}
                newSensor={newSensor}
                setNewSensor={setNewSensor}
            />
            <CityModal opened={openedDrawer} open={openDrawer} close={closeDrawer} />
            <ReportModal opened={openedReport} open={openReport} close={closeReport} />
        </div>
    );
};

export default Page;
