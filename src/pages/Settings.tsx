import { useState } from 'react';

import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Divider from '@mui/joy/Divider';

import { SettingsRecord } from '../components/SettingsRecord';
import { BackupModal } from '../components/BackupModal';

import useTaskStore from '../model/store';
import { downloadBackup } from '../model/task';

export default function SettingsPage() {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const { tasks } = useTaskStore();

    return (
        <>
            <BackupModal open={modalOpen} setOpen={setModalOpen} />
            <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2 }}>Settings</Typography>
            <Sheet variant="outlined" sx={{ width: "100%", p: { xs: 1, md: 4 } }}>
                <SettingsRecord title='Download backup of tasks' buttonText='Download' onClick={() => downloadBackup(tasks)} />
                <Divider sx={{ mt: 2, mb: 2 }} />
                <SettingsRecord title='Restore tasks from backup file' buttonText='Restore' onClick={() => setModalOpen(true)} />
            </Sheet>
        </>
    );
}