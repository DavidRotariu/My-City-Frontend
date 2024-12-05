'use client';

import { Button } from '@mantine/core';
import Map from './components/Map';
import Image from 'next/image';

const Home = () => {
    return (
        <div>
            <Map />
            <div className="fixed bottom-10 right-10 text-3xl">
                <Button
                    variant="filled"
                    color="#0A841B"
                    radius="xl"
                    p="0"
                    w="50px"
                    h="50px"
                >
                    <Image src="/plus.svg" alt="Icon" width="40" height="40" />
                </Button>
            </div>
        </div>
    );
};

export default Home;
