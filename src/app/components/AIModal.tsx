/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { Dialog, Button } from '@mantine/core';
import TypewriterEffect from './TypewriterEffect';
import { useEffect } from 'react';

const AIModal = ({ opened, open, close, newSensor, setNewSensor }: any) => {
    // fetching the new sensor using AI
    const fetchNewSensor = async () => {
        try {
            const response = await fetch('http://192.168.0.113:8000/api/sensors/ai');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
            setNewSensor(data);
        } catch (error) {
            console.error('There was a problem with fetching the sensor:', error);
        }
    };

    return (
        <>
            <div className="fixed bottom-[25px] right-10 text-3xl">
                <Button
                    variant="filled"
                    color="#E0340B"
                    radius="md"
                    onClick={() => {
                        fetchNewSensor();
                        open();
                    }}
                >
                    Add senzor (AI)
                </Button>
            </div>
            {newSensor != null && (
                <Dialog
                    opened={opened}
                    onClose={close}
                    size="1000px"
                    radius="md"
                    withCloseButton
                    p="md"
                    position={{ bottom: 50, left: 250 }}
                >
                    <TypewriterEffect text={newSensor.reason} speed={30} />
                </Dialog>
            )}
        </>
    );
};

export default AIModal;
