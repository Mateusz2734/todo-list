import { useState } from 'react';
import { toast } from "sonner";

import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';

import { TaskOrTasksSchema } from '../types';
import useTaskStore from '../model/store';


interface BackupModalProps {
    open: boolean,
    setOpen: (open: boolean) => void;
}
export function BackupModal({ open, setOpen }: BackupModalProps) {
    const { mergeTasks } = useTaskStore();
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const file = event.target.files?.[0];
        if (!file) {
            toast.error('Please select a file.');
            return;
        }

        if (!file.name.endsWith('.json')) {
            toast.error('Please select a valid JSON file.');
            return;
        }

        setFile(file);
    };

    const closeModal = () => {
        setFile(null);
        setOpen(false);
    };

    const processFileData = () => {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
            try {
                const text = e.target?.result as string;
                const parsed = JSON.parse(text);

                const result = TaskOrTasksSchema.safeParse(parsed);
                if (result.success) {
                    mergeTasks(result.data);
                    toast.success("Backup recovered successfully!");
                    closeModal();
                } else {
                    toast.error(`Validation error: ${result.error}`);
                    return;
                }
            } catch (err) {
                toast.error('Error parsing JSON file.');
                return;
            }
        };
        reader.onerror = () => {
            toast.error('Error reading file.');
            return;
        };

        reader.readAsText(file!);
    };

    return (
        <Modal
            open={open}
            onClose={closeModal}
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '10000' }}
        >
            <Sheet
                variant="outlined"
                sx={{ maxWidth: { xs: 340, md: 500 }, borderRadius: 'md', p: 3, boxShadow: 'lg', display: 'flex', flexDirection: 'column' }}
            >
                <ModalClose variant="plain" sx={{ m: 1 }} />
                <Typography
                    component="h2"
                    level="h4"
                    textColor="inherit"
                    sx={{ fontWeight: 'lg', mb: 2 }}
                >
                    Choose your backup file
                </Typography>

                <Input sx={{ mb: 2 }} type="file" onChange={handleFileChange} />
                <Button disabled={!file} variant="outlined" color="neutral" onClick={processFileData}>Backup</Button>
            </Sheet>
        </Modal>
    );
}