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

    return (
        <>
            <div className="fixed bottom-10 right-10 text-3xl">
                <Button
                    variant="filled"
                    color="#0A841B"
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
                size="900px"
                position={{ bottom: 50, left: 150 }}
            ></Dialog>
        </>
    );
};

export default AIModal;
