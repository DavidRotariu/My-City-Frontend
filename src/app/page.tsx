'use client';

import { useState } from 'react';
import AIModal from './components/AIModal';
import Map from './components/Map';
import SensorModal from './components/SensorModal';
import { useDisclosure } from '@mantine/hooks';

const Page = () => {
    const [sensor, setSensor] = useState(0);
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <div className="w-full h-screen relative">
            <Map
                sensor={sensor}
                setSensor={setSensor}
                opened={opened}
                close={close}
            />
            <SensorModal sensor={sensor} setSensor={setSensor} />
            <AIModal opened={opened} open={open} close={close} />
        </div>
    );
};

export default Page;
