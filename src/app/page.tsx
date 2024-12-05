'use client';

import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import Map from './components/Map';
import AIModal from './components/AIModal';
import SensorModal from './components/SensorModal';
import CityModal from './components/CityModal';
import ReportModal from './components/ReportModal';

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
            <Map
                sensor={sensor}
                setSensor={setSensor}
                opened={openedAI}
                newSensor={newSensor}
                setNewSensor={setNewSensor}
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
