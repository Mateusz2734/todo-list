import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Stack from '@mui/joy/Stack';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';

import { PlainInput } from './PlainInput';


export function TaskAdder({ modalOpen, setModalOpen }: { modalOpen: boolean, setModalOpen: (open: boolean) => void; }) {

    return (
        <Modal sx={{ zIndex: 10000 }} open={modalOpen} onClose={() => setModalOpen(false)} slotProps={slotProps} >
            <ModalDialog sx={{ maxWidth: { "xs": "80%" }, minWidth: { "sm": "500px" } }}>
                <form
                    onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        setModalOpen(false);
                    }}
                >
                    <Stack>
                        <PlainInput sx={{}} placeholder="Task name" size="lg" fullWidth />
                        <PlainInput placeholder="Description" size="sm" />
                        <Divider />
                        <Stack direction="row" sx={{ mt: 2 }} justifyContent={"flex-end"} spacing={1}>
                            <Button type="reset" variant="soft" color="neutral" onClick={() => setModalOpen(false)}>Cancel</Button>
                            <Button type="submit">Add task</Button>
                        </Stack>
                    </Stack>
                </form>
            </ModalDialog>
        </ Modal >
    );
};

const slotProps = {
    root: {
        style: {
            bottom: "50%"
        }
    },
    backdrop: {
        style: {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            backdropFilter: 'none',
        },
    }
};
