/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { Dialog, Button } from '@mantine/core';
import TypewriterEffect from './TypewriterEffect';

const AIModal = ({ opened, open, close }: any) => {
    const response =
        'This position is slightly southeast of Sensor 1, filling in the gap between Sensors 1 and 2. It ensures better coverage of the southern part of the city, particularly around areas that might not be well-monitored by the existing sensors.';

    return (
        <>
            <div className="fixed bottom-[25px] right-10 text-3xl">
                <Button variant="filled" color="#E0340B" radius="md" onClick={open}>
                    Add senzor (AI)
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
                <TypewriterEffect text={response} speed={30} />
            </Dialog>
        </>
    );
};

export default AIModal;
