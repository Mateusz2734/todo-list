import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';

import IconButton from '@mui/joy/IconButton';
import DeleteIcon from '@mui/icons-material/DeleteForeverOutlined';
import RadioButtonIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircleOutlined';
import RestoreIcon from '@mui/icons-material/Restore';

import { HoverableIcon } from './HoverableIcon';
import { priorityColors } from '../model/priority';
import { Task } from '../types';
import { DateChip } from './DateChip';

type TaskCardProps = {
    task: Task;
    onDelete: (id: string) => void;
    onMutate: (id: string, updatedTask: Task) => void;
};

export function TaskCard({ task, onDelete, onMutate }: TaskCardProps) {
    const hoverableIconProps = task.status === "done" ? {
        DefaultIcon: RestoreIcon,
        onClick: () => {
            const updatedTask: Task = { ...task, status: "todo" };
            onMutate(task.id, updatedTask);
        }
    } : {
        DefaultIcon: RadioButtonIcon,
        HoverIcon: CheckCircleIcon,
        color: priorityColors.find((elem) => elem.priority === task.priority)!.color,
        onClick: () => {
            const updatedTask: Task = { ...task, status: "done" };
            onMutate(task.id, updatedTask);
        }
    };

    return (
        <Sheet sx={{ p: 1 }}>
            <Stack direction="row" spacing={1} width="100%" height="100%">
                <Stack justifyContent="center">
                    <HoverableIcon
                        size="sm"
                        {...hoverableIconProps}
                    />
                </Stack>
                <Stack width="100%">
                    <Typography level="title-sm">{task.name}</Typography>
                    <Typography level="body-sm">{task.description}</Typography>
                    <DateChip date={task.dueDate} done={task.status === "done"} />
                </Stack>

                <IconButton color="danger" variant="plain" onClick={() => onDelete(task.id)}>
                    <DeleteIcon />
                </IconButton>
            </Stack>
        </Sheet>
    );
}