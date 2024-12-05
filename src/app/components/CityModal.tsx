'use client';

import { Drawer, Button } from '@mantine/core';

const CityModal = ({ opened, open, close }: any) => {
    return (
        <>
            <div className="fixed bottom-[70px] right-10 text-3xl">
                <Button variant="filled" color="#99E034" radius="md" onClick={open}>
                    Get tips (AI)
                </Button>
            </div>

            <Drawer opened={opened} onClose={close} title="City tips">
                {/* Drawer content */}
            </Drawer>
        </>
    );
};

export default CityModal;
