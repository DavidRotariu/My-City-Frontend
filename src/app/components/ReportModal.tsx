'use client';

import { Modal, Button } from '@mantine/core';
import TabsComponent from '../report/tabs';

const ReportModal = ({ opened, open, close }: any) => {
    return (
        <>
            <div className="fixed bottom-[115px] right-10 text-3xl">
                <Button variant="filled" color="#42568B" radius="md" onClick={open}>
                    Get reports
                </Button>
            </div>

            <Modal opened={opened} onClose={close} size="100vw" title="City tips">
                <TabsComponent />
            </Modal>
        </>
    );
};

export default ReportModal;
