'use client';

import { Dialog, Button } from '@mantine/core';

const CityModal = ({ opened, open, close }: any) => {
    return (
        <>
            <div className="fixed bottom-[70px] right-10 text-3xl">
                <Button variant="filled" color="#99E034" radius="md" onClick={open}>
                    Get tips (AI)
                </Button>
            </div>

            <Dialog
                opened={opened}
                onClose={close}
                size="1000px"
                h="screen"
                radius="md"
                withCloseButton
                p="md"
                position={{ bottom: 50, left: 250 }}
            ></Dialog>
        </>
    );
};

export default CityModal;
