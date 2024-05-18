import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';

export function TaskAdder({ modalOpen, setModalOpen }: { modalOpen: boolean, setModalOpen: (open: boolean) => void; }) {

    return (
        <Modal sx={{ zIndex: 10000 }} open={modalOpen} onClose={() => setModalOpen(false)} slotProps={{ backdrop: backdropProps }} >
            <ModalDialog>
                <DialogTitle>Create new project</DialogTitle>
                <DialogContent>Fill in the information of the project.</DialogContent>
                <form
                    onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        setModalOpen(false);
                    }}
                >
                    <Stack spacing={2}>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input autoFocus required />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Description</FormLabel>
                            <Input required />
                        </FormControl>
                        <Button type="submit">Submit</Button>
                    </Stack>
                </form>
            </ModalDialog>
        </ Modal >
    );
};

const backdropProps = {
    style: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        backdropFilter: 'none',
    },
};