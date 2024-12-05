'use client';

import { Modal, Button } from '@mantine/core';
import TabsComponent from '../report/tabs';

const ReportModal = ({ opened, open, close }: any) => {
    return (
        <>
            <div className="fixed bottom-[115px] right-10 text-3xl">
                <Button variant="filled" color="#99E034" radius="md" onClick={open}>
                    Get reports
                </Button>
            </div>

            <Modal opened={opened} onClose={close} fullScreen title="City tips">
                <TabsComponent />
            </Modal>
        </>
    );
};

export default ReportModal;
