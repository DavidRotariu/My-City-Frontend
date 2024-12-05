'use client';

import { Modal, Button } from '@mantine/core';
import TabsComponent from './TabsComponent';

const ReportModal = ({ opened, open, close }: any) => {
    return (
        <>
            <div className="fixed bottom-[115px] right-10 text-3xl">
                <Button variant="filled" color="#42568B" radius="md" onClick={open}>
                    Get reports
                </Button>
            </div>

            <Modal opened={opened} 
                    onClose={close} 
                    size="100vw" 
                    styles={{
                        content: {
                        height: '90vh', 
                        },
                        body: {
                        overflow: 'auto',
                        },
                    }}>
                <TabsComponent />
            </Modal>
        </>
    );
};

export default ReportModal;
