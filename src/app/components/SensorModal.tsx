'use client';

import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState, useEffect } from 'react';

interface SensorModalProps {
    sensor: number;
    setSensor: React.Dispatch<React.SetStateAction<number>>;
}

const SensorModal = ({ sensor, setSensor }: SensorModalProps) => {
    const [opened, { open, close }] = useDisclosure(false);

    useEffect(() => {
        if (sensor !== 0) {
            open();
        } else {
            close();
        }
    }, [sensor]);

    return (
        <div>
            <Modal
                opened={opened}
                onClose={() => {
                    close();
                    setSensor(0);
                }}
                title={`Senzor ${sensor}`}
                size="sm"
                centered
                withOverlay={false}
                className="pl-[550px]"
            >
                <div>14°C</div>
            </Modal>
        </div>
    );
};

export default SensorModal;
