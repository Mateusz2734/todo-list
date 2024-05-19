import { useState, useCallback } from 'react';
import { useLocalStorage } from '@uidotdev/usehooks';
import { Formik, Form } from 'formik';

import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Stack from '@mui/joy/Stack';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';

import { PlainInput } from './PlainInput';
import { PartialTask, Task } from '../types';
import { createTask } from '../task';
import dayjs from 'dayjs';
import { DatePicker } from './DatePicker';
import { PriorityPicker } from './PriorityPicker';

const initialValues: PartialTask = {
    name: "",
    description: "",
    dueDate: dayjs(new Date()),
    priority: "none",
};

export function TaskAdder({ modalOpen, setModalOpen }: TaskAdderProps) {
    const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);
    const [dateOpen, setDateOpen] = useState(false);
    const [priorityOpen, setPriorityOpen] = useState(false);

    const handleDateOpenChange = useCallback(handleOpen(setDateOpen), []);
    const handlePriorityOpenChange = useCallback(handleOpen(setPriorityOpen), []);
    const handleSubmit = (values: PartialTask) => {
        const task = createTask(values);
        setTasks([...tasks, task]);
        setModalOpen(false);
    };


    return (
        <Modal sx={{ zIndex: 10000 }} open={modalOpen} onClose={() => setModalOpen(false)} slotProps={slotProps} >
            <ModalDialog sx={{ maxWidth: { "xs": "80%" }, minWidth: { "sm": "500px" } }}>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                >
                    {({ handleChange, handleBlur, values }) => (
                        <Form>
                            <Stack>
                                <PlainInput
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Task name"
                                    size="lg"
                                    required
                                />
                                <PlainInput
                                    name="description"
                                    value={values.description}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Description"
                                    size="sm"
                                />
                                <Stack direction={"row"} spacing={1}>
                                    <DatePicker
                                        open={dateOpen}
                                        setOpen={setDateOpen}
                                        handleOpenChange={handleDateOpenChange}
                                        values={values}
                                        handleChange={handleChange}
                                    />
                                    <PriorityPicker
                                        open={priorityOpen}
                                        handleOpenChange={handlePriorityOpenChange}
                                        handleChange={handleChange}
                                    />
                                </Stack>

                                <Divider sx={{ mt: 2, mb: 2 }} />

                                <Stack direction="row" justifyContent={"flex-end"} spacing={1}>
                                    <Button type="reset" variant="soft" color="neutral" onClick={() => setModalOpen(false)}>Cancel</Button>
                                    <Button type="submit">Add task</Button>
                                </Stack>
                            </Stack>
                        </Form>
                    )}
                </Formik>
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

type TaskAdderProps = {
    modalOpen: boolean;
    setModalOpen: (open: boolean) => void;
};

function handleOpen(setOpen: (open: boolean) => void) {
    return (_: React.SyntheticEvent | null, isOpen: boolean) => {
        setOpen(isOpen);
    };
}