/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { Dialog, Button } from '@mantine/core';
import TypewriterEffect from './TypewriterEffect';
import { useEffect } from 'react';
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const AIModal = ({ opened, open, close, newSensor, setNewSensor }: any) => {
    // fetching the new sensor using AI

    function onClose() {
        close();
        setNewSensor(null);
    }

    const fetchNewSensor = async () => {
        try {
            const response = await fetch(`${baseURL}/sensors/ai`);
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
            <div className="fixed bottom-[25px] right-[25px] text-3xl">
                <Button
                    variant="filled"
                    color="#E0340B"
                    radius="md"
                    disabled={newSensor}
                    onClick={() => {
                        fetchNewSensor();
                        open();
                    }}
                >
                    Add senzor (AI)
                </Button>
            </div>
            {newSensor != null && newSensor.reason != undefined && (
                <Dialog
                    opened={opened}
                    onClose={onClose}
                    size="1000px"
                    radius="md"
                    withCloseButton
                    p="md"
                    position={{ bottom: 50, left: 250 }}
                >
                    <TypewriterEffect
                        text={newSensor.reason[0] + newSensor.reason[1] + newSensor.reason.slice(1)}
                        speed={30}
                    />
                </Dialog>
            )}
        </>
    );
};

export default AIModal;
