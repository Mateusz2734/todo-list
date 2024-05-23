import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

type AlertDialogProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
    onCancel: () => void;
    onConfirm: () => void;
};

export default function AlertDialog({ open, setOpen, onCancel, onConfirm }: AlertDialogProps) {
    return (
        <Modal keepMounted sx={{ zIndex: 10000 }} open={open} onClose={() => setOpen(false)} slotProps={slotProps} >
            <ModalDialog variant="outlined" role="alertdialog">
                <DialogTitle>
                    <WarningRoundedIcon />
                    Confirmation
                </DialogTitle>
                <Divider />
                <DialogContent>
                    Are you sure you want to delete? This action cannot be undone.
                </DialogContent>
                <DialogActions>
                    <Button variant="solid" color="danger" onClick={() => {
                        onConfirm();
                        setOpen(false);
                    }}>
                        Delete
                    </Button>
                    <Button variant="plain" color="neutral" onClick={() => {
                        onCancel();
                        setOpen(false);
                    }}>
                        Cancel
                    </Button>
                </DialogActions>
            </ModalDialog>
        </Modal>
    );
}

const slotProps = {
    root: {
        style: {
            bottom: "50%"
        }
    },
    backdrop: {
        style: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'none',
        },
    }
};