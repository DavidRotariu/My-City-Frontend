'use client';

import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import Map from './components/Map';
import AIModal from './components/AIModal';
import SensorModal from './components/SensorModal';
import CityModal from './components/CityModal';

const Page = () => {
    const [sensor, setSensor] = useState(0);
    const [openedAI, { open: openAI, close: closeAI }] = useDisclosure(false);
    const [openedDrawer, { open: openDrawer, close: closeDrawer }] =
        useDisclosure(false);

    return (
        <div className="w-full h-screen relative">
            <Map
                sensor={sensor}
                setSensor={setSensor}
                opened={openedAI}
                close={closeAI}
            />
            <SensorModal sensor={sensor} setSensor={setSensor} />
            <AIModal opened={openedAI} open={openAI} close={closeAI} />
            <CityModal
                opened={openedDrawer}
                open={openDrawer}
                close={closeDrawer}
            />
        </div>
    );
};

export default Page;
