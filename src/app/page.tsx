'use client';

import { useState } from 'react';
import AIModal from './components/AIModal';
import Map from './components/Map';
import SensorModal from './components/SensorModal';

const Page = () => {
    const [sensor, setSensor] = useState(0);

    return (
        <div className="w-full h-screen relative">
            <Map sensor={sensor} setSensor={setSensor} />
            <SensorModal sensor={sensor} setSensor={setSensor} />
            <AIModal />
        </div>
    );
};

export default Page;
