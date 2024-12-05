/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import {
    Dialog,
    BackgroundImage,
    Center,
    Box,
    Title,
    Button
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';
import { useEffect } from 'react';

const AIModal = () => {
    const [opened, { open, close }] = useDisclosure(false);

    const response =
        'This position is slightly southeast of Sensor 1, filling in the gap between Sensors 1 and 2. It ensures better coverage of the southern part of the city, particularly around areas that might not be well-monitored by the existing sensors.';

    return (
        <>
            <div className="fixed bottom-10 right-10 text-3xl">
                <Button
                    variant="filled"
                    color="#0DF464"
                    radius="xl"
                    p="0"
                    w="50px"
                    h="50px"
                    onClick={open}
                >
                    <Image src="/plus.svg" alt="Icon" width="40" height="40" />
                </Button>
            </div>
            <Dialog
                opened={opened}
                onClose={close}
                size="1000px"
                radius="md"
                withCloseButton
                p="md"
                position={{ bottom: 50, left: 250 }}
            >
                {response}
            </Dialog>
        </>
    );
};

export default AIModal;
